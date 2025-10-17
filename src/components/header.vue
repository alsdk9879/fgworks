<template lang="pug">
header#header
	//- 관리자 페이지일 경우
	template(v-if="route.path.startsWith('/admin')")
		.header-wrap
			.logo
				span Admin
			.utility-wrap
				.company-name company name
				.menu-wrap menu
				.user-profile user profile
	//- 사용자 페이지일 경우
	template(v-else)
		.header-wrap
			.logo
				span Ourboat
			.utility-wrap
				.notification notification
				.menu-wrap menu
				.user-profile user profile
	//- .header-wrap
		.logo
			span FG Works
			span.admin admin

		.category-wrap
			//- Select.company-name(v-model="selectedCompany" :options="options")
			.select-wrap.company-name
				select
					option(value='company1' selected) company1
					option(value='company2') company2
			.menu-wrap 
				Button menu
			.user-profile user profile
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { skapi } from '@/main';

const router = useRouter();
const route = useRoute();

const logout = () => {
	console.log('logout');
	skapi.logout().then(() => {
		router.push('/login');
	});
};
const options = [
	{ value: 'company1', label: 'company1' },
	{ value: 'company2', label: 'company2' }
];

// 초기값 설정
const selectedCompany = options[0].value;
</script>

<style scoped lang="less">
#header {
	position: fixed;
	width: 100%;
	height: var(--header-height);
	top: 0;
	background-color: var(--primary-color-400);
	color: var(--white-color);
	z-index: 999;
}

.header-wrap {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding: 0 1.25rem;
}

.category-wrap {
	display: flex;
	align-items: center;
	gap: 1rem;
}
</style>
