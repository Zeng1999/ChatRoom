import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';
import VueSocketio from 'vue-socket.io';

Vue.config.productionTip = false;
Vue.use(VueSocketio, "http://192.168.0.111:7001");
Vue.prototype.$axios = Axios;

new Vue({
  render: h => h(App)
}).$mount('#app');
