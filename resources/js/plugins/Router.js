import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../components/Welcome';
import authRoutes from '../modules/auth/router';

Vue.use(VueRouter)

const welcomeRoutes = [{
  path: '/',
  alias: '/welcome',
  name: 'welcome',
  component: Welcome
}]

const routes = welcomeRoutes.concat(
  authRoutes
)
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
