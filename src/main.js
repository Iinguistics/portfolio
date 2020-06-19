import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueToasted from 'vue-toasted';
import 'bootstrap/dist/css/bootstrap.css';
import 'wired-elements/lib/wired-elements-bundled-full.js';

Vue.config.productionTip = false

Vue.use(VueToasted,{
  iconPack: 'fontawesome'
});

Vue.use(router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
