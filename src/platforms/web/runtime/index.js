import { h } from 'snabbdom'
import Vue from 'core/index'
import { patch } from './patch'

// install platform patch function
// Vue.prototype.__patch__ = patch
// public mount method
Vue.prototype.$mount = function (el) {
  const vnode = this.$options.render.call(this, h)
  return patch(document.querySelector(el), vnode)
}

export default Vue
