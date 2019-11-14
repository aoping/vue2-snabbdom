
export default function Dep() {
  this.subs = [];
  this.subIds = new Set();

}
Dep.prototype.addSub = function(sub) {
  if (!this.subIds.has(sub.id)) {
    this.subs.push(sub);
    this.subIds.add(sub.id);
  }
}

Dep.prototype.notify = function() {
  this.subs.forEach(function(sub) {
      sub.update();
  });
}
Dep.target = null
