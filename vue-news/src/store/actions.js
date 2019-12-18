import {fetchAskList, fetchJobsList, fetchNewsList, fethchUserInfo, fetchItemInfo, fetchList} from "../api/api";

export default {

    /* this의 4가지 방식, 화살표 함수의 this
    this // window 객체가 찍힘
    function sum(a,b){
        console.log(this); // window 객체가 찍힘
    }
    function Vue(el){
        console.log(this); // 생성된 Vue를 가르킨다.
        this.el = el;
    }
    ================ 비동기 호출 시 ================
    console.log('호출 전: ', this); // VueComponent가 찍힌다.
    fetchJobsList()
    .then(function (response) {
        console.log('호출 후: ', this); // undefined찍힌다. 비동기 호출은 이렇게 된다.
    })
    .catch(function (error) {
        console.log(error)
    });
     ================ 화살표 함수 ================
     화살표 함수는 제대로 된다.
    */
    /*
    FETCH_NEWS(context) {
        // mutations에 접근할 수 있게 context가 항상 존재
        fetchNewsList()
            //vuex 구조상 actions에서 바로 state로 담을 수 없다.
            .then(response => {
                context.commit('SET_NEWS', response.data);
                return response;
            })
            .catch(error => console.log(error));
    },*/

    FETCH_USER({commit}, username) {
        fethchUserInfo(username)
            .then(({data}) => commit('SET_USER', data))
            .catch(error => console.log(error))
    },
    FETCH_ITEM({commit}, itemId) {
        fetchItemInfo(itemId)
            .then(({data}) => commit('SET_ITEM', data))
            .catch(error => console.log(error));
    },
    FETCH_LIST({commit}, pageName) {
        fetchList(pageName)
            .then(({data}) => commit('SET_LIST', data))
            .catch(error => console.log(error));
    }

}
