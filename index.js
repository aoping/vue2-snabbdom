import Vue, { compiler } from './src/platforms/web/entry-runtime-with-compiler'

Vue.component('button-counter', {
  data: function () {
    return {
      num: 0
    }
  },
  render(h) {
    var button = <button onClick={this.someFn}>{this.num}</button>
    return button
    // return h('button', {on: {click: this.someFn}}, this.num);
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
    return (
      <div>
        {this._c('button-counter')}
        <span>{this.msg}</span>
      </div>
    )
    // return h('div', {}, [
    //   this._c('button-counter'),
    //   h('span', {}, this.msg)
    // ]);
  },
})

// setTimeout(() => {
//   vm.deep.num++
// }, 3000)
