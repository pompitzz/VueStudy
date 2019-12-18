<template>
    <div>
        <!-- 질문 상세 정보 -->
        <section>
            <div class="user-container">
                <div>
                    <i class="fas fa-user"/>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${getItem.user}`" class="user-name">
                        {{getItem.user}}
                    </router-link>
                    <div class="time">
                        {{getItem.time_ago}}
                    </div>
                </div>
            </div>
            <h2>{{getItem.title}}</h2>

        </section>
        <!--  질문 댓글 -->
        <section>
            <div v-html="getItem.content">
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ItemView",
        computed: {
            ...mapGetters(['getItem'])
        },
        created() {
            const id = this.$route.params.id;
            this.$store.dispatch('FETCH_ITEM', id);
        }
    }
</script>

<style scoped>
    .user-container {
        display: flex;
        align-items: center;
        padding: 7px;
    }

    .fa-user {
        font-size: 2.5rem;
    }

    .user-description {
        padding-left: 8px;
    }

    .time {
        font-size: 0.8rem;
    }

    .user-name {
        color: black;
    }
</style>