import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from "./plugins/ChartPlugin";

Vue.config.productionTip = false;

//ChartPlugin의 install() 실행
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
