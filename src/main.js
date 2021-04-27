import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import Ads from 'vue-google-adsense'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Google Analytics
Vue.use(VueGtag, {
  config: { id: "G-X9DEX2EKFY" }
})
// Google AdSense
Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
// Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-6356587960052012' })

new Vue({
  render: h => h(App),
}).$mount('#app')
