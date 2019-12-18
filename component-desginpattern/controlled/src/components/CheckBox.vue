<template>
    <!-- v-model로 연결하면 checked 값을 바꿀 수 있게된다.
         그 값을 바꾸면 하위에서 props데이터를 바꾸지마라고 에러가 뜬다. -->
    <!--  <input type="checkbox" v-model="checked">-->
    <input :value="value" @click="toggleCheckBox" type="checkbox">
</template>

<script>
    export default {
        //props: ['checked'],
        // 상위의 v-model는 아래와 같이 받을땐 value로 받고 @input을 날린다.
        // @input -> 이벤트
        // :value -> 값
        props: ['value'],
        methods: {
            toggleCheckBox() {
                this.$emit('input', !this.value);
            }
        }
    }
</script>

<style scoped>
</style>
