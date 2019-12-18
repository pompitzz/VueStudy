<template>
    <div>
        <p v-for="ask in getAskList">
            <router-link v-bind:to="`/item/${ask.id}`">
                {{ask.title}}
            </router-link>
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