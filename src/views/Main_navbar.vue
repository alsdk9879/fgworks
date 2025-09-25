<template lang="pug">
#main-nav
	Navbar(:menuList="currentMenuList")
	.main-nav-wrap
		router-view
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch, computed, nextTick } from 'vue';
import { user } from '@/user.ts';

import Navbar from '@/components/navbar.vue';

const router = useRouter();
const route = useRoute();

const routePath = ref('');
const currentMenuList = ref(null);
const isadmin = computed(() => user.access_group > 98);

const menuLists = {
	admin: []
};

watch(
	() => route.path,
	(nv) => {
		routePath.value = nv.split('/')[1];
	},
	{ immediate: true }
);

watch(
	routePath,
	(nv) => {
		if (nv) {
			currentMenuList.value = menuLists[nv];
		}
	},
	{ immediate: true }
);
</script>

<style scoped lang="less">
#main-nav {
	width: 100%;

	.main-nav-wrap {
		flex-grow: 1;
		padding: 2rem;
		padding-left: 130px;
	}
}

@media (max-width: 768px) {
	#main-nav {
		.main-nav-wrap {
			padding: 1rem 1rem 2.5rem;
		}
	}
}
</style>
