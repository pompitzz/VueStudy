<template>
    <div>
        <p v-for="job in getJobList">
            <a :href="job.url">
                {{job.title}}
            </a>
            <small>{{job.domain}}</small>
        </p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "JobsView",
        computed: {
            ...mapGetters(['getJobList']),
        },
        created() {
            this.$store.dispatch('FETCH_JOBS');
        }

    }
</script>

<style scoped>

</style>