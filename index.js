import Vue from './src/platforms/web/entry-runtime'

var vm = new Vue({
  el: '#app',
  data: {
    num: 1,
    watchMsg: 'init msg'
  },
  watch: {
    num(newVal, oldVal) {
      this.watchMsg = newVal + ' apples'
    },
  },
  render(h) {
    return h('button', {on: {click: this.someFn}}, this.watchMsg);
  },
  methods: {
    someFn() {
      this.num++
    }
  }
})

// setTimeout(() => {
//   vm.deep.num++
// }, 3000)
