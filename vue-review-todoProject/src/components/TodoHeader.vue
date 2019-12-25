<template>
    <header>
        <h1>{{headerText}}</h1>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "TodoHeader",
        computed: {
            ...mapGetters({
                headerText: 'getHeaderText'
            }),
        }
    }
</script>

<style scoped>
    h1 {
        color: #2F3B52;
        font-weight: 900;
        margin: 2.5rem 0;
    }
</style>