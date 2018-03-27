<template>
  <div class="login">
    <div class="register">免费注册</div>
    <div class="input">
      <input type="text" placeholder="请输入绑定手机号">
    </div>
    <div class="input">
      <input type="password" placeholder="请输入密码">
    </div>
    <div class="forget-pwd">
      忘记密码?
    </div>
    <div class="button" @click="login">
      登录
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "login",

    data() {
      return {
        usrName: '',
        password: ''
      }
    },

    methods: {
      login() {
        this.$router.push({name: 'Home'});
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @input-h: 40px;
  .login {
    width: 350px;
    height: 300px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 25px;
    .register, .forget-pwd {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
    }
    .register {
      color: var(--base-color);
    }
    .forget-pwd {
      color: var(--gray);
    }
    .input {
      height: @input-h;
      display: flex;
      align-items: center;
      padding: 0 5px;
      border: 1px solid var(--light-gray);
      >input {
        flex: 1;
        outline: none;
        margin-left: 10px;
      }
    }
    .button {
      height: @input-h;
      color: var(--white);
      border-radius: 2px;
      background-color: var(--base-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
