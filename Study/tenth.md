### 4가지 컴포넌트 디자인 패턴
#### 1. Common 패턴
- 가장 기본적인 컴포넌트 설계 방식
- 하위 컴포넌트(엔드포인트 컴포넌트)들은 presentational 컴포넌트이며 모든 데이터는 App.vue에서 관리된다.
```js
// ============================= App.vue =============================
<template>
    <div id="app">
        <app-header :title="appTitle"/>
        <app-content :items="items" @renew='renewItems'/>
    </div>
</template>

<script>
    import AppContent from "./components/AppContent";
    export default {
        name: 'app',
        components: {
            AppContent,
        },
        data() {
            return {
                items: [10, 20, 30],
            }
        },
        methods: {
            renewItems() {
                this.items = [40, 50, 60];
            },
        }
    }
</script>

// ============================= AppContent.vue =============================
<template>
    <div>
        <ul>
            <li v-bind:key="item" v-for="item in items">
                {{ item }}
            </li>
        </ul>
        <button @click="$emit('renew')">renew Items</button>
    </div>
</template>

<script>
    export default {
        props: {
            items: { // 이런식으로 props의 데이터를 검증할 수 있다.
                type: Array, // Array아니면 안된다.
                required: true, // 필수 값이다
            }
        }
    }
</script>
```
#### 2. Slot 패턴
- 마크업 확장이 가능한 컴포넌트
- 하위 컴포넌트가 지정한 slot 부분들을 부모 컴포넌트에서 커스텀 가능
```js
// ============================= App.vue =============================
<template>
    <div>
        <ul>
            <item :key="item" v-for="item in items">
                {{item}}
            </item>
        </ul>
    </div>
</template>

<script>
    import Item from "./Item";
    export default {
        name: 'app',
        components: {
            Item,
        },
        data() {
            return {
                items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4']
            }
        }
    }
</script>

// ============================= Item.vue =============================
<template>
    <li>
        <slot>
            <!-- 등록하는 곳에서 정의할 영역 -->
        </slot>
    </li>
</template>
```
#### 3. Controlled 패턴
- 결합력이 높은 컴포넌트
#### 하위 컴포넌트에서 props 데이터를 바꿀 때
- 상위 컴포넌트에서 내려준 props의 데이터를 하위 컴포넌트에서 변경하면 warning이 발생한다.
- 아래와 같이 상위 컴포넌트에서 props로 checked를 내려주고 하위 컴포넌트에선 그 값을 받아 v-model로 input checkbox가 클릭될 때 마다 checked 값을 변경하게 하였다.
- 실제 실행을하고 체크박스를 클릭하면 warning이 뜬다.
- 컴포넌트 통신 규칙에 상위 컴포넌트에서는 props로 데이터를 내려주고, 하위 컴포넌트에서는 이벤트를 올려 상위 컴포넌트에서 그에 맞게 데이터를 변경해야 한다.
- 그렇기 떄문에 실행은 되지만 warning이 뜨는 것
```js
// ================================== 상위 컴포넌트 ==================================
<template>
    <check-box :checked="checked"/>
</template>

<script>
    import CheckBox from "./components/CheckBox";

    export default {
        name: 'app',
        components: {
            CheckBox
        },
        data() {
            return {
                checked: false,
            }
        },
    }
</script>
// ================================== 하위 컴포넌트 ==================================
<template>
      <input type="checkbox" v-model="checked"/>
</template>

<script>
    export default {
        props: ['checked'],
        }
    }
</script>
```
#### Controlled Pattern 적용
- 상위컴포넌트에서 props로 데이터를 내리지말고 v-model을 이용하면 된다.
- v-model은 input(event), value(값)으로 조작된다.
- 즉 상위 컴포넌트에서 v-model로 내려주면 하위 컴포넌트에서는 props:['value']로 값을 받을 수 있고 input이라는 event를 올려보낼 수 있다.
```js
// ================================== 상위 컴포넌트 ==================================
<template>
    <check-box v-model="checked"/>
</template>
<script>
    import CheckBox from "./components/CheckBox";

    export default {
        name: 'app',
        components: {
            CheckBox
        },
        data() {
            return {
                checked: false,
            }
        },
    }
</script>

// ================================== 하위 컴포넌트 ==================================
<template>
      <input type="checkbox" :value="value" @click="toggleCheckBox" />
</template>

<script>
    export default {
        props: ['value'], // value를 받음
        methods: {
            toggleCheckBox() {
                this.$emit('input', !this.value); // input event를 올려줌
            }
        }
    }
</script>
```
#### 4. Renderless 패턴
- 표현을 하지않는 컴포넌트이다.
- 표현은 하지않고 데이터를 처리할 수 있다.
#### render에 대해 알아보자
```js
new Vue({
     el: '#app',
     data: {
         message: 'Hello Vue!!!',
     },

     render: function (createElement) {
         return createElement('p', this.message);
         // 이렇게 render하면
         // html에는 <p>{{message}}</p> 이렇게 렌더링 된다.
     }
})
// =================================== main.js의 render ===================================
// 실제 Vue 프로젝트의 main.js를 보면 아래와 같이 render가 설정되어있다.
new Vue({
  render: h =. h(App)
}).$mount('#app');

// 이러한 4단계를 거쳐 render가 저렇게 변화한 것이다.
// 1
render: function (createElement) {
  return createElement(App);
}

// 2: createElement를 h로 지칭한다.
render: function (h){
  return h(App);
}

// 3: ES6 문법 적용
render: (h) => {
  return h(App);
}

// 4: ES6 문법 적용
render: (h) => h(App)
```
- Renderless 패턴을 이용해보자
- 하위 컴포넌트에서는 template는 존재하지 않고 데이터만 처리한다.
- url를 props로 내려주고 하위 컴포넌트에서는 그에맞는 로직을 수행한다.
- 그리고 그 값을 render의 $scopedSlot을 통해 데이터를 설정하면 상위컴포넌트 template에서 slot-scope를 통해 그 데이터를 처리할 수 있다.
```js
<template>
    <div>
        <fetch-data url="http://jsonplaceholder.typicode.com/users/1">
            <div slot-scope="{response, loading}">
                <div v-if="!loading">
                    {{response}}
                </div>
                <div v-if="loading">
                    Loading....
                </div>
            </div>
        </fetch-data>
    </div>
</template>

<script>
    import FetchData from "./components/FetchData";

    export default {
        name: 'app',
        components: {
            FetchData
        }
    }
</script>

<script>
    import axios from 'axios'

    export default {
        props: ['url'],
        data() {
            return {
                response: null,
                loading: true,
            }
        },
        created() {
            axios.get(this.url)
                .then(response => {
                    this.response = response.data;
                    this.loading = false;
                });
        },
        render() {
            return this.$scopedSlots.default({
                response: this.response,
                loading: this.loading,
            });
        },
    }
</script>

```
