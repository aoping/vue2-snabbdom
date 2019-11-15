
const _toString = Object.prototype.toString

export function noop () {}

export function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

export function extend (to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}