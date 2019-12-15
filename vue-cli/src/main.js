import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* render가 이런느낌이다.
var App = {
    template: '<div>app</div>'
}
*/
new Vue({
    render: h => h(App),
}).$mount('#app') // el: '#app'과 같은의미

/*
new Vue({
  el: '#app',
  render: h => h(App),
  // render는 뷰 내부에서 사용하는 상수, 템플릿을 정의했을 때 렌더가 실행된다,
  // render는 App이라는 컴포넌트를 다른 파일에서 불러와서 집어넣어서 렌더링 한것이다.
});
 */