<template>
    <!--  <check-box :checked="checked"/>-->
    <check-box v-model="checked"/>
</template>
<script>
    import CheckBox from "./components/CheckBox";

    export default {
        name: 'app',
        components: {
            CheckBox
        },
        data() {
            return {
                checked: false,
            }
        },
    }
</script>

<style>
</style>
