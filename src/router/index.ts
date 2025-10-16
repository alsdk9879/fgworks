import { createRouter, createWebHistory } from 'vue-router';
import { user } from '@/assets/ts/user';

import Main from '../views/user/Main.vue';
import AdminMain from '../views/admin/Main.vue';
import GeneralMain from '../views/general/Main.vue';

let checkUser = async (t, f, n) => {
	console.log('Checking user authentication for route:', t.name);
	console.log('Current user state:', user);

	let u = user?.user_id;
	if (u) {
		if (t.name === 'login') {
			// 우선 관리자 페이지 먼저 처리
			// 나중에 사용자 기획 완료되면 추가 처리
			n('/admin');
			return;
		}
		return n();
	} else {
		// support 페이지로 바로 접근 했는데 로그인이 안된 상태라면 로그인 페이지로 보내고, 로그인 후에 support 페이지로 돌아오게 함
		if (t.name === 'support') {
			n(`/login?support=true`);
			return;
		}
	}
	n('/login');
};

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// 유저가 로그인 후 접근하는 페이지
		{
			path: '/',
			component: Main,
			beforeEnter: checkUser,
			children: [
				{
					path: '/',
					name: 'home',
					component: () => import('../views/user/Home.vue')
				}
			]
		},
		// 관리자가 로그인 후 접근하는 페이지
		{
			path: '/admin',
			component: AdminMain,
			beforeEnter: checkUser,
			children: [
				{
					path: '/',
					name: 'admin-home',
					component: () => import('../views/admin/Home.vue')
				}
			]
		},
		// 원페이지인 경우
		{
			path: '/',
			component: GeneralMain,
			children: [
				{
					path: '/login',
					name: 'login',
					component: () => import('../views/general/Login.vue'),
					beforeEnter: checkUser
				},
				{
					path: '/support',
					name: 'support',
					component: () => import('../views/general/support/Home.vue'),
					beforeEnter: checkUser
				}
			]
		}
	]
});

export default router;
