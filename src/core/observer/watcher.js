import Dep, {pushTarget, popTarget} from './dep'
let uid = 0

export default function Watcher(vm, expOrFn, options) {
  this.id = ++uid // uid for batching
  this.expOrFn = expOrFn;
  this.vm = vm;
  this.deps = []
  this.depIds = new Set();
  if (options) {
    this.lazy = !!options.lazy
  } else {
    this.lazy = false
  }

  this.dirty = this.lazy // 用于渲染时不把计算watcher设置成Dep.target
  // 此处为了触发属性的getter，从而在dep添加自己，结合Observer更易理解
  this.value = this.lazy ? undefined :this.get(); 
}

Watcher.prototype.get = function() {
  let value;
  pushTarget(this)

  // if (this.dirty) Dep.target = this
  value = this.expOrFn.call(this.vm)
  // if (this.dirty) Dep.target = null
  popTarget()
  return value
}

Watcher.prototype.update = function() {
  if (this.lazy) {
    this.dirty = true;
  } else {
    this.get(); 
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