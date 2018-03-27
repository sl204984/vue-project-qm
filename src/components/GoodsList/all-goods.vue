<template>
  <div class="all-goods">
    <goods-navigator />
    <goods-cards />
  </div>
</template>

<script type="text/ecmascript-6">
  import GoodsNavigator from './goods-navigator';
  import GoodsCards from './goods-cards';

  export default {
    name: "all-goods",

    components: {
      GoodsNavigator, GoodsCards
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .all-goods {
  }
</style>
