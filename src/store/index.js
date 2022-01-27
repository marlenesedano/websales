import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      cep: "",
      street: "",
      number: "",
      city: "",
      district: "",
      state: "",
    },
    user_product: null,
  },
  mutations: {
    // é o que muda o user
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_USER_PRODUCT(state, payload) {
      state.user_product = payload;
    },
    ADD_USER_PRODUCT(state, payload) {
      state.user_product.unshit(payload);
    },
  },
  actions: {
    getUserProduct(context) {
      api.get(`/produto?user_id=${context.state.user_id}`).then((response) => {
        context.commit("UPDATE_USER_PRODUCT", response.data);
      });
    },
    getUser(context, payload) {
      return api.get(`/usuario/${payload}`).then((response) => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    createUser(context, payload) {
      context.commit("UPDATE_USER", { id: payload.email });
      return api.post("/usuario", payload);
    },
    logOutUser(context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        password: "",
        cep: "",
        street: "",
        number: "",
        city: "",
        district: "",
        state: "",
      });
      context.commit("UPDATE_LOGIN", false);
    },
  },
  modules: {},
});
