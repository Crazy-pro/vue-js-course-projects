// import { createStore } from 'vuex';

// const counterModule = {
//   namespaced: true,
//   state() {
//     return {
//       counter: 0,
//     };
//   },
//   mutations: {
//     increment(state) {
//       state.counter = state.counter + 2;
//     },
//     increase(state, payload) {
//       state.counter = state.counter + payload.value;
//     },
//   },
//   actions: {
//     increment(context) {
//       setTimeout(function () {
//         context.commit('increment');
//       }, 2000);
//     },
//     increase(context, payload) {
//       context.commit('increase', payload);
//     },
//     login() {},
//   },
//   getters: {
//     // testAuth(state, getters, rootState, rootGetters) {
//     testAuth(state) {
//       return state.isLoggedIn;
//     },
//     finalCounter(state) {
//       return state.counter * 2;
//     },
//     normilizedCounter(_, getters) {
//       const finalCounter = getters.finalCounter * 3;
//       if (finalCounter < 0) {
//         return 0;
//       }
//       if (finalCounter > 100) {
//         return 100;
//       }
//       return finalCounter;
//     },
//   },
// };

// const store = createStore({
//   modules: { numbers: counterModule },
//   state() {
//     return {
//       isLoggedIn: false,
//     };
//   },
//   mutations: {
//     setAuth(state, payload) {
//       state.isLoggedIn = payload.isAuth;
//     },
//   },
//   actions: {
//     login(context) {
//       context.commit('setAuth', { isAuth: true });
//     },
//     logout(context) {
//       context.commit('setAuth', { isAuth: false });
//     },
//   },
//   getters: {
//     userIsAuthenticated(state) {
//       return state.isLoggedIn;
//     },
//   },
// });

// export default store;
