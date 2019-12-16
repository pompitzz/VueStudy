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
