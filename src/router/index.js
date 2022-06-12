import { createRouter, createWebHistory } from 'vue-router';
import ListArticlesPage from '@/components/ListArticlesPage.vue';

const routes = [
  {
    path: '/',
    name: ListArticlesPage,
    component: ListArticlesPage,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
