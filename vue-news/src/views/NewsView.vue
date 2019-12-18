<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="news in getNewsList">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{news.points || 0}}
                </div>

                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <a :href="news.url">
                            {{news.title}}
                        </a>
                    </p>
                    <small class="user-info">
                        {{news.time_ago}} by
                        <router-link class="user-link" v-bind:to="`/user/${news.user}`">{{news.user}}</router-link>
                    </small>
                </div>
            </li>
        </ul>
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
    .news-list {
        margin: 0;
        padding: 0;
    }

    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        padding: 5px
    }

    .points {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #42b883;
    }

    .news-title {
        margin: 0;
    }

    .user-info {
        color: #828282;
    }

    .user-link {
        color: #0fa009;
    }


</style>