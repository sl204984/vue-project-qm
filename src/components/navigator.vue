<template>
  <div class="navigator">
    <div class="nav-box">
      <div v-for="(item, index) in navigators" :key="index"
           @click="changeNav(item.route, index)"
           :class="['navigator-item', {'cur' : currentNav.navIndex === index}]">
        {{item.name}}
      </div>
    </div>

    <div :class="['navigator-item', {'cur' : currentNav.navIndex === -1}]"
         @click="changeNav('ShoppingCart', -1)">
      购物车
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "navigator",
    data () {
      return {
        navigators: [
          {name: '首页', route: 'Home'},
          {name: '生鲜', route: 'GoodsList'},
          {name: '甜品专区', route: 'Home'},
          {name: '生鲜特卖', route: 'GoodsList'}
        ],
        currentNav: {
          navIndex: 0
        }
      }
    },

    mounted() {
      this.currentNav.navIndex =
        this.filter(this.navigators, this.$route.name)
    },

    methods: {
      changeNav(route, index) {
        this.currentNav.navIndex = index;
        route && this.$router.push({name: route});
      },

      filter(arr, routeName) {
        if(!arr) { return }
        for(let index = 0; index < arr.length; index++) {
          let item = arr[index];
          if(item.route === routeName) {
            return index;
          }
        }
        return -1
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .navigator {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    border-top: 1px solid var(--light-gray);
    .nav-box {
      display: flex;
    }
    .navigator-item {
      width: 160px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gray);
      cursor: pointer;
    }
    .cur {
      color: var(--white);
      background-color: var(--base-color);
    }
  }
</style>
