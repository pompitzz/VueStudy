<template>
    <div>
        <p v-for="ask in getAskList">
            <a :href="ask.url">
                {{ask.title}}
            </a>
            <small>{{ask.time_ago}} by {{ask.user}}</small>
        </p></div>
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

</style>