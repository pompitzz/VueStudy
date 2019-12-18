<template>
    <h1>{{title}}</h1>
</template>

<script>
    export default {
        name: "AppHeader",
        props: {
            title: String, // 이렇게 타입을 지정하여 검증 가능
        }
    }
</script>

<style scoped>

</style>