<template>
    <div>
        <!-- name의 list가 아래 css스타일의 list-enter-active를 가능하게 하는 것
             - tag는 원래 있던 tag명, 원래 ul 태그였는데 transition으로 교체 훟 tag = ul 한것  -->
        <transition-group name="list" tag="ul">
            <!--  v-for를 사용하면 갯수가 몇개건 간에 순서를 부여해줄 수 있다. index가 그 순서라고 생각하면 된다.
                  - v-bind:key 안해주면 idnex 오류난다. -->
            <li class="shadow" v-bind:key="todoItem.item" v-for="(todoItem,index) in propsdata">
                <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted : todoItem.completed }"
                   v-on:click="toggleComplete(todoItem, index)"/>
                <span v-bind:class="{textCompleted : todoItem.completed }">
                    {{ todoItem.item }}
                </span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"/>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props: ['propsdata'],
        methods: {
            removeTodo(todoItem, index) {
                this.$emit('removeItem', todoItem, index);
            },
            toggleComplete(todoItem, index) {
                this.$emit('toggleItem', todoItem, index);
            }
        },
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
        margin-left: auto;;
        color: #de4343;
    }

    .checkBtn {
        line-height: 45px;
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

    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transform: translateY(30px);
    }
</style>