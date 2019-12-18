<template>
    <div id="app">
        <toll-bar/>
        <transition name="page">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import TollBar from "./components/TollBar";
    // /* eslint-disable*/
    export default {
        components: {
            TollBar,
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
    }

    a {
        color: #34495e;
        text-decoration: none;
    }

    a:hover {
        color: #42b883;
        text-decoration: underline;
    }

    /* Router Transition */
    .page-enter-active, .page-leave-active {
        transition: opacity .5s;
    }

    .page-enter, .page-leave-to {
        opacity: 0;
    }

</style>
