<template>
  <ul class="goods-cards">

    <li class="goods-item" @click="jumpTo"
        v-for="(item, index) in goodsList" :key="index" >
      <sl-goods-card2 class="sl-goods-cards2"

                      :img-name="item.imgName"
                      :img-alt="item.imgAlt"
                      :price="item.price"
                      :is-discount="item.isDiscount"
                      :del-price="item.delPrice"
                      :self-support="item.selfSupport"
                      :goods-name="item.goodsName"
                      :sales-volume="item.salesVolume"
                      :shop-name="item.shopName"
                      :activities="item.activities"/>
    </li>

  </ul>
</template>

<script type="text/ecmascript-6">
  import SlGoodsCard2 from '../Common/sl-goods-card2';

  import goodsList from './JS/all-goods';

  export default {
    name: "goods-cards",

    data() {
      return {
        goodsList: []
      }
    },

    mounted() {
      this.goodsList = goodsList;
    },

    methods: {
      jumpTo() {
        this.$router.push({name: 'GoodsDetail'})
      }
    },

    components: {
      SlGoodsCard2
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .goods-cards {
    display: flex;
    flex-wrap: wrap;
    .goods-item {
      flex: 0 1 25%;
      margin-bottom: 10px;
      padding-right: 10px;
      cursor: pointer;
      .sl-goods-cards2 {
        padding: 8px;

        &:hover {
          transform: scale(1.02);
          box-shadow: 5px 5px 3px var(--dark-gray);
        }
      }
    }
  }
</style>
