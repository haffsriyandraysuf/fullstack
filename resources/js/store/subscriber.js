import store from './index'
import http from '../http'

store.subscribe((mutation) => {
  switch (mutation.type) {
    case 'auth/set_token':
      if (mutation.payload) {
        http.defaults.headers['Authorization'] = `Bearer ${mutation.payload}`
        localStorage.setItem("token", mutation.payload)
      } else {
        http.defaults.headers['Authorization'] = null
        localStorage.removeItem("token")
      }
      break;
  }
})
