<template>
    <div>
        <ul>
            <item :key="item" v-for="item in items">
                {{item}}
            </item>
            <!--            <item v-for="item in items" :item="item" v-bind:key="item"/>-->
        </ul>
    </div>
</template>

<script>
    import Item from "./Item";

    export default {
        name: 'app',
        components: {
            Item,
        },
        data() {
            return {
                items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4']
            }
        }
    }
</script>

<style>
</style>
