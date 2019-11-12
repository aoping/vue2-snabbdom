import { h, init } from 'snabbdom'
// init 方法用来创建 patch 函数
const patch = init([
  require('snabbdom/modules/class').default, // makes it easy to toggle classes
  require('snabbdom/modules/props').default, // for setting properties on DOM elements
  require('snabbdom/modules/style').default, // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners').default, // attaches event listeners
])

function someFn() {
  console.log("got clicked");
}

// // 两秒之后重渲染
// setTimeout(() => {
//   // 数据变更，产出新的 VNode
//   const nextVnode = MyComponent({ title: 'next' })
//   // 通过对比新旧 VNode，高效的渲染真实 DOM
//   patch(prevVnode, nextVnode)
// }, 2000)



function Vue(options) {
  debugger
  this._init(options)
}

Vue.prototype._s = function (text) {
  return this[text]
}

Vue.prototype._init = function(options){
  this.$options = options
  initData(this)
  this.$mount(this.$options.el)
}

function initData(vm) {
  let data = vm._data = vm.$options.data
  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    const key = keys[i]
    proxy(vm, `_data`, key)
  }
}

function noop () {}

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}


Vue.prototype.$mount =function (el) {
  const vnode = this.$options.render.call(this)
  debugger
  patch(document.querySelector(el), vnode)
}


var vm = new Vue({
  el: '#app',
  data: {
    title: 'prev',
  },
  render() {
    return h('button', {on: {click: someFn}}, this.title);
  }
})
