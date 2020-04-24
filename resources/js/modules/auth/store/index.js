import AuthService from '../services';

export default {
  namespaced: true,
  state: {
    access_token: null,
    user: null
  },

  getters: {
    authenticated(state) {
      return state.access_token && state.user
    },
    user(state) {
      return state.user
    }
  },

  mutations: {
    set_token(state, access_token) {
      state.access_token = access_token
    },
    set_user(state, data) {
      state.user = data
    }
  },

  actions: {
    async signIn({
      dispatch
    }, credentials) {
      let result = await AuthService.login(credentials)
      return dispatch('attempt', result.data.access_token)
    },

    async attempt({
      commit,
      state
    }, access_token) {
      if (access_token) {
        commit('set_token', access_token)
      }

      if (!state.access_token) {
        return
      }
      try {
        let respone = await AuthService.me()
        commit('set_user', respone.data)
      } catch (error) {
        commit('set_token', null)
        commit('set_user', null)
      }
    },

    logout({
      commit
    }) {
      return AuthService.logout().then(() => {
        commit('set_token', null)
        commit('set_user', null)
      })
    }
  }
}
