<template>
  <div class="all-result">
    <span class="label">全部结果: </span>

    <span v-for="(item, index) in filterConditions.labelArr"
          @click="removeFilterConditions(filterConditions.labelArr, index)"
          class="filter-conditions">{{item.name}}</span>

    <span v-for="(item, index) in filterConditions.classificationArr"
          @click="removeFilterConditions(filterConditions.classificationArr, index)"
          class="filter-conditions">{{item.name}}</span>

    <span v-for="(item, index) in filterConditions.priceArr"
          @click="removeFilterConditions(filterConditions.priceArr, index)"
          class="filter-conditions">{{item.range}}</span>

  </div>
</template>

<script type="text/ecmascript-6">
  import {filterConditions} from "./State/filter-conditions";

  export default {
    name: "all-result",

    data() {
      return {
        filterConditions
      }
    },

    methods: {
      removeFilterConditions(arr, index) {
        arr.splice(index, 1);
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .all-result {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--gray);
    .label {
      margin-right: 5px;
    }
    .filter-conditions {
      @interval: 3px;
      padding-left: @interval;
      margin: 0 5px;
      display: flex;
      font-size: 12px;
      cursor: pointer;
      border: 1px solid var(--gray);
      &:after {
        @length: 17px;
        margin-left: @interval;
        content: 'x';
        display: inline-block;
        width: @length;
        height: @length;
        line-height: @length;
        text-align: center;
        color: var(--white);
        background-color: var(--gray);
      }
    }
  }
</style>
