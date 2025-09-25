<template lang="pug">
header#header
	.header-wrap
		.logo
			span FG Works
			span.admin admin

		.category-wrap
			.select-wrap.company-name
				select
					option(value='company1' selected) company1
					option(value='company2') company2
			.menu-wrap menu
			.user-profile user profile
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
#header {
	position: fixed;
	width: 100%;
	height: var(--header-height);
	top: 0;
	background-color: #eee;
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
