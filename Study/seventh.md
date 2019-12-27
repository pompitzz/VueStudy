### 하이 오더 컴포넌트와 Mixin
#### 하이 오더 컴포넌트
- 뷰의 하이 오더 컴포넌트는 리액트의 하이 오더 컴포넌트에서 기원된 것
- 하이 오더 컴포넌트는 컴포넌트 로직을 재사용하기 위한 고급 기술이다.
- createListView의 파라미터인 name에 따라 다른 actions가 수행되고 그 후  ListView로 render하고 ListView에선 ListItem을 통해 화면을 보여주게 된다.
- 즉 컴포넌트 깊이가 createdListView의 name이 AskView였다면
- AskView -> ListView -> ListItem이 된다.
```js
export default function createdListView(name) {
    return {
        name: name,
        created(){
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    console.log('fetched');
                    bus.$emit('end:spinner');
                })
                .catch(err => console.log(err));
        },
        render(createElement){
            return createElement(ListView);
            //return createElement(ListItem);
        }
    }
}

// ListView
import ListItem from "../components/ListItem";
export default {
    name: "ListView",
    components:{
        ListItem
    }
}

// ListItem
export default {
    name: "ListItem",
    computed: {
        listItems() {
            return this.$store.state.list;
        }
    },
}
```
#### 믹스인
- 믹스인은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법
- 재사용 로직은 data, methods, created 등과 같은 컴포넌트 옵션
- 하이 오더 컴포넌트의 단점
  - HOC는 LiseView라는 중간 View가 존재한다. 허나 믹스인은 존재하지 않음
  - 단 HOC는 News, Ask, JobsView를 createdListView 하나로 묶었지만 믹스인은 따로따로 View가 존재해야 한다.
  - ListView가 통신이 필요하게 되면 컴포넌트 깊이가 깊어질 수 있다.
  - 이럴때 믹스인이 유용하다.
- 각각의 뷰는 따로 존재하고 모달, 스피너같은 공통 로직이 있을 때 믹스인을 이용하면 좋을 거 같다.

```js
// ListMixin.js
import bus from "../utils/bus";

export default {
    created() {
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner');
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

//AskView
import ListItem from "../components/ListItem";
import ListMixin from "../mixins/ListMixin";

export default {
    components: {
        ListItem,
    },
    mixins: [ListMixin],
}

//JobsView
import ListItem from "../components/ListItem";
import ListMixin from "../mixins/ListMixin";

export default {
    name: "JobsView",
    components: {
        ListItem
    },
    mixins: [ListMixin],
}
```
---

### 데이터 호출 시점
#### 1. 컴포넌트 라이프 사이클 훅
- created: **컴포넌트가 생성** 되자마자 호출되는 로직
- beforeMount: 마운트 되지 직전에 호출되는 로직, render가 처음 실행된다.
- 등 많은 사이클 존재, 아래 링크 참조
- [각 라이프 사이클 설명](https://vuejs.org/v2/api/#created)
- [라이프 사이클](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

#### 2.라우터 네비게이션 가드
- 특정 URL로 접근하기 전에 **동작을 정의해서 제어 가능하다.**
- **라우터 네비게이션 가드 ===> 컴포넌트 라이프 사이클 훅**
- 파라미터로 to, from, next가 존재한다.
- to: 가려고하는 URL
- from: 현재 URL
- next: next 호출시 승인되어 to로 갈 수 있다.
```js
const router = new VueRouter({
routes: [
    {
        path: '/news',
        name: 'news',
        component: createdListView('NewsView'),
        // 여기가 라우터 네비게이션 가드
        beforeEnter: (to, from, next) => {
            confirmDataInit(to, next);
        }
    },
});

// 이런식으로 라우터 네이게이션 가드를 사용할 수 있다.
function confirmDataInit(to, next) {
    bus.$emit('start:spinner');
    store.state.list = [];
    // 인스턴스 안에서만 this.$store 로 접근이 가능하므로 따로 import 해준다.
    store.dispatch('FETCH_LIST', to.name)
        .then(() => next())
        .catch(err => console.log(err));
}
```
