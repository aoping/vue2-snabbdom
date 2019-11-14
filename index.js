import Vue from './src/platforms/web/entry-runtime'

var vm = new Vue({
  el: '#app',
  data: {
    title: 'prev',
    num: 1,
    deep: {
      num: 1
    }
  },
  computed: {
    computedNum() {
      return this.num * 10
    }
  },
  render(h) {
    return h('button', {on: {click: this.someFn}}, this.computedNum);
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
