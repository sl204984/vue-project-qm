<template>
  <div class="header">
    <div class="logo">
      <img src="../../static/img/home/logo.png" alt="logo" />
    </div>

    <sl-input-search class="input" @search="search" placeholder="输入您要搜索的产品" />

    <div class="user">
      登录/注册
      <img src="../../static/img/home/handbag.png" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SlInputSearch from './Common/sl-input-search';

  export default {
    name: "header-demo",

    data() {
      return {

      }
    },

    methods: {
      search() {
        console.log('search');
      },

    },


    components: {
      SlInputSearch
    }
  }
</script>

<style scoped type="text/less" lang="less">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    background-color: var(--white);
    .logo {
      width: 185px;
      height: 60px;
      img {
        height: 100%;
      }
    }
    .input {
    }
    .user {
      font-size: 12px;
      color: var(--gray);
    }
  }
</style>
