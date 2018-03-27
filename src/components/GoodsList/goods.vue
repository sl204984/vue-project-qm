<template>
  <div class="goods">
    <all-goods class="all-goods" />
    <hot-goods class="hot-goods" />
  </div>
</template>

<script type="text/ecmascript-6">
  import AllGoods from './all-goods';
  import HotGoods from './hot-goods';

  export default {
    name: "goods",
    data() {
      return {}
    },

    components: {
      AllGoods,
      HotGoods
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @margin: 15px;
  .goods {
    display: flex;
    width: 100%;
    margin-top: @margin;
    .all-goods {
      flex: 5;
      margin-right: @margin - 10;
    }
    .hot-goods {
      flex: 1;
      background-color: var(--white);
    }
  }
</style>
