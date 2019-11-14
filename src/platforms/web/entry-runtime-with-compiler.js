import Vue from './runtime/index'
import { query } from './util/index'

// const mount = Vue.prototype.$mount
// Vue.prototype.$mount = function (el) {
//   // debugger
//   el = el && query(el)

//   /* istanbul ignore if */
//   if (el === document.body || el === document.documentElement) {
//     return this
//   }

//   const options = this.$options
//   // resolve template/el and convert to render function
//   if (!options.render) {
//     let template = options.template
//     if (template) {
//       if (typeof template === 'string') {
//         if (template.charAt(0) === '#') {
//           template = idToTemplate(template)
//           /* istanbul ignore if */
//           if (process.env.NODE_ENV !== 'production' && !template) {
//             warn(
//               `Template element not found or is empty: ${options.template}`,
//               this
//             )
//           }
//         }
//       } else if (template.nodeType) {
//         template = template.innerHTML
//       } else {
//         if (process.env.NODE_ENV !== 'production') {
//           warn('invalid template option:' + template, this)
//         }
//         return this
//       }
//     } else if (el) {
//       template = getOuterHTML(el)
//     }
//     if (template) {
//       /* istanbul ignore if */
//       if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
//         mark('compile')
//       }
//       // 定义在src/compiler/to-function.js
//       const { render, staticRenderFns } = compileToFunctions(template, {
//         outputSourceRange: process.env.NODE_ENV !== 'production',
//         shouldDecodeNewlines,
//         shouldDecodeNewlinesForHref,
//         delimiters: options.delimiters,
//         comments: options.comments
//       }, this)
//       options.render = render
//       options.staticRenderFns = staticRenderFns
//     }
//   }
//   return mount.call(this, el, hydrating)
// }

export default Vue
