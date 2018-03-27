<template>
  <div class="index">
    <header-demo v-show="showHeader" />
    <navigator v-show="showHeader" />
    <router-view />
    <footer-demo />
  </div>
</template>

<script>
  import HeaderDemo from './header-demo';
  import Navigator from './navigator';
  import FooterDemo from './footer-demo';

  export default {
    name: 'index',

    computed: {
      showHeader() {
        return this.$route.name !== 'Login';
      }
    },

    components: {
      HeaderDemo, Navigator, FooterDemo
    }
  }
</script>

<style>
  .index {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    min-height: 768px;
    align-items: center;
    flex-direction: column;
  }
</style>
