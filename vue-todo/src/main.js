import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store";

Vue.config.productionTip = false;

new Vue({
    store: store, // 축약 이용 store: store
    render: h => h(App),
}).$mount('#app');

