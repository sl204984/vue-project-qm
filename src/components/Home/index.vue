<template>
  <div class="home">
    <swiper />
    <goods v-for="(item,index) in goodsList" :key="index" :head-line="item.headLine" :category="item.category" />
  </div>
</template>

<script type="text/ecmascript-6">

  import Swiper from './swiper';
  import Goods from './goods';

  export default {
    name: "index",

    data () {
      return {
        goodsList: [
          {
            headLine: '1F 新鲜水果',
            category: ['热卖爆款', '进口水果', '国产水果', '新品上市'],
          },
          {
            headLine: '2F 新鲜吃的',
            category: ['热卖爆款', '进口水果', '国产水果', '新品上市'],
          }
        ]
      }
    },

    components: {
      Swiper,
      Goods
    }
  }
</script>

<style scoped type="text/less" lang="less">
  .home {
    width: 100%;
  }
</style>
