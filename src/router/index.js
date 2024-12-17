import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: '/animals',
          name: 'Animals',
          component: () => import('@/views/AnimalsView.vue'),
        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('@/views/CadastroView.vue'),
        },
        {
          path: '/animal/:id',
          name: 'AnimalDetails',
          component: () => import('@/views/OneAnimalView.vue'),
        },
        {
          path: '/cadastro',
          name: 'Cadastro',
          component: () => import('@/views/CadastroUserView.vue'),
        }, 
        {
          path: '/adocao',
          name: 'Adocao',
          component: () => import('@/views/AdocaoView.vue'),
        },       
      ],
    },
  ],
});

export default router;