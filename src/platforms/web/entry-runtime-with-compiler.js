import Vue from './runtime/index'
import { h } from 'snabbdom'

export function compiler(tag, attrs) {
  let props = attrs || {}
  let children = []
  let options = {
    on: {}
  }
  for (const k in props) {
    if (k[0] === 'o' && k[1] === 'n') {
      options.on[k.slice(2).toLocaleLowerCase()] = props[k]
    }
  }

  for (let i = 2; i < arguments.length; i++) {
    let vnode = arguments[i]
    children.push(vnode)
  }
  return h(tag, options, children)
}

export default Vue
