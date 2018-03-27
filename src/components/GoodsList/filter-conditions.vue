<template>
  <div class="filter-conditions">
    <filter-item label="标签" :value="labels" @select="selectLabel" />
    <filter-item label="分类" :value="classification" @select="selectClassification" />
    <filter-price label="价格" :value="price" @select="selectPrice" />
  </div>
</template>

<script type="text/ecmascript-6">
  import FilterItem from './filter-item';
  import FilterPrice from './filter-price';

  import {filterConditions} from './State/filter-conditions';

  export default {
    name: "filter-conditions",

    data () {
      return {
        labels: [
          {name: '新品'},
          {name: '热卖'},
          {name: '推荐'},
          {name: '促销'},
          {name: '爆款'}
        ],
        classification: [
          {name: '休闲食品'},
          {name: '粮油调味'},
          {name: '进口食品'},
          {name: '饮料冲调'},
          {name: '茶饮'},
          {name: '食品礼券'},
          {name: '番茄炒肉'},
          {name: '番茄炒蛋'},
        ],
        price: [
          {range: '0-9'},
          {range: '10-19'},
          {range: '20-99'},
          {range: '100-499'},
          {range: '500以上'}
        ],

      }
    },

    methods: {
      selectLabel(data) {
        const { labelArr } = filterConditions;
        this.select(labelArr, data, 'name');
      },

      selectClassification(data) {
        const { classificationArr } = filterConditions;

        this.select(classificationArr, data, 'name');
      },

      selectPrice(data) {
        const {priceArr} = filterConditions;

        this.select(priceArr, data, 'range');

      },

      select(array, data, prop) {
        const index = this.filter(array, data, prop);
        if(index < 0) {
          array.push(data);
        } else {
          array.splice(index, 1);
        }
      },

      filter(array, data, prop) {
        for(let index in array)  {
          const item = array[index];
          if(item[prop] === data[prop]) {
            return index
          }
        }
        return -1;
      },
    },

    components: {
      FilterItem,
      FilterPrice
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .filter-conditions {
  }
</style>
