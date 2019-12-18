/* 인스턴스를 생성할 때 모든 인스턴스에 적용하고 싶은게 있을 땐 플러그인화 하면된다.
    Vue.se(Vuex) 이런거도 뷰에서 만들어 준 플러그인 사용한 것이다.
 */
import Chart from 'chart.js'

export default {
    install(Vue) {
        Vue.prototype.$_Chart = Chart; // 모든 컴포넌트에서 this.$_Chart 로 접근가능.
    }
}