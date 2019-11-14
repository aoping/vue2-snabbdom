import { noop, } from '../util/index'
import { observe } from '../observer'
import Watcher from '../observer/watcher'
import Dep from '../observer/dep'


const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

const computedWatcherOptions = { lazy: true }


export function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}


export function initState (vm) {
  vm._watchers = []
  const opts = vm.$options
  // if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  // if (opts.watch && opts.watch !== nativeWatch) {
  //   initWatch(vm, opts.watch)
  // }
}

/**
 * 1. 把data代理到_data
 * 2. 给data设置getter setter
 *
 * @param {*} vm
 */
function initData(vm) {
  let data = vm._data = vm.$options.data
  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    const key = keys[i]
    proxy(vm, `_data`, key)
  }

  observe(data, true /* asRootData */)
}


function initMethods(vm, methods) {
  for (const key in methods) {
    vm[key] = typeof methods[key] !== 'function' ? noop : methods[key].bind(vm)
  }
}

function initComputed(vm, computed) {
  vm._computedWatchers = Object.create(null) // 用于保存计算watcher

  for (const key in computed) {
    const userDef = computed[key]
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    vm._computedWatchers[key] = new Watcher(vm, getter, computedWatcherOptions)

    defineComputed(vm, key, userDef)
  }
}

function defineComputed(target, key, userDef) {
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get() {
      debugger

      const watcher = this._computedWatchers && this._computedWatchers[key]
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate()
        }
        if (Dep.target) {
          watcher.depend()
        }
        return watcher.value
      }
    },
    set: noop,
  })
}

function createComputedGetter (key) {
  return function computedGetter () {
    
  }
}