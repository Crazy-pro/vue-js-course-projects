let timer;

export default {
  async logIn(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signUp(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signUp',
    });
  },
  logOut(context) {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      userId: null,
      token: null,
    });
  },
  autoLogIn(context) {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch('autoLogOut');
    }, expiresIn);

    if (userId && token) {
      context.commit('setUser', {
        userId: userId,
        token: token,
      });
    }
  },
  autoLogOut(context) {
    context.dispatch('logOut');
    context.commit('setAutoLogOut');
  },
  async auth(context, payload) {
    const mode = payload.mode;

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBmwoV7W5sd5NOyZUs8qceOxwqleox_R9M';

    if (mode === 'signUp') {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBmwoV7W5sd5NOyZUs8qceOxwqleox_R9M';
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          'Failed to authenticate. Incorrect E-Mail or Password!'
      );
      throw error;
    }

    // const expiresIn = 5000;
    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('expirationDate', expirationDate);

    timer = setTimeout(function () {
      context.dispatch('setAutoLogOut');
    }, expiresIn);

    context.commit('setUser', {
      userId: responseData.localId,
      token: responseData.idToken,
    });
  },
};
