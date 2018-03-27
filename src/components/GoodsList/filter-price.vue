<template>
  <div class="filter-price">
    <div class="label">{{label}} :</div>
    <ul class="classification">
      <li class="classification-item"
          v-for="(item, index) in value" :key="index"
          @click="selectData(item)">
        {{item.range}}
      </li>
      <li class="classification-item">
        <input type="text" class="input" placeholder="￥"> -
        <input type="text" class="input" placeholder="￥">
      </li>
    </ul>

    <div class="expand">
      <div class="button">确定</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "filter-price",

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
      selectData (item) {
        this.$emit('select', item);
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .filter-price {
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
        align-items: center;
        color: var(--black-gray);
        .input {
          width: 50px;
          margin: 0 10px;
          outline: none;
          padding: 0 2px;
          border: 1px solid var(--light-gray);
          &::placeholder {
            color: var(--light-gray);
          }
        }
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
        align-items: center;
        justify-content: center;
        color: var(--white);
        background-color: var(--base-color);
        border: 1px solid var(--light-gray);
      }
    }
  }
</style>
