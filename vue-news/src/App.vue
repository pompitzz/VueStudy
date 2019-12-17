<template>
  <div id="app">
    <toll-bar/>
    <router-view/>
  </div>
</template>

<script>
  import TollBar from "./components/TollBar";
  // /* eslint-disable*/
  export default {
    components: {
      TollBar,
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
</style>
