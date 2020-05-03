import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../components/Welcome';
import authRoutes from '../modules/auth/router';
import wakiRoutes from '../modules/waki/router';

Vue.use(VueRouter)

const welcomeRoutes = [{
  path: '/',
  alias: '/welcome',
  name: 'welcome',
  component: Welcome
}]

const routes = welcomeRoutes.concat(
  authRoutes, wakiRoutes
)
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
