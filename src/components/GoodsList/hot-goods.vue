<template>
  <div class="hot-goods">
    <div class="hot-text">热卖推荐</div>
    <sl-goods-card2 v-for="(item, index) in goodsList" :key="index"
                    class="sl-goods-cards2"
                    :img-name="item.imgName"
                    :price="item.price"
                    :is-discount="item.isDiscount"
                    :del-price="item.delPrice"
                    :self-support="item.selfSupport"
                    :goods-name="item.goodsName"
                    :sales-volume="item.salesVolume"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import SlGoodsCard2 from '../Common/sl-goods-card2';

  import goodsList from './JS/hot-goods';

  export default {
    name: "hot-goods",

    data() {
      return {
        goodsList: []
      }
    },

    mounted() {
      this.goodsList = goodsList;
    },

    components: {
      SlGoodsCard2
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .hot-goods {
    @padding: 8px;
    @margin: 10px;
    padding: 0 @padding;
    margin-bottom: @margin;
    .hot-text {
      @height: 40px;
      font-size: 12px;
      height: @height;
      line-height: @height;
      padding: 0 @padding;
      text-align: center;
      color: var(--black-gray);
      margin-bottom: 15px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        display: block;
        width: 30%;
        top: 50%;
        left: 0;
        border-bottom: 1px solid var(--base-color);
      }
      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 30%;
        top: 50%;
        right: 0;
        border-bottom: 1px solid var(--base-color);
      }
    }
    .sl-goods-card2 {
      padding: @padding;
      cursor: pointer;
      &:hover {
        transform: scale(1.02);
        box-shadow: 1px 1px 3px var(--dark-gray);
      }
    }
  }
</style>
