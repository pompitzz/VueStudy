<template>
    <div>
        <p>name : {{getUser.id}}</p>
        <p>karam : {{getUser.karma}}</p>
        <p>created : {{getUser.created}}</p>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "UserView",
        computed: {
            // userInfo() {
            //   return this.$store.state.user;
            // },
            ...mapGetters(['getUser'])
        },
        created() {
            const username = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', username);
        }
    }
</script>

<style scoped>

</style>