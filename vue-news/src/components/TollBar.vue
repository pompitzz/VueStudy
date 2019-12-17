<template>
    <div class="header">
        <router-link to="/news">News</router-link>
        |
        <router-link to="/ask">Ask</router-link>
        |
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>

<script>
    export default {
        name: "TollBar"
    }
</script>

<style scoped>
    .header {
        background: #42b883;
        display: flex;
        padding: 0.5rem;
        color: white;
    }

    .header .router-link-exact-active {
        color: blue;
    }

    .header a {
        color: white;
        text-decoration: none;
    }
</style>