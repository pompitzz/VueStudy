import Vue from 'vue';
import VueRouter from "vue-router";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";
import createdListView from "../views/CreatedListView"
import bus from "../utils/bus";
import {store} from "../store/index"

Vue.use(VueRouter);

function confirmDataInit(to, next) {
    bus.$emit('start:spinner');
    store.state.list = [];
    console.log('list', store.state.list);
    store.dispatch('FETCH_LIST', to.name)// 인스턴스 안에서만 this.$store로 가능, 그래서 따로 import 해야함
        .then(() => next())
        .catch((error) => console.log(error));
}

const router = new VueRouter({
    mode: 'history',
    // routes가 커졌을 때도 모듈화가 가능하다.
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            //component: NewsView,
            component: createdListView('NewsView'),
            //라우터 네비게이션 가드 설정
            beforeEnter: (to, from, next) => {
                confirmDataInit(to, next);
            }
        },
        {
            path: '/ask',
            name: 'ask',
            //component: AskView,
            component: createdListView('AskView'),
            beforeEnter: (to, from, next) => {
                confirmDataInit(to, next);
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            //component: JobsView,
            component: createdListView('JobsView'),
            beforeEnter: (to, from, next) => {
                confirmDataInit(to, next);
            }
        },
        {
            //:id로 넘기기 때문에 개발자도구를 보면 id:james 이런식으로 돼있다.
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
});

export {router};

