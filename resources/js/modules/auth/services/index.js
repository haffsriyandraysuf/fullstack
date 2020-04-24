import http from '../../../http';

class AuthService {
  login(data) {
    return http.post('auth/login', data)
  }
  me() {
    return http.post('auth/me')
  }
  register(data) {
    return http.post('auth/register', data)
  }
  logout() {
    return http.post('auth/logout')
  }
}

export default new AuthService
