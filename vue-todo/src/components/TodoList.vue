<template>
    <div>
        <ul>
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
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['propsdata'],
        methods: {
            removeTodo: function (todoItem, index) {
                // key 값을 통해 item을 지울 수 있다.
                localStorage.removeItem(todoItem.item);
                // 이렇게 splice를 이용하여 리스트 목록도 제거 가능하다.
                this.todoItems.splice(index, 1);
                // slice는 지우는데 기존 배열을 변경하지 않기 때문에 지우고 새로운 배열을 반환하는 splice를 사용한다.
            },
            toggleComplete: function (todoItem, index) {
                todoItem.completed = !todoItem.completed;
                // 로컬 스토리지 데이터 갱신
                localStorage.setItem(todoItem, JSON.stringify(todoItem));
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


</style>