<template>
  <div class="sl-input">
    <i class="search" @click="search"></i>
    <input v-model="inputText" :placeholder="placeholder" type="text">
    <div></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "sl-input",
    props: ["inputText", "placeholder"],
    methods: {
      search() {
        this.$emit('search');
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @height: 40px;
  @input-width: 200px;
  @margin-right: 2px;
  @icon-width: 20px;
  @bg-width: @input-width + @height + @margin-right + @icon-width;
  .sl-input {
    display: flex;
    align-items: center;
    height: @height;
    width: @bg-width;
    position: relative;
    z-index: 1;
    padding-left: @height / 2;
    .search {
      margin-right: 2px;
      &:before {
        content: url(../../../static/img/UI/search.png);
        display: block;
        width: 20px;
        height: 20px;
      }
      cursor: pointer;
    }

    div {
      height: @height;
      width: @bg-width;
      border-radius: @height / 2;
      background: var(--light-gray);
      position: absolute;
      cursor: text;
      top: 0;
      left: 0;
      z-index: -1;
    }
    input {
      width: @input-width;
      height: @height;
      outline: none;
      border: 0 !important;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: transparent;
    }
    input:focus + div {
      border: 1px solid var(--light-green);
    }
  }
</style>
