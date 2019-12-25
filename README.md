### 즉시 실행 함수
- 기본적으로 앱의 로직을 노출되지 않게 내부 코드를 또 다른 스코프로 넣어준다.
- [참고](https://developer.mozilla.org/ko/docs/Glossary/IIFE)
 ```js
 (function (){
   fuction init(){

   }
   init();
 })();
 ```
- 이렇게 즉시 실행함수를 사용하면 실행 시에만 init이 호출되고 그 후엔 호출에도 호출 불가

### Reactivity
 - 데이터의 변화를 라이브러리에서 감지해 알아서 화면을 바꿔줌. -> 데이터 바인딩

### Component
 - 화면의 영역을 구분하여 개발할 수 있는 뷰의 기능, 컴포넌트 기반으로 화면을 개발하면 코드의 재사용성 및 빠른 화면 제작가능

#### 지역 컴포넌트 vs 전역 컴포넌트
  - 전역컴포넌트는 보통 플러그인이나 라이브러리 형태로 사용한다
  - 일반적인 경우에는 지역 컴포넌트에 등록한다.
```js
Vue.component('app-header', {
       template: '<h1>Header</h1>'
   }); // 전역 컴포넌트

new Vue({
      el: '#app',
      components: { // 지역 컴포넌트
          'app-footer': {
              template: '<footer>footer</footer>'
            }
        }
});
// 여기에는 전역 컴포넌트인 app-header는 등록되나 지역 컴포넌트인 app-footer는 등록 안됨
new Vue({
        el: '#app2',
    })
```
----
### 컴포넌트 통신
- 뷰 컴포넌트는 각각 고유한 데이터 유효 범위를 갖는다. 따라서, 컴포넌트 간에 데이터를 주고 받기 위해서는 상위, 하위 컴포넌트간의 규칙이 존재한다.
- 상위 -> 하위 컴포넌트: props 전달 ( 데이터 내려줌 )
- 하위 -> 상위 컴포넌트: 이벤트 발생 ( 이벤트 올려줌 )
#### 컴포넌트 통신 규칙이 필요한 이유
 - 규칙이 있으면 데이터를 추적하기 쉬워지기 때문에 개발의 효율성이 좋아진다.
#### props 전달하기
  - 상위 컴포넌트의 message를 v-bind:propsdata="message"로 데이터를 하위 컴포넌트에게 내려주면 하위컴포넌트는 props: ['propsdata']로 내려 받을 수 있음.
```js
// 상위 컴포넌트
new Vue({
    el: '#app',
    components: {
        'app-header': appHeader,
    },
    data: {
        message: 'Hello',
  }
});
<app-header v-bind:propsdata="message"></app-header> // html

// 하위 컴포넌트
var appHeader = {
     template: '<h1>{{propsdata}}</h1>',
     props: ['propsdata']
 };
```
#### 이벤트 올려주기
```js
var appHeader = {
        template: '<button v-on:click="passEvent">Click Me</button>',
        methods: {
            passEvent: function () {
                // 이렇게 이벤트를 발생시킨다.이벤트 이름: pass로 정했다는 뜻이다.
                this.$emit('pass');
            }
        }
    };
// appHeader에서 클릭하면 이벤트를 발생 시키고 상위 컴포넌트에선 아래와 같이 이벤트를 받을 수 있다.
<app-header v-on:pass="logText"></app-header> //html
```
#### 같은 레벨 컴포넌트에서 값을 넘길 때
 - 컴포넌트 규칙에 따르면 같은 레벨에 있을 때 바로 값을 넘기면 안된다.
 - ROOT라는 부모가 있고 A, B가 자식일 때 A ===> B로 값을 넘기려면 A는 부모(ROOT)에게 이벤트를 올려주고 부모에선 그 이벤트를 통해 B에게 값을 내려줘야 한다.
 - **같은 레벨인 AppContent 에서 AppHeader로 값을 넘겨주기**
 ```html
 <div id="app">
    <app-header v-bind:propsdata="num"></app-header>
    <app-content v-on:pass="deliverNum"></app-content>
</div>
 ```
 ```js
var appContent = {
  template: '<div>content<button v-on:click="passNum">pass</button></div>',
  methods: {
      passNum: function () {
          // 이벤트 발생시 값을 넘겨 주면 부모는 그 값을 사용 가능하다.
          this.$emit('pass', 10);
      }
  }
};
var appHeader = {
   template: '<div>header: {{propsdata}}</div>',
   props: ['propsdata']
};
new Vue({
   el: '#app',
   components: {
       'app-header': appHeader,
       'app-content': appContent
   },
   data: {
       num: 0
   },
   methods: {
       // 이벤트를 받는 부모에서는 넘김 값은 매개변수로 받을 수 있다.
       deliverNum: function (value) {
           this.num = value;
       }
   }
});
 ```
 ----
 ### 뷰 라우터
  -  싱글 페이지 애플리케이션을 구현할 때 사용하는 라이브러리이다.
  ```js
var router = new VueRouter({
     mode: 'history', // url 뒤에 #(해시)를 없애준다
     // 페이지의 라우팅 정보
     routes: [
         // routes의 속성의 배열이 페이지의 갯수 만큼 필요하다.
         // 로그인 페이지 정보
         {
             //login으로 가면 라우터를 통해 LoginComponent가 뜨게 된다.
             path: '/login',
             /* 해당 url에서 표시될 컴포넌트
                - 여기는 components가 아닌 component이다.
                  왜냐하면 뿌려지밀 컴포넌트는 하나이기 때문이다.
              */
             component: LoginComponent,
         },
         //메인 페이지 정보
         {
             path: '/main',
             component: MainComponent,
         }
     ]
 });
 new Vue({
    el: '#app',
    //Nue에서 라우터를 설정 해주지 않으면 에러 발생
    router: router,
});
  ```
  - 라우터 뷰를 html에서 실제 사용하는 방법
  ```html
<div>
    <!-- 라우터 링크는 화면에서 링크정보를 전송해주는 놈이다. 최종적으론 a tag로 변환된다.  -->
    <router-link to="/login">Login</router-link>
    <router-link to="/main">Main</router-link>
</div>
  <!-- 라우터 뷰를 통해 라우터에 정해진 url로 가면 그 컴포넌트가 나타나게 된다. -->
<router-view></router-view>
  ```
----
### Axios
 - 뷰에서 권고하는 HTTP통신 라이브러리. Promise 기반의 HTTP 통신 라이브러리이며 상대적으로 다른 HTTP 통신라이브러리들에 비해 API가 다양하며 문서화가 잘 되어있다.
####Promise
 - 자바 스크립트의 비동기 처리 패턴, [참고](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
    1. Callback
    2. Promise
    3. Promise + Generator
    4. async & await
```js
new Vue({
    el: '#app',
    methods: {
        getData: function () {
            var vm = this;
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    vm.users = response.data;
                })
                .catch(function (error) {
                });
        }
    }
});
```
---
### Vue 템플릿 문법
- 뷰로 화면을 조작하는 방법, 크게 데이터 바인딩와 디렉티브로 나뉜다.
- 데이터 바인딩
    - {{ user }}
- 디렉티브
    - `<span v-if="show">Vue.js</span>`
```js
new Vue({
    el: '#app',
    data: {
        num: 10,
    },
    /* data를 활용할땐 computed를 이용한다.
       num 값을 vue 개발자 도구에서 바꾸면 같이 변화한다.
     */
    computed: {
        doubleNum: function () {
            return this.num * 2;
        }
    }
});
```
```html
<!--  이런식으로 id값을 바인딩을 통해 넣을수 있다. -->
<p v-bind:class="name" v-bind:id="uuid">{{ num }}</p>
<p>{{ doubleNum }}</p>

<!--  loading = ture일땐 Loading... false일땐 test user Login has ben logged in  -->
<div v-if="loading">
    Loading...
</div>
<div v-else>
    test user Login has been logged in
</div>

<!--  이건 false여도 html tag가 사라지는게 아닌 display: none;이 된다.  -->
<div v-show="loading">
    Loading...
</div>

<!--  인풋 박스를 만들고 입력된 값을 p 태그에 출력해보세요  -->
<!-- v-model로 컴포넌트 데이터의 변경을 실시간으로 연동 가능 -->
<input placeholder="edit me" type="text" v-model="message">
<p>Message is: {{ message }}</p>
```
---
### Computed와 Watch
#### Computed
 - 기본적으로 data에 의존하므로 빠르게 계산된다.(캐싱 등에 사용)
 - 단순한 텍스트의 입력을 받아 거기에 대한 validation 값을 계산할 때 사용
#### Watch
 - 무거운 로직, 매번 실행되기엔 부담스러운 곳에 사용한다.
#### 결론
 - 레퍼런스에서는 대부분 computed를 사용하라고 권고한다.
#### Computed 사용
```html
<!-- 이렇게 사용할 순 있지만 로직 분리를 위해 computed 이용하는게 좋다 -->
<p v-bind:class=" { warning: isError } ">Hello</p>

<!--  즉 이렇게 errorTextColor라는 method를 만들고 그것을 이용하면 된다.  -->
<p v-bind:class="errorTextColor">Hello</p>
```
```js
new Vue({
    el: '#app',
    data: {
        isError: false,
    },
    computed: {
        errorTextColor: function () {
            return this.isError ? 'warning' : null;
        }
    }
});
```
#### Watch 사용
```html
{{ num }}
<button v-on:click="addNum">increase</button>
```
```js
new Vue({
   el: '#app',
   data: {
       num: 10
   },
   /* 데이터에 변화에 따른 특정 로직을 실행할 수 있다
       - num이 변화할 때마다 logText가 실행된다.
    */
   watch: {
       num: function () {
           this.logText();
       }
   },
   methods: {
       addNum: function () {
           this.num = this.num + 1;
       },
       logText: function () {
           console.log('changed')
       }
   }
});
```
---
## ES5와 ES6
### ES5
 - 선언한 함수와 변수를 해석기가 가장 상단에 있는 것처럼 인식
 - js 해석기는 코드의 라인 순서와 관계없이 함수 선언식과 변수를 위한 메모리 공간을 먼저 확보
 - 따라서 function (), var 코드는 최상단에 끌어 올려진 것 처럼보이기 때문에 변수를 뒤늦게 작성해도 괜찮은 것
 ```js
 // 함수 선언 식
 function sum(a, b) {
   return a + b;
 };

 // 함수 표현 식
 var sum = function() {
   return 10 + 20;
 }
 ```
 ```js
 // 이렇게 코딩하고 실행을 해보면
 function a() {
   return 10;
 }
 a();
 function a(){
   return 5;
 }

 // 실제론 이렇게 컴파일 되기 때문에 5가 리턴된다.
 function a() {
   return 10;
 }
 function a(){
   return 5;
 }
 a();
 ```
 ``` js
 // 이렇게 선언하더라도 에러가 나지 않음
 var sum = 5;
 sum = sum + i;
 var i = 10;

 // 실제론 이렇게 컴파일 되기 때문에 값이 이상하겠지만 정상적으로 동작한다.
 var sum;
 var i;
 sum = 5;
 sum = sum + i;
 i = 10;
 ```
### ES6
  - 블록단위 { }로 변수의 범위가 제한된다.
  - const: 한번 선언한 값에 대해 변경 불가 ( final )
  - let: 한번 선언한 값에 대해서 다시 선언할 수 없음. (int a후 다시 int a 불가)
  ```js
  //let 예제
  let sum 0;
  for (let i = 1  i < 5; i++){
    sum = sum + i;
  }
  console.log(sum); // 10;
  console.log(i); // 에러 발생, { }이 변수의 범위이므로
  ```
  ```js
  //const 예제
  const a = 20;
  a = 10; // 에러 발생

  // 하지만 객체나 배열의 내부는 변경 가능하다
  const a = {};
  a.num = 10;
  a; // {num: 10};
  const b =  [];
  b.push(10);
  b; // [10]
  ```
### Arrow Function - ES6 화살표 함수
 - 함수를 정의할 때 function 이라는 키워드를 사용하지 않고 => 로 대체
 - 흔히 사용하는 콜백 함수의 문법을 간결과
 ```js
 // ES5 함수 정의 방식
 var sum = function(a, b){
   return a + b;
 }

// ES6 함수 정의 방식
 var sum = (a, b) => {
   return a + b;
 }
 ```
 ```js
 // ES5
 var arr = ['a', 'b', 'c'];
 arr.forEach(function(value){
   console.log(value);
 });

 // ES6: 웹페이지의 바이트수가 줄어드니 조금의 성능 이윤은 있으나 그거보단 간결해진게 좋다
 var arr = ['a', 'b', 'c'];
 arr.forEach(value => console.log(value));
 ```
### Enhanced Object Literals - 향상된 객체 리터럴
 - 객체의 속성을 메서드로 사용할 때 function 예약어를 생략하고 생성 가능
 ```js
 // ES5
 var dic = {
   lookup: function() {
     console.log('hi lookup');
   }
 };
 dic.lookup();

// ES6의 향상된 객체 리터럴
 var dic = {
   lookup(){ // function이 필요없어짐
     console.log('hi lookup');
   }
 };
 dic.lookup();
 ```
 ```js
 var figures = 10;
 var dic = {
   // figures: figures, -> 객체의 속성과 값의 name이 같을땐 생략 가능
   figures
 }
 ```
 ---
## Vuex
 - state: 여러 컴포넌트에 공유되는 data
 - getters: 연산된 state 값을 접근하는 속성 computed
 - mutations: state 값을 변경하는 이벤트 로직 메서드 methods
 - actions: 비동기 처리 로직을 선언하는 메서드 async methods
### state
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
### getters
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
### mutations
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
### actions
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
---
