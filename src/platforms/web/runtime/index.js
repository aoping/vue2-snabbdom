import Vue from 'core/index'
import { mountComponent } from 'core/instance/lifecycle'

// install platform patch function
// Vue.prototype.__patch__ = patch
// public mount method
Vue.prototype.$mount = function (el) {

  return mountComponent(this, el)
}

export default Vue
