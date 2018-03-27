<template>
  <div class="filter-item">
    <div class="label">{{label}} :</div>
    <ul class="classification">
      <li class="classification-item"
          v-for="(item, index) in value" :key="index"
          v-show="!isExpand ? index < 6 : true"
          @click="selectData(item)">
        {{item.name}}
      </li>
    </ul>

    <div class="expand">
      <div class="button" v-show="value.length >  6" @click="toggleButton">
        {{ !isExpand ? '展开' : '收起' }}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "filter-item",

    data() {
      return {
        isExpand: false
      }
    },

    props: {
      label: String,
      value: {
        type: Array,
        default() {
          return []
        }
      }
    },

    methods: {
      toggleButton () {
        this.isExpand = !this.isExpand;
      },
      selectData (item) {
        this.$emit('select', item);
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .filter-item {
    width: 100%;
    display: flex;
    font-size: 12px;
    background-color: var(--white);
    border-bottom: 1px solid var(--light-gray);
    .label {
      height: 40px;
      flex: 0 120px;
      display: flex;
      color: var(--gray);
      margin-left: 10px;
      align-items: center;
    }
    .classification {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      .classification-item {
        flex: 0 16%;
        height: 40px;
        display: flex;
        cursor: pointer;
        align-items: center;
        color: var(--black-gray);
      }
    }
    .expand {
      height: 40px;
      flex: 0 80px;
      display: flex;
      align-items: center;
      .button {
        width: 60px;
        height: 26px;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--light-gray);
      }
    }
  }
</style>
