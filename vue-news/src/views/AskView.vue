<template>
    <div>
        <ul class="ask-list">
            <li class="post" v-for="ask in getAskList">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ask.points}}
                </div>
                <div>
                    <p class="ask-title">
                        <router-link v-bind:to="`/item/${ask.id}`">
                            {{ask.title}}
                        </router-link>
                    </p>
                    <small class="ask-info">
                        {{ask.time_ago}} by <span class="ask-user">{{ask.user}}</span>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        name: "AskView",
        computed: {
            ...mapGetters(['getAskList']),
        },
        created() {
            this.$store.dispatch('FETCH_ASK')
        }
    }
</script>

<style scoped>
    .ask-list {
        margin: 0;
        padding: 0;
    }

    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid white;
        padding: 5px;
    }

    .points {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #42b883;
    }

    .ask-title {
        margin: 0;
    }

    .ask-info {
        color: #828282;
    }

    .ask-user {
        color: #0fa009;
    }
</style>