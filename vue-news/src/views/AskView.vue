<template>
    <div>
        <list-item/>
    </div>
</template>

<script>
    import ListItem from "../components/ListItem";
    // import {mapGetters} from "vuex";

    export default {
        components: {
            ListItem,
        }
        // name: "AskView",
        // computed: {
        //     ...mapGetters(['getAskList']),
        // },
        // created() {
        //     this.$store.dispatch('FETCH_ASK')
        // }
    }
</script>

<style scoped>
    /*.ask-list {*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*}*/

    /*.post {*/
    /*    list-style: none;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    border-bottom: 1px solid white;*/
    /*    padding: 5px;*/
    /*}*/

    /*.points {*/
    /*    width: 80px;*/
    /*    height: 60px;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    justify-content: center;*/
    /*    color: #42b883;*/
    /*}*/

    /*.ask-title {*/
    /*    margin: 0;*/
    /*}*/

    /*.ask-info {*/
    /*    color: #828282;*/
    /*}*/

    /*.ask-user {*/
    /*    color: #0fa009;*/
    /*}*/
</style>