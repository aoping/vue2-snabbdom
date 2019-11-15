import Dep, {pushTarget, popTarget} from './dep'
import { parsePath } from '../util/lang'

let uid = 0

export default function Watcher(vm, expOrFn, cb, options) {
  this.id = ++uid // uid for batching
  this.cb = cb
  this.vm = vm;
  this.deps = []
  this.depIds = new Set();
  if (options) {
    this.user = !!options.user // user表示是否是用户定义的watcher,即我们在new Vue({watch:{}})里的watch
    this.lazy = !!options.lazy
  } else {
    this.user = this.lazy = false
  }

  this.dirty = this.lazy // 用于渲染时不把计算watcher设置成Dep.target
  this.getter = typeof expOrFn === 'function' ? expOrFn : parsePath(expOrFn);

  this.value = this.lazy ? undefined :this.get(); 
}

Watcher.prototype.get = function() {
  let value;
  const vm = this.vm
  pushTarget(this)

  value = this.getter.call(vm, vm)
  popTarget()
  return value
}

Watcher.prototype.update = function() {
  if (this.lazy) {
    this.dirty = true;
  } else {
    this.run(); 
  }
}

Watcher.prototype.addDep = function(dep) {
  const id = dep.id
  if (!this.depIds.has(id)) {
    this.deps.push(dep)
    this.depIds.add(id)
    dep.addSub(this)
  }
}

Watcher.prototype.evaluate = function() {
  this.value = this.get()
  this.dirty = false
}

Watcher.prototype.depend = function() {
  let i = this.deps.length
  while (i--) {
    this.deps[i].depend()
  }
}

Watcher.prototype.run = function() {
  const value = this.get()
  // 变化时才执行
  if (value !== this.value) {
    const oldValue = this.value
    this.value = value
    if (this.user) {
      try {
        this.cb.call(this.vm, value, oldValue)
      } catch (e) {
        console.error(`callback for watcher "${this.expression}"`)
      }
    } else {
      this.cb.call(this.vm, value, oldValue)
    }
  }
}

Watcher.prototype.teardown = function() {
  
}