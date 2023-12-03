export default {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.token = payload.token;
    state.didAutoLogOut = false;
  },
  setAutoLogOut(state) {
    state.didAutoLogOut = true;
  },
};
