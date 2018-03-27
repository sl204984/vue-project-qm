<template>
  <div class="goods">
    <div class="header">
      <div class="title">
        {{headLine}}
      </div>

      <ul class="classify">
        <li v-for="(item, index) in category" :key="index"
            @click="changeCurIndex(index)"
            :class="['category', {'cur': index === curIndex}]">
          {{item}}
        </li>
      </ul>
    </div>



    <div class="goods-box">
      <div class="goods-left">
        <sl-goods-card :data="goodsList[0]" />
      </div>

      <ul class="goods-list">
        <li class="goods-item" v-for="(item, index) in goodsList" :key="index">
          <sl-goods-card class="sl-goods-card" :data="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SlGoodsCard from '../Common/sl-goods-card';

  export default {
    name: "goods",

    data() {
      return {
        curIndex: 0,
        goodsList: [
          {subtitle: '好看的', title: '紫罗兰', price: 123, imgSrc: '../../../static/img/home/violet.jpeg', imgAlt: ''},
          {subtitle: '好看的', title: '小女孩', price: 123, imgSrc: '../../../static/img/home/lassock.jpeg', imgAlt: ''},
          {subtitle: '好看的', title: '小鸟', price: 123, imgSrc: '../../../static/img/home/bird.jpeg', imgAlt: ''},
          {subtitle: '好看的', title: '紫罗兰', price: 123, imgSrc: '../../../static/img/home/violet.jpeg', imgAlt: ''},
          {subtitle: '好看的', title: '小女孩', price: 123, imgSrc: '../../../static/img/home/lassock.jpeg', imgAlt: ''},
          {subtitle: '好看的', title: '小鸟', price: 123, imgSrc: '../../../static/img/home/bird.jpeg', imgAlt: ''},
          {subtitle: '好看的', title: '紫罗兰', price: 123, imgSrc: '../../../static/img/home/violet.jpeg', imgAlt: ''}
        ]
      }
    },

    props: {
      headLine: String,
      category: {
        type: Array,
        default: []
      }
    },

    methods: {
      changeCurIndex(index) {
        this.curIndex = index;
      }
    },

    components: {
      SlGoodsCard
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .goods {

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      border-bottom: 2px solid var(--base-color);
      padding: 10px;
      margin-top: 18px;
      margin-bottom: 12px;
      .title {
        font-size: 18px;
      }
      .classify {
        display: flex;
        font-size: 14px;
        color: var(--dark-gray);
        .category {
          cursor: pointer;
          margin-left: 20px;
        }
        .cur {
          color: var(--base-color);
        }
      }
    }

    .goods-box {
      display: flex;
      .goods-left {
        flex: 1;
        background-color: var(--white);
        margin-bottom: 10px;
      }
      .goods-list {
        display: flex;
        flex: 4;
        flex-wrap: wrap;
        justify-content: flex-start;
        .goods-item {
          flex: 0 25%;
          border-left: 10px solid transparent;
          margin-bottom: 10px;
          .sl-goods-card {
            &:hover {
              transform: translate(1.02);
              box-shadow: 5px 5px 3px var(--dark-gray);
            }
          }
        }
      }
    }
  }
</style>
