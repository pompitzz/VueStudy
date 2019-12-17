<template>
    <div>
        <p v-for="news in getNewsList">
            <a :href="news.url">
                {{news.title}}
            </a>
            <small>{{news.time_ago}} by {{news.user}}</small>
        </p>
    </div>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        name: "NewsView",
        computed: {
            ...mapGetters(['getNewsList'])
        },
        created() {
            this.$store.dispatch('FETCH_NEWS');
        }

        /*
            beforeMount, created 에서 주로 값을 받아옴
            mounted로 하면 뷰의 리액티브티 시스템때문에 화면이 다시 그려진다.
         */
    }
</script>

<style scoped>

</style>