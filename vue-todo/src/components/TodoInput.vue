<template>
    <div class="inputBox shadow">
        <!--   v-on:keyup.enter로 엔터쳤을때 동작 가능     -->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"/>
        </span>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                newTodoItem: '',
            }
        },
        methods: {
            addTodo: function () {
                // 저장하는 로직
                localStorage.setItem(this.newTodoItem, this.newTodoItem);
                this.$emit('pass');
                this.clearInput();
            },
            clearInput: function () {
                this.newTodoItem = '';
            }
        }
    }
</script>

<style scoped>
    input:focus {
        outline: none;
    }

    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }

    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }

    .addContainer {
        float: right;
        /* 그라데이션 같은것. to right는 오른쪽으로 그라데이션이 향한다. */
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }

    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>