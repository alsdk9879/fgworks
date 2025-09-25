<template lang="pug">
nav#navbar
	.navbar-wrap
		ul.menu-group(v-for="(group, groupIndex) in menuList" :key="group.group")
			li.menu-title {{ group.group }}

			li.menu-item(v-for="(item, itemIndex) in group.items" :key="item.name" @click="toggleMenu(groupIndex, itemIndex)")
				.menu-toggle
					.text-wrap
						span.icon {{ item.icon }}
						span.name {{ item.name }}
					span.arrow(v-if="item.children?.length")
						.icon
							svg
								use(xlink:href="@/assets/icon/material-icon.svg#icon-arrow-bottom")
				ul.depth-menu(v-if="item.children?.length" :class="{ open: item.isOpen }")
					li.depth-item(v-for="depthItem in item.children" :key="depthItem.name")
						a(:href="depthItem.to") {{ depthItem.name }}
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { reactive } from 'vue';

const router = useRouter();
const route = useRoute();

// 메뉴 데이터
const menuList = reactive([
	{
		group: '공통 관리',
		items: [
			{
				name: '기본환경',
				icon: '📄',
				isOpen: false,
				children: [
					{ name: '회사정보', to: '', type: 'link' },
					{ name: '관리자 권한', to: '', type: 'link' }
				]
			},
			{
				name: '조직/구성원',
				icon: '👥',
				isOpen: false,
				children: [
					{ name: '조직 및 구성원 추가', to: '', type: 'link' },
					{ name: '구성원 정보 항목 관리', to: '', type: 'link' },
					{ name: '직책 설정', to: '', type: 'link' },
					{ name: '상태', to: '', type: 'link' }
				]
			}
		]
	},
	{
		group: '기능 관리',
		items: [
			{
				name: '게시판',
				icon: '📝',
				isOpen: false,
				children: [{ name: '항목 관리', to: '', type: 'link' }]
			},
			{
				name: '근태',
				icon: '⏰',
				isOpen: false,
				children: [
					{ name: '근태 기본 설정', to: '', type: 'link' },

					{ name: '근태 현황', type: 'divider' },
					{ name: '출퇴근 현황', to: '', type: 'link' },
					{ name: '근로 시간 현황', to: '', type: 'link' },

					{ name: '근무(출퇴근)', type: 'divider' },
					{ name: '근무 방식 관리', to: '', type: 'link' },

					{ name: '부재(연차/휴가)', type: 'divider' },
					{ name: '부재 방식 관리', to: '', type: 'link' },
					{ name: '특별 휴가 관리', to: '', type: 'link' },
					{ name: '경조 기준 관리', to: '', type: 'link' }
				]
			},
			{
				name: '결재',
				icon: '✍️',
				isOpen: false,
				children: [
					{ name: '결재 문서 관리', to: '', type: 'link' },
					{ name: '서식 및 카테고리 관리', to: '', type: 'link' },
					{ name: '유효하지 않은 결재관리', to: '', type: 'link' }
				]
			}
		]
	},
	{
		group: '',
		items: [
			{
				name: '구매 및 청구',
				icon: '🛠️',
				isOpen: false,
				children: [{ name: '관리자 계정 관리', to: '', type: 'link' }]
			}
		]
	}
]);

// 메뉴 토글
const toggleMenu = (groupIndex, itemIndex) => {
	if (menuList[groupIndex] && menuList[groupIndex].items[itemIndex]) {
		const targetItem = menuList[groupIndex].items[itemIndex];
		const isCurrentlyOpen = targetItem.isOpen;

		// 모든 메뉴를 먼저 닫기
		menuList.forEach((group) => {
			group.items.forEach((item) => {
				item.isOpen = false;
			});
		});

		// 클릭한 메뉴가 닫혀있었다면 열기 (이미 열려있었다면 닫힌 상태 유지)
		if (!isCurrentlyOpen) {
			targetItem.isOpen = true;
		}
	}
};
</script>

<style scoped lang="less">
#navbar {
	position: fixed;
	top: var(--header-height);
	left: 0;
	width: var(--navbar-width);
	height: calc(100vh - var(--header-height));
	background-color: #f5f5f5;
	border-right: 1px solid #ddd;
	overflow-y: auto;
	z-index: 999;
}

.navbar-wrap {
	height: 100%;
}

.menu-group {
	margin-bottom: 1.5rem;
	padding: 0 0.5rem 1.5rem;
	border-bottom: 1px solid #ddd;

	&:first-of-type {
		margin-top: 1.5rem;
	}
}

.menu-title {
	font-size: var(--font-size-xs);
	color: #999;
	margin: 0.75rem 0;
}

.menu-item {
	margin-bottom: 4px;
}

.menu-toggle {
	width: 100%;
	display: flex;
	align-items: center;
	padding: 10px;
	font-size: var(--font-size-md);
	background: none;
	border: none;
	cursor: pointer;
	justify-content: space-between;

	&:hover {
		background: #eee;
		border-radius: var(--border-radius-md);
	}

	.text-wrap {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
}

.depth-menu {
	list-style: none;
	padding-left: 2.125rem;
	padding-right: 1rem;
	display: none;

	&.open {
		display: block;
	}

	a {
		display: block;
		padding: 0.5rem;
		font-size: var(--font-size-sm);
		color: var(--gray-color-900);

		&:hover {
			background: #777;
			border-radius: var(--border-radius-md);
			color: #fff;
		}
	}
}

.depth-item {
	padding: 0.25rem 0;
}
</style>
