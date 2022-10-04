import { createStore } from "vuex";

export default createStore({
  state: {
    name: "Thet Paing Htut",
    students: [
      { name: "Su Su", age: 24 },
      { name: "Nyi Nyi", age: 12 },
      { name: "Wah", age: 18 },
    ],
    cart: [],
  },
  getters: {
    getAdult(state) {
      return state.students.filter((row) => row.age >= 18);
    },
  },
  mutations: {
    GET_DATA(state) {
      let cartStr = localStorage.getItem("cart");
      if (cartStr) {
        state.cart = JSON.parse(cartStr);
      }
    },
  },
  actions: {
    getData(context) {
      context.commit("GET_DATA");
    },
  },
  modules: {},
});
