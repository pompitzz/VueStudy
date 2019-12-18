<template>
    <div>
        <list-item/>
    </div>
</template>

<script>
    import ListItem from "../components/ListItem";
    import bus from "../utils/bus";

    export default {
        components: {
            ListItem,
        },
        // name: "AskView",
        // computed: {
        //     ...mapGetters(['getAskList']),
        // },
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_ASK')
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }, 3000);
        }
    }
</script>

<style scoped>
</style>