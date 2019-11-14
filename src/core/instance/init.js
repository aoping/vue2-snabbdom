import { initState } from './state'


export function initMixin (Vue) {
  Vue.prototype._init = function(options){
    const vm = this
    vm._isVue = true

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = options
    }
    vm._renderProxy = vm

    initState(vm)

    vm.$mount(vm.$options.el)
  }

}

export function initInternalComponent(vm, options) {

}
