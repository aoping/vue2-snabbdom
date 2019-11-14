let uid = 0

export default function Dep() {
  this.id = ++uid // uid for batching
  this.subs = [];
  this.subIds = new Set();

}
Dep.prototype.addSub = function(sub) {
  if (!this.subIds.has(sub.id)) {
    this.subs.push(sub);
    this.subIds.add(sub.id);
  }
}

Dep.prototype.depend = function() {
  if (Dep.target) {
    Dep.target.addDep(this)
  }
}

Dep.prototype.notify = function() {
  this.subs.forEach(function(sub) {
      sub.update();
  });
}
Dep.target = null
const targetStack = []

export function pushTarget (target) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}