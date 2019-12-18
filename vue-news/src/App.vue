<template>
    <div id="app">
        <toll-bar/>
        <transition name="page">
            <router-view/>
        </transition>
        <spinner :loading="loadingStatus"/>
    </div>
</template>

<script>
    import TollBar from "./components/TollBar";
    import Spinner from "./components/Spinner";
    import bus from "./utils/bus"
    // /* eslint-disable*/
    export default {
        components: {
            Spinner,
            TollBar,
        },
        data() {
            return {
                loadingStatus: false,
            };
        },
        methods: {
            statrtSpinner() {
                this.loadingStatus = true;
            },
            endSpinner() {
                this.loadingStatus = false;
            }
        },
        created() {
            bus.$on('start:spinner', this.statrtSpinner);
            bus.$on('end:spinner', this.endSpinner);
        },
        beforeDestroy() {
            bus.$off('start:spinner');
            bus.$off('end:spinner');
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
