import Vue from 'vue';
import Vuex from "vuex";
import {fetchAskList, fetchJobsList, fetchNewsList} from "../api/api";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

/* Vuex 란?
   - 상태 관리 도구
   - 상태란 여러 컴포넌트간에 공유되는 데이터 속성이다.
 */
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        newsList: [],
        askList: [],
        jobList: [],
        user: {},
        item: {},
    },
    getters,
    mutations,
    actions
});

export {store}