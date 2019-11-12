import { h, init } from 'snabbdom'
// init 方法用来创建 patch 函数
const patch = init([])

const someFn = () => console.log(111)

const MyComponent = props => {
  return h('div#container.two.classes', {on: {click: someFn}}, [
    h('span', {style: {fontWeight: 'bold'}}, 'This is bold'),
    ' and this is just normal text ',
    h('a', {props: {href: '/foo'}}, props.title)
  ])
}

// 组件的产出是 VNode
const prevVnode = MyComponent({ title: 'prev' })
console.log(prevVnode)
// 将 VNode 渲染成真实 DOM
patch(document.getElementById('app'), prevVnode)

// 两秒之后重渲染
setTimeout(() => {
  // 数据变更，产出新的 VNode
  const nextVnode = MyComponent({ title: 'next' })
  // 通过对比新旧 VNode，高效的渲染真实 DOM
  patch(prevVnode, nextVnode)
}, 2000)
