<template>
    <div>
        <ul class="job-list">
            <li class="post" v-for="job in getJobList">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ job.points || 0 }}
                </div>
                <div>
                    <p class="job-title">
                        <a :href="job.url">
                            {{job.title}}
                        </a>
                    </p>
                    <small class="job-info">
                        {{job.domain}}
                    </small>
                </div>
            </li>
        </ul>
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
    .job-list {
        margin: 0;
        padding: 0;
    }

    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid white;
        padding: 5px;
    }

    .points {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #42b883;
    }

    .job-title {
        margin: 0;
    }

    .job-info {
        color: #828282;
    }

</style>