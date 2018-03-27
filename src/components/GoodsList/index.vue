<template>
  <div class="shopping">
    <all-result />
    <filter-conditions />
    <goods />
  </div>
</template>

<script type="text/ecmascript-6">
  import AllResult from './all-result';
  import FilterConditions from './filter-conditions';
  import Goods from './goods';

  export default {
    name: "index",

    components: {
      AllResult, FilterConditions, Goods
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .shopping {
    width: 100%;
  }
</style>
