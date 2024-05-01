import { createRouter, createWebHistory } from 'vue-router'
import EdihHomeView from '../views/Edih/EdihHomeView.vue'
import EdihDmaView from '../views/Edih/EdihDmaView.vue'
import EdihDmaDetails from '../views/Edih/EdihDmaDetails.vue'
import EdihDmmDetails from '../views/Edih/EdihDmmDetails.vue'
import UserHomeView from '../views/User/UserHomeView.vue'
import UserDmaView from '../views/User/UserDmaView.vue'
import UserDmaDetails from '../views/User/UserDmaDetails.vue'
import UserDmmDetails from '../views/User/UserDmmDetails.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/EdihHome',
      name: 'EdihHome',
      component: EdihHomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/EdihDma',
      name: 'EdihDma',
      component: EdihDmaView,
      meta: { requiresAuth: true }
    },
    {
      path: '/EdihDmaDetails/:id',
      name: 'EdihDmaDetails',
      component: EdihDmaDetails,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/EdihDmmDetails/:id',
      name: 'EdihDmmDetails',
      component: EdihDmmDetails,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/EdihDmm',
      name: 'EdihDmm',
      component: () => import('../views/Edih/EdihDmmView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/UserHome',
      name: 'UserHome',
      component: UserHomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/UserDma',
      name: 'UserDma',
      component: UserDmaView,
      meta: { requiresAuth: true }
    },
    {
      path: '/UserDmaDetails/:id',
      name: 'UserDmaDetails',
      component: UserDmaDetails,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/UserDmm',
      name: 'UserDmm',
      component: () => import('../views/User/UserDmmView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/UserDmmDetails/:id',
      name: 'UserDmmDetails',
      component: UserDmmDetails,
      props: true,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = checkAuth(); 
    if (!isAuthenticated) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

//authentification status
function checkAuth() {
  if(localStorage.getItem('userId')){
    let isAuthenticated = true
    return isAuthenticated;
  }
}

export default router
