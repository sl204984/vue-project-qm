<template>
  <div class="index">
    <current-address />
    <detail-info />

  </div>
</template>

<script type="text/ecmascript-6">
  import CurrentAddress from './current-address';
  import DetailInfo from './detail-information';

  export default {
    name: "index",
    components: {
      CurrentAddress, DetailInfo
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .index {
    width: 100%;

  }
</style>
