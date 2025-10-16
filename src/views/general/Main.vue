<template lang="pug">
header
    template(v-if="route.query.support || route.path.split('/')[1] === 'support'")
        div 서포터 로고 이미지 넣을 곳
        .title Supporter
        button(v-if="user?.user_id && route.path.split('/')[1] === 'support'") 로그아웃
    template(v-else)
        .title Ourboat
main
    router-view
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { user } from '@/assets/ts/user';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less"></style>