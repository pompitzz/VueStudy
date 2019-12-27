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
- 상위 컴포넌트의 message를 v-bind:propsdata ="message"로 데이터를 하위 컴포넌트에게 내려주면 하위컴포넌트는 props: ['propsdata']로 내려 받을 수 있음.
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
