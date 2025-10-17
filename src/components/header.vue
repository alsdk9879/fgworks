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
            .select-wrap.company-name
                select
                    option(value='company1' selected) company1
                    option(value='company2') company2
            .menu-wrap menu
            .user-profile user profile
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { skapi } from '@/main';

const router = useRouter();
const route = useRoute();

let logout = () => {
    console.log('logout');
    skapi.logout().then(() => {
        router.push('/login');
    });
}
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
