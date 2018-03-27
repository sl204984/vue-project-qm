<template>
  <ul class="sl-goods-card2">
    <li class="img-box">
      <img :src="'../../../static/img/home/' + imgName" :alt="imgAlt">
    </li>

    <li class="price-box">
      <span class="price">￥ {{price}}</span>
      <span class="discounts" v-show="isDiscount">限时折扣</span>
      <span class="member-price" v-show="showDelPrice">会员价</span>
      <del class="dash-price" v-show="showDelPrice">￥ {{delPrice || 0}}</del>
    </li>

    <li class="name-box">
      <span class="self-support" v-show="selfSupport">自营</span>
      {{goodsName}}
    </li>

    <li class="sales-volume">
      <span class="volume">销量: </span> {{salesVolume}}
    </li>

    <li class="shop-name">
      {{shopName}}
    </li>

    <li class="activity-box" v-show="activities">
      <div class="activities">
        <span class="activity"
              v-for="(item, index) in activities" :key="index" v-if="index < 4">
          {{item}}
        </span>
      </div>
      <div class="shopping-cart">
        <img src="../../../static/img/UI/shopping-cart.png" alt="">
      </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "sl-goods-card2",
    props: {
      imgName: {
        type: String,
        desc: '图片路径',
        default() {
          return ''
        }
      },
      imgAlt: {
        type: String,
        default() {
          return ''
        }
      },
      price: Number,

      isDiscount: {
        type: Boolean,
        desc: '是否折扣',
        default() {
          return false
        }
      },
      // 划线价格
      delPrice: Number,

      selfSupport: {
        type: Boolean,
        desc: '是否自营',
        default() {
          return false
        }
      },
      goodsName: {
        type: String,
        desc: '商品名称',
        default() {
          return '黑凤梨'
        }
      },

      // 销量
      salesVolume: Number,

      // 店铺名称
      shopName: String,

      activities: {
        type: Array,
        desc: '营销活动',
        default() {
          return undefined
        }
      }
    },

    computed: {
      showDelPrice() {
        return !this.isDiscount && this.delPrice
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .sl-goods-card2 {
    @height: 16px;
    @red: var(--red);
    @gray: var(--gray);
    @black: var(--black-gray);

    .transform {
      @radius: 3px;

      display: inline-block;
      height: @height;
      line-height: @height;
      transform: scale(0.9);
      padding: 0 @radius;
      border-radius: @radius;
    }

    font-size: 12px;
    background-color: var(--white);

    .img-box {
      width: 100%;
      position: relative;
      &:before {
        content: '';
        display: block;
        width: 100%;
        padding-top: 100%;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .price-box {
      @height: 30px;
      height: @height;
      line-height: @height;
      .price {
        color: @red;
      }
      .discounts {
        color: var(--white);
        background-color: @red;
        .transform;
      }
      .member-price {
        color: @red;
        border: 1px solid @red;
        .transform;
      }
      .dash-price {
        color: @gray;
      }
    }

    .name-box {
      height: 34px;
      color: @black;
      .self-support {
        .transform;
        color:var(--white);
        background-color: @red;
      }
    }

    .sales-volume {
      @height: 20px;
      height: @height;
      line-height: @height;
      color: @black;
      .volume {
        color: @gray;
      }
    }

    .shop-name {
      color: @gray;
    }

    .activity-box {
      color: @red;
      display: flex;
      justify-content: space-between;
      .activities {

        .activity {
          border: 1px solid @red;
          .transform;
        }
      }
      .shopping-cart {
        >img {
          width: @height;
          height: @height;
        }
      }
    }
  }
</style>
