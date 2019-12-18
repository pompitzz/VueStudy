<template>
    <div>
        <!--        <user-profile :info="userInfo"/>-->
        <user-profile/>
    </div>
</template>

<script>
    import UserProfile from "../components/UserProfile";
    import {mapGetters} from "vuex";

    /*  2가지 테이터 처리 흐름 비교해보기
         - 1. Profile에서 store의 데이터들을 받아오기
         - 2. props를 이용하여 여기있는 데이터를 다 Profile로 넘기기
         (이러면 데이터 전송 flow가 한단계가 더 생긴다. 허나 데이터를 보내는 것을 명시적으로 알 수 있다.)
     */
    export default {
        name: "UserView",
        components: {
            UserProfile,
        },
    }
</script>

<style scoped>

</style>