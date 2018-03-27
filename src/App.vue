<template>
  <div id="app">
    <Page />
  </div>
</template>

<script>
  import Page from './components'

  export default {
    name: 'App',

    components: {
      Page
    }
  }
</script>

<style>
  @import "assets/styles/reset.css";
  @import "assets/styles/root.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
