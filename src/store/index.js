import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    getUser: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
  },
  mutations: {
    initUsers(state, newUsers) {
      state.users = newUsers;
    },
  },
});
