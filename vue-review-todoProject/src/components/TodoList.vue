<template>
    <div>
        <transition-group name="list" tag="ul">
            <li class="shadow" v-bind:key="todoItem.item"
                v-for="(todoItem, index) in this.todoItems">\

                <i class="checkBtn fas fa-check"
                   v-bind:class="{ checkBtnCompleted : todoItem.completed}"
                   @click="toggleComplete({todoItem, index})"/>

                <span v-bind:class="{textCompleted : todoItem.completed}">
                    {{ todoItem.item }}
                </span>

                <span class="removeBtn" @click="removeTodo({todoItem, index})">
                    <i class="fas fa-trash-alt"/>
                </span>

            </li>
        </transition-group>
    </div>
</template>

<script>
    import {mapMutations, mapGetters} from 'vuex'

    export default {
        name: "TodoList",
        methods: {
            ...mapMutations({
                removeTodo: 'removeOneItem',
                toggleComplete: 'toggleOneItem'
            })
        },
        computed: {
            ...mapGetters({
                todoItems: 'storedTodoItems',
            })
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }

    .checkBtn {
        line-height: 50px;
        color: #62acde;
        margin-right: 10px;
    }

    .checkBtnCompleted {
        color: #b3adad;
    }

    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }

    /* 리스트 아이템 Transitions & Animation */
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>