<template>
    <div>
        <div v-for="news in newsList">{{news.title}}</div>
    </div>
</template>

<script>
    import {fetchNewsList} from "../api";

    export default {
        name: "NewsView",
        data() {
            return {
                newsList: [],
                errors: []
            }
        },
        created() {
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
            fetchNewsList()
                .then(response => this.newsList = response.data)
                .catch(error => this.errors = error);
        },
        /*
            beforeMount, created 에서 주로 값을 받아옴
            mounted로 하면 뷰의 리액티브티 시스템때문에 화면이 다시 그려진다.
         */
    }
</script>

<style scoped>

</style>