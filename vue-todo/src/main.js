import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store";

Vue.config.productionTip = false;

new Vue({
    store: store, // 축약 이용 store: store
    render: h => h(App),
}).$mount('#app');

/* Helper란?
   - Store에 있는 4가지 속성들을 간편하게 코딩할수 있게 해준다
   - state -> mapState // this.#store.message 이런식으로 접근 할 필요가 없다.
   - getters -> mapGetters //
   - mutations -> mapMutations //
   - actions  -> mapActions //
*/

/* ES6 ...(Object Spread Operator) 학습
    let josh = {
      field: 'web',
      language: 'js'
    };

    let developer = {
      nation: 'korea',
      field: josh.field,
      languate: josh.language
    };

    // 이렇게 쓰면 josh의 모든 값들을 가져올 수 있다.
    let developer2 = {
      nation: 'korea2',
      ...josh
    };
 */

/* ================================ mapState ================================
// App.vue
import {mapState} from 'vuex'

computed() {
    //... 을 쓰는이유는 computed에 기존에 존재하는 값들이 있으므로
    ...mapState(['num'])
    // num() { return this.$store.state.num; }
}
//store.js
state: {
    num: 10
}
// <p> {{ this.$store.state.num }} </p> 이렇게 안해도된다.
<p> {{ this.num }} </p>

mapGetter도 비슷하다.
 */

/* ================================ mapMutations ================================
    // App.vue
    import { mapMutations } from 'vuex'

    methods: {
        ,,,mapMutations(['clickBtn']),
        authLogin() {},
        displayTable() {}
    }

    //store.js
    mutations: {
        clickBtn(state){
            alert(state.msg);
         }
    }

    <button @click='clickBtn'>popup message</button>
 */

/* ================================ mapActions ================================
    // App.vue
    import { mapActions } from 'vuex'

    methods: {
        ,,,mapActions(['delayclickBtn']),
        authLogin() {},
        displayTable() {}
    }

    //store.js
    actions: {
        delayclickBtn(context){
            setTimeout( () => context.commit('clickBtn'),2000);
         }
    }

    <button @click='delayclickBtn'>popup message</button>
 */
