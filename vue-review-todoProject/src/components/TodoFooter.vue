<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "TodoFooter",
        methods: {
            ...mapMutations({
                clearTodo: 'clearAllItems'
            })
        }
    }
</script>

<style scoped>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        background-color: white;
        margin: 0 auto;
    }

    .clearAllBtn{
        color: #e20303;
        display: block;
    }
</style>