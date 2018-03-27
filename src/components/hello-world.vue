<template>
  <div>
    <div class="hello"></div>
    <div @click="increment">
      {{count}}
    </div>
    <div @click="increment">increment</div>
    <div @click="decrement">decrement</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.JS App'
    }
  },

  computed: {
    count() {
      return this.$store.getters.count;
    }
  },

  mounted() {
    console.log(this.$store.getters);
  },

  methods: {
    increment() {
      // this.$store.commit('add', 1);
      this.$store.dispatch('increment', 1);
    },
    decrement() {
      this.$store.dispatch('decrement', 1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/less" lang="less">
  .hello {
    width: 200px;
    height: 200px;
    border: var(--colorful-border);
    border-image: var(--border-img-interval);
  }
</style>
