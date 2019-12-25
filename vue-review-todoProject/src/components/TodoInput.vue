<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"/>
        </span>

        <Modal @close="showModal = false" v-if="showModal">
            <h3 slot="header">
                경고!
                <i @click="showModal = false" class="closeModalBtn fas fa-times"/>
            </h3>

            <div slot="body">
                입력을 하세요
            </div>
        </Modal>
    </div>
</template>

<script>
    import Modal from './common/Modal'

    export default {
        name: "TodoInput",
        data() {
            return {
                newTodoItem: '',
                showModal: false,
            }
        },
        methods: {
            addTodo() {
                if (this.newTodoItem !== '') {
                    const text = this.newTodoItem.trim();
                    this.$store.commit('addOneItem', text);
                    this.clearInput();
                } else {
                    this.showModal = true;
                }
            },
            clearInput() {
                this.newTodoItem = '';
            }
        },
        components: {
            Modal
        }
    }
</script>

<style scoped>
    .inputBox{
        background-color: aliceblue;
        height: 50px;
        line-height: 50px;
        border-radius: 10px;

    }
    .inputBox input{
        border-style: groove;
        font-size: 0.9rem;
    }

    .addContainer{
        float: right;
        background: linear-gradient(to right, #6478FB, #48b9aa);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }

    .addBtn{
        color: white;
        vertical-align: middle;
    }

    .closeModalBtn{
        color: #42b983;
    }
</style>