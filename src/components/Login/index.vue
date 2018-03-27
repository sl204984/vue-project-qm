<template>
  <div class="index">
    <div class="title">
      <div class="qm-logo">千米商城</div>
      <h1 class="welcome">欢迎登录</h1>
    </div>

    <ul class="content">
      <li class="image">
        <img src="../../../static/img/login/pokemon.png" alt="皮卡丘">
      </li>
      <li class="login-box">
        <login />
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Login from './login';

  export default {
    name: "index",

    components: {
      Login
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @gray: var(--dark-gray);
  .index {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    .title {
      width: 100%;
      height: 100px;
      padding: 20px 100px;
      color: @gray;
      display: flex;
      .qm-logo {
        width: 185px;
        height: 100%;
      }
      .welcome {
        margin-left: 10px;
        border-left: 1px solid @gray;
        padding-left: 10px;
        display: flex;
        align-items: center;
      }
    }
    .content {
      flex: 1;
      display: flex;
      width: 100%;
      padding: 60px 100px;
      justify-content: space-between;
      background-color: var(--base-color);
      .image {
        flex: 1;
        display: flex;
        align-items: center;
        >img {
          width: 80%;
        }
      }
      .login-box {

      }
    }
  }
</style>
