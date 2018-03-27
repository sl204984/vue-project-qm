<template>
  <div class="goods-navigator">
    <ul class="nav-box">
      <li v-for="(item, index) in navigator" :key="index"
          :class="['nav-item', {'cur': curIndex === index}]" @click="changeCurIndex(index)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "goods-navigator",

    data() {
      return {
        curIndex: 0,
        navigator: [
          {name: '综合'},
          {name: '销量'},
          {name: '价格'},
          {name: '评价'}
        ]
      }
    },

    methods: {
      changeCurIndex(index) {
        this.curIndex = index;
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .goods-navigator {
    width: 100%;
    height: 40px;

    margin-bottom: 10px;

    .nav-box {
      display: flex;
      height: 100%;
      margin-right: 10px;
      background-color: var(--white);
      .nav-item {
        height: 100%;
        flex: 0 80px;
        display: flex;
        cursor: pointer;
        font-size: 12px;
        align-items: center;
        justify-content: center;
      }
      .cur {
        transform: scale(1.02);
        background-color: var(--base-color);
        color: var(--white);
      }
    }
  }
</style>
