import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Login from '/src/views/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

/* AUTH */
router.beforeEach((to, from, next) => {
    //if (localStorage['token'] && localStorage['token'].length && !(new Date().getTime() - localStorage['token_date']) < (10800 * 1000) && to.name == 'Login') return router.push({ name: 'Home' })

    if (to.name == 'Login') return next();

    if (localStorage['token'] && localStorage['token'].length && (new Date().getTime() - localStorage['token_date']) < (10800 * 1000)) return next();

    return router.push({ name: 'Login' });
  });

export default router