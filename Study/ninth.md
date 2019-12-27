#### Vue에서 DOM에 접근하기
```js
// html
<div ref="app" id="app">hello</div>

//Vue
let divElement = this.$refs.app; // html에 ref를 참조하여 DOM에 접근할 수 있다.
```
#### Vue에 플로그인 등록하기
- Chart.js 라이브러리를 설치하고 뷰에서 쉽게 사용할 수 있게 플러그인으로 등록하기
- [Vue 공식문서](https://vuejs.org/v2/guide/plugins.html#ad)
- [Chart.js](https://www.chartjs.org/)
```js
// ====================== ChartPlugin.js ======================
// 외부라이브러리 chart.js를 플러그인으로 등록한다.
import Chart from 'chart.js'

export default {
    install(Vue) {
        // 모든 컴포넌트에서 this.$_Chart 로 접근가능.
        Vue.prototype.$_Chart = Chart;
    }
}

// ====================== main.js ======================
import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from "./plugins/ChartPlugin";

Vue.config.productionTip = false;

Vue.use(ChartPlugin); // 이렇게 ChartPlugin을 사용할 수 있다.

new Vue({
  render: h => h(App),
}).$mount('#app');


// ====================== App.vue ======================
<bar-chart v-bind:propsdata="chartDataSet"/> // 데이터를 내려준다.

export default {
        components: {
            BarChart,
        },
        data() {
            return {
                chartDataSet:[]
            }
        },
        created() {
            axios.get('chartJs.com/getChart')
            .then(response => this.chartDataSet= response.data)
            .catch(error => console.log(error));
        }
    }

// ====================== BarChart.vue ======================
export default {
    name: "BarChart",
    // 하위컴포넌트는 최대한 멍청하게!!
    // 상위컴포넌트에서 데이터를 내려주는게 컴포넌트를 재활용하기 쉽다.
    props: ['propsdata'],
    mounted() {
        // 이렇게 App 이하의 컴포넌트에서 $_Chart를 이용하여
        // ChartPlugin을 사용할 수 있다. $_(name)이 뷰가 권고하는 네이밍 규칙이다.
        new this.$_Chart(this.$refs.barChart, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsdata
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    },
}
```
