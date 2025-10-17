<template lang="pug">
router-link(to="/support")
    div 이미지

.box-wrap
    div 이미지
    .title 최초 마스터 계정 초대
    .desc Ourboat에 초대할 최초 마스터 계정의 정보를 입력하세요.

    form
        input(type="text" name="name" placeholder="마스터 관리자 이름 입력" required)
        input(type="email" name="email" placeholder="이메일 입력" required)
        button(type="submit") 초대하기
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>
<style scoped lang="less"></style>