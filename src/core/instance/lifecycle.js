import { h } from 'snabbdom'
import { noop, } from '../util/index'
import Watcher from '../observer/watcher'
import { patch } from 'web/runtime/patch'

export function mountComponent (vm, el) {
  let updateComponent = () => {
    const vnode = vm.$options.render.call(vm, h)
    if (vm._vnode) {
      patch(vm._vnode, vnode)
    } else {
      patch(document.querySelector(el), vnode)
    }
    vm._vnode = vnode
  }

  new Watcher(vm, updateComponent, noop)
}
