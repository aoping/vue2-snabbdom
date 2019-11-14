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
  render(h) {
    return h('button', {on: {click: this.someFn}}, this.deep.num);
  },
  methods: {
    someFn() {
      this.deep.num++
    }
  }
})
