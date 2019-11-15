import Vue from './src/platforms/web/entry-runtime'

Vue.component('button-counter', {
  data: function () {
    return {
      num: 0
    }
  },
  render(h) {
    return h('button', {on: {click: this.someFn}}, this.num);
  },
  methods: {
    someFn() {
      this.num++
    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {
    msg: 'hello'
  },
  render(h) {
    return h('div', {}, [
      this._c('button-counter'),
      h('span', {}, this.msg)
    ]);
  },
})

// setTimeout(() => {
//   vm.deep.num++
// }, 3000)
