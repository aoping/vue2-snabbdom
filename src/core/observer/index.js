import Dep from "./dep";

export function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  for (var key in data) {
    var dep = new Dep()
    let val = data[key]
    observe(val)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
        return val
      },
      set(newVal) {
        if (val === newVal) return;
        val = newVal
        dep.notify(); // 通知所有订阅者
      },
    })
  }
}

// function Observer(key) {

// }