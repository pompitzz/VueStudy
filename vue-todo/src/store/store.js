import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
/* use는 vue의 플러그인 기능
   - vue를 사용할 때 전역으로 특정 기능을 추가하고 싶을 때 사용하면 된다.
*/

/* Vuex 기술 요소
   - state: 여러 컴포넌트에 공유되는 데이터 data
   - getters: 연산된 state 값을 접근하는 속성 computed
   - mutations: state 값을 변경하는 이벤트 로직, 메서드 methods
   - actions: 비동기 처리 로직을 선언하는 메서드 aysnc methods
 */

/* ==================================== state ====================================
기본 Vue
data: {
    message: 'hello',
}
<p> {{ message }} </p>

Vuex state
state: {
    message: 'heelo',
}
<p>{{ this.$store.state.message }}</p>
 */

/* ==================================== getters ====================================
state: {
    num : 10
},
getters: {
    getNumber(state) {
        return state.num;
    },
    doubleNumber(state){
        return state.num * 2;
    }
}
<p> {{ this.$store.getters.getNumber }}</p>
<p> {{ this.$store.getters.doubleNumber }}</p>
*/

/* ==================================== mutations ====================================
  - state의 값을 변경할 수  있는 유일한 방법이자 메서드
  - commit()을 동작 시킨다.
  state: {num: 10},
  mutations: {
    printNumbers(state){
        return state.num
        },
    sumNumbers(state, anotherNum){
        return state.num + anotherNum;
        }
   }
   this.$store.commit('printNumbers'); // 10 나옴
   // anotherNum을 설정해서 전달 할 수 있다.
   this.$store.commit('sumNumbers', 20); // 30 나옴

   - ============== mutation의 commit() 형식 ==============
   state: {storeNum: 10},
   mutations: {
    printNumbers(state, payload){ // 관행상 payload라고 쓴다.
            return state.storeNum += payload.num;
        }
     }
   // 이렇게 객체로 다양하게 전달도 가능하다.
   this.$store.commit('modifyState', {
    str: 'passed from payload',
    num: 20
   });

 */

/* ==================================== actions ====================================
   - 비동기 처리 로직을 선언하는 메서드. 비동기 로직을 담당하는 mutations
   - 데이터 요청, Promise, ES6 async과 같은 비동기 처리는 모두 actions에 선언
   // store.js
   state: {
        count: 0
   },
   mutations: {
        addCounter(state) {
            state.counter++
        }
   },
   actions: {
        delayAddCounter(context){
            setTimeout( () => context.commit('addCounter'), 2000);
        }
   }

   // App.vue
   methods: {
        incrementCount() {
            this.$store.dispatch('delayAddCounter');
            이렇게 delayAddCounter 호출하면 actions에서 commit으로 2초 후에 addCounter 호출한다.
        }
   }

   ======== 비동기 처리 로직을 actions에 선언해야 하는 이유 =======
    - 언제 어느 컴포넌트에서 해당 state를 호출하고, 변경했는지 확인하기가 어려움.
      그렇기 때문에 mutations는 동기적, actions는 비동기적 으로 처리하자고 규격화 한것이다.

 */

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state: {
        headerText: 'TODO IT!',
        todoItems: storage.fetch(),
    },
    /* state로 직접 변경하지 않고 mutations로 변경할까?
       - 여러 개의 컴포넌트에서 state값을 변경할 경우 어느 컴포넌트에서 해당 state를 변경했는지 추적하기가 어렵다.
     */
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            payload.todoItem.completed = !payload.todoItem.completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    },
});
//this.$store 이렇게 접근이 가능하다.
