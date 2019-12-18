<template>
    <div>
        <list-item/>
    </div>
</template>

<script>
    import ListItem from "../components/ListItem";
    import bus from "../utils/bus";

    export default {
        name: "JobsView",
        components: {
            ListItem
        },
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_JOBS')
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
    /*.job-list {*/
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

    /*.job-title {*/
    /*    margin: 0;*/
    /*}*/

    /*.job-info {*/
    /*    color: #828282;*/
    /*}*/

</style>