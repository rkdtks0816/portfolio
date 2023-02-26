import { createWebHistory, createRouter} from 'vue-router';
import mainPage from '../views/main-page.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: mainPage
    }
];

const router = createRouter({
	history : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
          return { top: 0 }
        }
    },
});

export default router;