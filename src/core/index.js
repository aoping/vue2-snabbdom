/*
1. initGlobalAPI 给Vue挂载全局的接口，如Vue.set, Vue.nextTick, Vue.options
Vue.options.'components', 'directives', 'filters'
Vue.config
Vue.util
内建组件KeepAlive
Vue.use
Vue.mixin
Vue.extend
Vue.component, directive, filter

*/

import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'

initGlobalAPI(Vue)

export default Vue
