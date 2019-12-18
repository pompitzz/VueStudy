<template>
    <div>
        <!-- UserProfile 컴포넌트 -->
        <section>
            <user-profile :info="getItem">
                <slot slot="username">
                    <router-link v-bind:to="`/user/${getItem.user}`">
                        {{getItem.user}}
                    </router-link>
                </slot>
                <template slot="time">{{'Posted: ' + getItem.time_ago}}</template>
            </user-profile>
        </section>

        <section>
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
    import UserProfile from "../components/UserProfile";
    import {mapGetters} from "vuex";

    export default {
        name: "ItemView",
        components: {
            UserProfile
        },
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
</style>