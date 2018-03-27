import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 1
};

// //在这里改变state中的数据,mutation 必须同步执行
const mutations = {
  add: (state, prop) => {
    state.count += prop;
  },
  reduce: (state, prop) => {
    state.count -= prop;
  }
};

// 有些状态需要做二次处理，就可以使用getters
const getters = {
  count: state => {
    return state.count;
  }
};

// Actions也可以用于改变状态，不过是通过触发mutation实现的
// Actions 支持同样的载荷方式和对象方式进行分发
const actions = {
  increment({ commit }, prop) {
    commit('add', prop);
  },
  decrement({ commit }, prop) {
    commit('reduce', prop);
  }
};


export default new Vuex.Store({
  state, getters, mutations, actions
});
