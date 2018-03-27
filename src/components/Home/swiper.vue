<template>
  <div class="swiper">
    <sl-swiper>
      <div class="sl-swiper-item" v-for="(item, index) in swipers" :key="index">
        <img :src="item.src" :alt="item.alt">
      </div>
    </sl-swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import SlSwiper from '../Common/sl-swiper';
  export default {
    name: "swiper",
    data () {
      return {
        swipers: [
          {src: '../../../static/img/home/swiper1.jpg', alt: '好看的图片'},
          {src: '../../../static/img/home/swiper2.jpeg', alt: '好看的图片'},
          {src: '../../../static/img/home/swiper3.png', alt: '好看的图片'}
        ]
      }
    },
    components: {
      SlSwiper
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .swiper {
    .sl-swiper-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
