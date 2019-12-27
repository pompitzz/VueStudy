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
