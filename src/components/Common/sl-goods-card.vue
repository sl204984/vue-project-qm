<template>
  <div class="sl-goods-card">
    <div class="subtitle">{{data.subtitle}}</div>
    <div class="title">{{data.title}}</div>
    <div class="price">{{data.price}}</div>
    <div class="picture">
      <img :src="data.imgSrc" :alt="data.imgAlt">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "sl-goods-card",
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .sl-goods-card {
    padding: 5px;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--white);


    .subtitle {
      font-size: 10px;
      color: var(--gray);
    }

    .title {
      color: var(--black-gray);
    }

    .price {
      color: var(--red);
    }

    .picture {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
