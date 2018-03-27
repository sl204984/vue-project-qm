<template>
  <div class="footer">
    <div class="guide">
      copy right: sl204984
    </div>
    <div class="copy-right">
      一切解释权归沈良所有
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "footer-demo"
  }
</script>

<style scoped lang="less" type="text/less">
  .footer {
    .center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    width: 100%;
    .guide {
      width: 100%;
      height: 100px;
      background-color: var(--white);
      .center;
      color: var(--black-gray);
    }
    .copy-right {
      color: var(--white);
      width: 100%;
      height: 120px;
      background-color: var(--black-gray);
      .center;
    }
  }
</style>
