import { createRouter, createWebHistory } from 'vue-router';

import Main from '../views/user/Main.vue';
import AdminMain from '../views/admin/Main.vue';
import GeneralMain from '../views/general/Main.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: Main,
			children: [
				{
					path: '/',
					name: 'home',
					component: () => import('../views/user/Home.vue')
				}
			]
		},
		{
			path: '/admin',
			component: AdminMain,
			children: [
				{
					path: '/',
					name: 'admin-home',
					component: () => import('../views/admin/Home.vue')
				}
			]
		},
		{
			path: '/',
			component: GeneralMain,
			children: [
				{
					path: '/login',
					name: 'login',
					component: () => import('../views/general/Login.vue')
				}
			]
		}
	]
});

export default router;
