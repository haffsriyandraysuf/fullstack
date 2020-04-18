import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import authRoutes from './modules/auth/router';

Vue.use(VueRouter)

const homeRoutes = [{
  path: '/',
  alias: '/home',
  name: 'home',
  component: Home
}]

const routes = homeRoutes.concat(
  authRoutes
)
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
