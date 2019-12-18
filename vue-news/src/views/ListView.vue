<template>
    <list-item/>
</template>

<script>
    import ListItem from "../components/ListItem";
    import bus from "../utils/bus"
    export default {
        name: "ListView",
        components: {
            ListItem,
        },
        mounted() { // route의 beforeEnter에 넣으면 살짝 스피너가 늦으니 mounted에 넣는게 좋다.
            bus.$emit('end:spinner');
        }
    }
</script>

<style scoped>

</style>