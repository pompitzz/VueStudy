import Vue from 'vue';
import VueRouter from "vue-router";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";
import createdListView from "../views/CreatedListView"

Vue.use(VueRouter);

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
        },
        {
            path: '/ask',
            name: 'ask',
            //component: AskView,
            component: createdListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            //component: JobsView,
            component: createdListView('JobsView'),
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

