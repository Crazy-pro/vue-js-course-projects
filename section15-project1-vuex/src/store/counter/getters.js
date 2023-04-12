export default {
  // testAuth(state, getters, rootState, rootGetters) {
  testAuth(state) {
    return state.isLoggedIn;
  },
  finalCounter(state) {
    return state.counter * 2;
  },
  normilizedCounter(_, getters) {
    const finalCounter = getters.finalCounter * 3;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
