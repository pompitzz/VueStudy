import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from "../views/DashBoard";
import Projects from "../views/Projects";
import Team from "../views/Team";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashBoard',
            component: DashBoard
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        }
    ]
});