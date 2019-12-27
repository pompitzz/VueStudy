### Vuex
- state: 여러 컴포넌트에 공유되는 data
- getters: 연산된 state 값을 접근하는 속성 computed
- mutations: state 값을 변경하는 이벤트 로직 메서드 methods
- actions: 비동기 처리 로직을 선언하는 메서드 async methods
#### state
```js
// 그냥 Vue
data: {
  message: 'hello'
}
<p> {{ message }} </p>

// Vuex
state:{
  message: 'hello'
}
<p>{{ this.$state.state.message }}</p>
```
#### getters
```js
state: {
  num: 10
},
getters{
  getNumber(state){
    return state.num;
  }
}
<p> {{ this.$store.getters.getNumber }}</p>
```
#### mutations
- state의 값을 변경할수 있는 **유일한 방법** 이자 메서드
- commit()을 동작시킨다
```js
state: {
  num:10
},
mutations:{
  printNumbers(state){
    return state.num;
  },
  sumNumbers(state, payload){
    return state.num + payload;
  }
}
this.$store.commit('printNumbsr'); // 결과는 10
this.$store.commit('sumNumbers', 20); // 결과는 30, payload는 객체로도 가능
```
#### actions
- 비동기 처리 로직을 선언하는 메서드
- 데이터 요청, Promise, ES6 async 같은 비동기 처리는 모두 actions에 선언하자
- 왜 비동기 처리를 actions에 해야할까?
- mutations는 동기, actions는 비동기 로직을 넣는다고 규격화를 하여 나중에 데이터 추적 및 유지보수를 하기 쉽게하기 위해
```js
state: {
  count: 0
},
mutations: {
  addCounter(state){
    state.count++;
  }
},
actions: {
  delayAddCounter(context){
    setTimeout(() => context.commit('addCounter'), 2000);
  }
}

// actions 사용하기
methods:{
  incrementCount() {
    this.$store.dispatch('delayAddCounter');
    // actions가 수행되고 2초 후에 addCounter가 동작 된다.
  }
}
```
