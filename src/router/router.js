import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const UserPage = () => import('../pages/UserPage');
const NewsPage = () => import('../pages/NewsPage');

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'UserPage',
    component: UserPage
  },
  {
    path: '/news',
    name: 'NewsPage',
    component: NewsPage
  }
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router
