<template>
    <div id="root">
        <!--        <p>{{ this.$store.getters.originalPrice }}</p>-->
        <!--        <p>{{ this.$store.getters.doublePrice }}</p>-->
        <!--        <p>{{ this.$store.getters.triplePrice }}</p>-->

        <p>{{originalPrice}}</p>
        <p>{{doublePrice}}</p>
        <p>{{triplePrice}}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Demo",
        computed: {
            ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice']),
        },
    }
</script>

<style scoped>

</style>