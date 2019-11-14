export default function Dep() {
  this.subs = [];
}
Dep.prototype.addSub = function(sub) {
  this.subs.push(sub);
}

Dep.prototype.notify = function() {
  this.subs.forEach(function(sub) {
      sub.update();
  });
}
Dep.target = null
