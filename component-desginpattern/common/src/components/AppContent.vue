<template>
    <div>
        <ul>
            <li v-bind:key="item" v-for="item in items">
                {{ item }}
            </li>
        </ul>
        <button @click="$emit('renew')">renew Items</button>
    </div>
</template>

<script>
    export default {
        props: {
            items: { // 이런식으로 props의 데이터를 검증할 수 있다.
                type: Array, // Array아니면 안된다.
                required: true, // 필수 값이다
            }
        }
    }
</script>

<style scoped>
</style>