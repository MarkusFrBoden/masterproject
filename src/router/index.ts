import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SurveyView from '../views/SurveyView.vue'
import SurveyDetails from '../views/SurveyDetails.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/survey',
      name: 'survey',
      component: SurveyView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/survey/:id',
      name: 'SurveyDetails',
      component: SurveyDetails,
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

//Authentifizierungsstatus
function checkAuth() {
  if(localStorage.getItem('userId')){
    let isAuthenticated = true
    return isAuthenticated;
  }
}

// Löschen des LocalStorage beim schließen der Seite
/*window.addEventListener('beforeunload', function() {
  localStorage.removeItem('userId');
});*/

export default router
