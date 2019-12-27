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
---
### Axios
 - 뷰에서 권고하는 HTTP통신 라이브러리. **Promise 기반의 HTTP 통신** 라이브러리이며 상대적으로 다른 HTTP 통신라이브러리들에 비해 API가 다양하며 문서화가 잘 되어있다.
#### Promise
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
