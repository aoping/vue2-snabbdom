import { h } from 'snabbdom'
import { noop, } from '../util/index'
import Watcher from '../observer/watcher'
import { patch } from 'web/runtime/patch'

export function mountComponent (vm, el) {
  vm.$el = el
  let updateComponent = () => {
    const vnode = vm._render() //同目录下的render.js文件中定义
    vm._update(vnode) // 本文件中的_update方法
  }

  new Watcher(vm, updateComponent, noop)
}


export function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode) {
    const vm = this

    if (vm._vnode) {
        patch(vm._vnode, vnode)
      } else {
        patch(document.querySelector(vm.$el), vnode)
      }
      vm._vnode = vnode
  }
}