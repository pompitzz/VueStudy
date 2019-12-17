<template>
    <div>
        <div v-for="ask in askList"> {{ ask.title }}</div>
    </div>
</template>

<script>
    import {fetchAskList} from "../api";

    export default {
        name: "AskView",
        data() {
            return {
                askList: [],
                errors: []
            }
        },
        created() {
            fetchAskList()
                .then(response => this.askList = response.data)
                .catch(error => this.errors = error);
        }
    }
</script>

<style scoped>

</style>