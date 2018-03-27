<template>
  <div class="current-address">
    <div class="address category">食品</div>
    >
    <div class="address type">小食</div>
    >
    <div class="address goods-name">糕点</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "current-address"
  }
</script>

<style scoped lang="less" type="text/less">
  .current-address {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 12px;
    .category {
      font-size: 14px;
    }
    .type {
      font-size: 10px;
    }
    .goods-name {
      font-size: 10px;
    }
    .address {
      margin: 0 10px;
    }
    .address:hover {
      cursor: pointer;
      color: var(--base-color);
    }
  }
</style>
