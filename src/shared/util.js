
const _toString = Object.prototype.toString

export function noop () {}

export function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}