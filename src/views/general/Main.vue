<template lang="pug">
header#header
    //- 서포터 페이지일 경우
    template(v-if="route.query.support || route.path.startsWith('/support')")
        .header-wrap
            .logo
                div 이미지
                span Supporter
            .utility-wrap
                button(v-if="user?.user_id && route.path.startsWith('/support')" type="button" @click="logout") 로그아웃
    //- 사용자 페이지일 경우
    template(v-else)
        .header-wrap
            .logo
                span Ourboat
main#main
    router-view
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { user } from '@/assets/ts/user';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
#header {
    position: fixed;
    width: 100%;
    height: var(--header-height);
    top: 0;
    background-color: rgba(21, 32, 49, 1);
    color: #fff;
    z-index: 999;
}

#main {
    padding-top: var(--header-height);
}

.header-wrap {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0 1.25rem;
}
</style>