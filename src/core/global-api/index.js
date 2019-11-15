import { ASSET_TYPES } from 'shared/constants'
import { initAssetRegisters } from './assets'
import { initExtend } from './extend'


export function initGlobalAPI (Vue) {
  Vue.options = Object.create(null)
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })
  Vue.options._base = Vue

  initExtend(Vue)
  initAssetRegisters(Vue)
}