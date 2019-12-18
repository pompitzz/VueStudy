<template>
    <div>
        <ul class="item-list">
            <li class="post" v-for="item in listItems">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{item.points || 0}}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <!-- 아이템 타이틀 영역
                         - templae와 v-if를 이용하여 컴포넌트 공통화 -->
                    <p class="item-title">
                        <template v-if="item.domain">
                            <a :href="item.url">
                                {{item.title}}
                            </a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`/item/${item.id}`">
                                {{item.title}}
                            </router-link>
                        </template>
                    </p>
                    <small class="user-info">
                        {{item.time_ago}} by
                        <router-link
                                class="user-link"
                                v-bind:to="`/user/${item.user}`" v-if="item.user">{{item.user}}
                        </router-link>
                        <a :href="item.url" v-else>
                            {{item.domain}}
                        </a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {

        name: "NewsView",
        computed: {
            listItems() {
                const name = this.$route.name;
                if (name === 'news') {
                    return this.$store.state.newsList;
                } else if (name === 'ask') {
                    return this.$store.state.askList;
                } else if (name === 'jobs') {
                    return this.$store.state.jobsList;
                }
            }
        },
        created() {
            // const name = this.$route.name;
            // if (name === 'news') {
            //     this.$store.dispatch('FETCH_NEWS');
            // } else if (name === 'ask') {
            //     this.$store.dispatch('FETCH_ASK');
            // } else if (name === 'jobs') {
            //     this.$store.dispatch('FETCH_JOBS');
            // }
        }
        /*
            beforeMount, created 에서 주로 값을 받아옴
            mounted로 하면 뷰의 리액티브티 시스템때문에 화면이 다시 그려진다.
         */
    }
</script>

<style scoped>
    .item-list {
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

    .item-title {
        margin: 0;
    }

    .user-info {
        color: #828282;
    }

    .user-link {
        color: #0fa009;
    }


</style>