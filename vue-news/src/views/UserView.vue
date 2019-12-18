<template>
    <div>
        <user-profile :info="userInfo">
            <div slot="username">{{userInfo.id}}</div>
            <!-- template는 태그없이 내용만 들어간다-->
            <span slot="time">{{ 'Joined: ' + userInfo.created}}, </span>
            <span slot="karma">{{userInfo.karma}}</span>
        </user-profile>
    </div>
</template>

<script>
    import UserProfile from "../components/UserProfile";
    import {mapGetters} from "vuex";

    /*  2가지 테이터 처리 흐름 비교해보기
         - 1. Profile에서 store의 데이터들을 받아오기
         - 2. props를 이용하여 여기있는 데이터를 다 Profile로 넘기기
         (이러면 데이터 전송 flow가 한단계가 더 생긴다. 허나 데이터를 보내는 것을 명시적으로 알 수 있다.)
         (현재 slot을 이용하여 컴포넌트를 동적으로 변경되게 하였으므로 props로 내리는것이 더 효율적인듯)
     */
    export default {
        name: "UserView",
        computed: {
            ...mapGetters({
                userInfo: 'getUser'
            }),
        },
        components: {
            UserProfile,
        },
        created() {
            const username = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', username);
        }
    }
</script>

<style scoped>
</style>