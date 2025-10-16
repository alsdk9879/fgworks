<template lang="pug">
Header
Navbar(:menuList="currentMenuList")
main#main
	//- section.content
	//- 	router-view
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch, computed, nextTick } from 'vue';

import Header from '@/components/header.vue';
import Navbar from '@/components/navbar_admin.vue';
import Loading from '@/components/loading.vue';

const router = useRouter();
const route = useRoute();

// const routePath = ref('');
const currentMenuList = ref(null);

console.log('currentMenuList : ', currentMenuList);
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
