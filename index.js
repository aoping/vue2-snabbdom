import Vue from './src/platforms/web/entry-runtime-with-compiler'

var vm = new Vue({
  el: '#app',
  data: {
    title: 'prev',
  },
  render(h) {
    return h('button', {on: {click: this.$options.methods.someFn}}, this.title);
  },
  methods: {
    someFn() {
      console.log("got clicked");
    }
  }
})
