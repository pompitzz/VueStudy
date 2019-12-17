import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index'

Vue.config.productionTip = false;

/* main.js
   - 기본적으로 구조들을 파악할 수 있는 구조도가 눈에 보여야 한다.
   - 그러므로 라우터를 여기서 생성하지말고 따로 만드는게 좋다.
 */
new Vue({
    render: h => h(App),
    router
}).$mount('#app');
