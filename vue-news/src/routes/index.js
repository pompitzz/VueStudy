import Vue from 'vue';
import VueRouter from "vue-router";
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";

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
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/user',
            component: UserView,
        },
        {
            path: '/item',
            component: ItemView,
        }
    ]
});

export {router};

