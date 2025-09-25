import { createRouter, createWebHistory } from 'vue-router';

import Main from '../views/Main.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// {
		// 	path: '/login',
		// 	redirect: '/login' // 기본 경로를 로그인 화면으로 리디렉션
		// },
		{
			path: '/',
			name: 'main',
			component: Main
		}
	]
});

export default router;
