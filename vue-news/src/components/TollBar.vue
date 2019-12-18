<template>
    <div class="header">
        <router-link class="menu" to="/news">News</router-link>
        <router-link class="menu" to="/ask">Ask</router-link>
        <router-link class="menu" to="/jobs">Jobs</router-link>
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
        color: black;
        text-decoration: underline;
    }

    .header a {
        color: white;
        text-decoration: none;
    }

    .menu {
        margin-left: 10px;
    }
</style>