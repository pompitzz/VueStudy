### this의 4가지 방식과 화살표 함수의 this
```js
// window 객체가 찍힘
function sum(a,b){
  console.log(this)
}

// 생성된 Vue를 가르킨다.
function Vue(el){
  console.log(this);
  this.el = el;
}
// 비동기 호출 시
console.log('호출 전: ', this); // VueComponent가 찍힌다.
fetchJobsList()
.then(function (response) {
  console.log('호출 후: ', this); // undefined찍힌다. 비동기 호출은 이렇게 된다.
})
.catch(function (error) {
  console.log(error)
});
//  화살표 함수는 호출 후 this도 VueComponent가 찍힘.
```
---
### 두가지의 데이터 처리 흐름 비교하기
1. **Profile에서 computed로 store의 데이터들을 받아오기**
```js
// UserView
import UserProfile from "../components/UserProfile";
export default {
  name: "NewsView",
  components: {
      UserProfile,
  }
}

// Profile
import {mapGetters} from 'vuex'
export default {
    name: "UserProfile",
    computed:{
        ...mapGetters(['getUser'])
    },
    created() {
        const username = this.$route.params.id;
        this.$store.dispatch('FETCH_USER',username);
    }
}
```
2. **props로 Profile에 데이터 내려주기**
- 데이터 전송흐름이 하나 더 생기나, 데이터가 보내지는것을 명시적으로 알 수 있다.
- Profile을 여러군데에서 참조할 경우는 props로 값을 내려주는게 더 좋음.
```js
// UserView에서 props로 내려준다.
<UserProfile :getUser="userInfo"/> // html

import UserProfile from "../components/UserProfile";
export default {
    name: "NewsView",
    components: {
        UserProfile,
    },
    computed: {
        userInfo() {
            return this.$store.user;
        }
    },
    created() {
        const username = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', username)
    }
}

// Profile
export default {
    name: "UserProfile",
    props:{
        getUser: Object, // Object라고 명시하면 Object만 받는다.
    }
}
```
