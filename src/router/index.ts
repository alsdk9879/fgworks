import { createRouter, createWebHistory } from 'vue-router';
import { user } from '@/assets/ts/user';

import Main from '../views/user/Main.vue';
import AdminMain from '../views/admin/Main.vue';
import GeneralMain from '../views/general/Main.vue';

let checkUser = async (t, f, n) => {
	let u = user?.user_id;
	if (u) {
		console.log('유저 로그인 상태');
		return n();
	} else {
		console.log('유저 로그아웃 상태');
		if (t.name === 'support') {
			console.log('support 페이지 접근 -> 로그인 페이지로 이동');
			n(`/login?support=true`);
			return;
		} else {
			return n();
		}
	}
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
					component: () => import('../views/general/Login.vue')
				},
				{
					path: '/support',
					name: 'support',
					component: () => import('../views/general/support/Home.vue'),
					beforeEnter: checkUser
				},
				{
					path: '/support/invite',
					name: 'support-invite',
					component: () => import('../views/general/support/Invite.vue'),
					beforeEnter: checkUser
				}
			]
		}
	]
});

export default router;
