<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoFooter from "@/components/TodoFooter";
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default {
  name: 'app',
  components: {
    TodoFooter,
    TodoHeader,
    TodoInput,
    TodoList
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
</style>
