<template>
  <div class="sl-swiper" ref="swiper">

    <div class="swiper-box"  ref="swiperBox">
      <slot />
    </div>

    <div class="dotted-box">
      <div
        v-for="item in swiperCount" :key="item"
        @click="changeCurIndex(item)"
        :class="['dotted-item', {'cur': curIndex === item}]">
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "sl-swiper",
    data () {
      return {
        swiperWidth: 0,
        swiperCount: 0,
        curIndex: 1,
        intervalHandle: 0
      }
    },

    mounted() {
      this.computeItemWidth();
    },

    beforeDestroy () {
      clearInterval(this.intervalHandle);
    },

    methods: {
      computeItemWidth() {
        const {swiper, swiperBox} = this.$refs;
        this.swiperWidth = swiper.getBoundingClientRect().width;
        const swiperItems = swiperBox.getElementsByClassName('sl-swiper-item');
        this.swiperCount = swiperItems.length;
        if(!swiperItems) return;
        for(let item of swiperItems) {
          item.style.width = this.swiperWidth + 'px';
        }
      },
      changeCurIndex(index) {
        if(this.curIndex === index) {
          return;
        } else {
          this.curIndex = index;
        }
        this.changeSwiper(index);
      },
      changeSwiper(index) {
        // 基础线性算法
        // 贝塞尔曲线？
        const {swiperBox} = this.$refs;
        const time = 0.2; // 所需时间，单位1000毫秒
        const oldLeft = parseInt(swiperBox.style.left) || 0;  // 旧的left值
        const expectLeft = - this.swiperWidth * (index - 1);  // 期望的left值
        const distance = Math.abs(oldLeft - expectLeft);

        clearInterval(this.intervalHandle);

        if(oldLeft > expectLeft) {
          this.intervalHandle = setInterval(() => {
            const curLeft = parseFloat(swiperBox.style.left) || 0;
            swiperBox.style.left = curLeft - distance / time / 40 + 'px';
            if(curLeft <= expectLeft) {
              swiperBox.style.left = expectLeft + 'px';
              clearInterval(this.intervalHandle);
            }
          }, 25);
        } else {
          this.intervalHandle = setInterval(() => {
            const curLeft = parseFloat(swiperBox.style.left) || 0;
            swiperBox.style.left = curLeft + distance / time / 40 + 'px';
            if(curLeft >= expectLeft) {
              swiperBox.style.left = expectLeft + 'px';
              clearInterval(this.intervalHandle);
            }
          }, 25);
        }

      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .sl-swiper {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    .swiper-box {
      height: 100%;
      display: flex;
      position: absolute;
      .sl-swiper-item {
        flex:  100%;
        height: 100%;
      }
    }
    .dotted-box {
      position: absolute;
      bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      .dotted-item {
        width: 10px;
        height: 10px;
        margin: 0 10px;
        border-radius: 50%;
        background-color: var(--gray);
      }
      .cur {
        background-color: var(--base-color);
      }
    }
  }
</style>
