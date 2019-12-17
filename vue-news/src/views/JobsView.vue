<template>
    <div>
        <div v-for="job in jobList"> {{job.title}}</div>
    </div>
</template>

<script>
    import {fetchJobsList, fetchNewsList} from "../api";

    export default {
        name: "JobsView",
        data() {
            return {
                jobList: [],
                errors: []
            }
        },
        created() {
            fetchJobsList()
                .then(response => this.jobList = response.data)
                .catch(error => this.errors = error);
        }

    }
</script>

<style scoped>

</style>