<template lang="pug">
div
    //- 서포터 로그인
    template(v-if="route.query.support")
        div 서포터 로고 이미지 넣을 곳
        .title Ourboat Supporter
        .sub-title 아워보트 서포터 로그인
        form(@submit="login")
            input(type="email" name="email" placeholder="SKAPI 계정(이메일) 입력" required)
            input(type="password" name="password" placeholder="비밀번호 입력" required)
            label
                input(type="checkbox")
                span 아이디 저장
            button(type="submit") 로그인

    //- 구글 웍스 로그인
    template(v-else)
        div Ourboat 로고 이미지 넣을 곳
        .title Ourboat
        .desc 회사에서 사용하는 구글 웍스 계정으로 로그인해주세요.
        button Google Works
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { skapi } from '@/main';
import { user } from '@/assets/ts/user';

const router = useRouter();
const route = useRoute();

let login = (e) => {
    skapi.login(e).then((u) => {
        for (let k in u) {
            user[k] = u[k];
        }
        if (route.query.support) {
            router.push('/support');
        } else {
            // 우선 관리자 페이지 먼저 처리
            // 나중에 사용자 기획 완료되면 추가 처리
            router.push('/admin');
        }
    }).catch((err) => {
        for (let k in user) {
            delete user[k];
        }
        alert(err.message);
    });
}
</script>

<style scoped lang="less"></style>