<template>
    <div id="app">
        <TodoHeader/>
        <TodoInput/>
        <TodoList/>
        <TodoFooter/>
    </div>
</template>

<script>
    import TodoHeader from "./components/TodoHeader";
    import TodoList from "./components/TodoList";
    import TodoInput from "./components/TodoInput";
    import TodoFooter from "./components/TodoFooter";

    export default {
        /*
        methods: { // mutations
            addOneItem(newTodoItem) {
                const obj = {completed: false, item: newTodoItem};
                localStorage.setItem(newTodoItem, JSON.stringify(obj));
                this.todoItems.push(obj);
            },
            removeOneItem(todoItem, index) {
                localStorage.removeItem(todoItem.item);
                this.todoItems.splice(index, 1);
            },
            toggleOneItem(todoItem, index) {
                // todoItem.completed = !todoItem.completed; props로 내린 아이템을 다시 App으로 올리는 건 안좋음(안티 패턴)
                this.todoItems[index].completed = !this.todoItems[index].completed;
                localStorage.removeItem(todoItem.item);
                localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
            },
            clearAllItems() {
                localStorage.clear();
                this.todoItems = [];
            }
        },*/
        /* 뷰 라이플 사이클
           인스턴스 생성 ---> 마운티드 ---> 업데이티드 ---> 디스트로이티드
           - 위 4개 사이사이에 비포 업데이트 등등이 있는데
              created는 생성되는 시점에 동작하는 life-cycle
         */
        components: {
            TodoHeader,
            TodoList,
            TodoInput,
            TodoFooter
        }
    }
</script>

<style>
    body {
        text-align: center;
        background-color: #F6F6F6;
    }

    input {
        border-style: groove;
        width: 200px;
    }

    button {
        border-style: groove;
    }

    .shadow {
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
    }
</style>
