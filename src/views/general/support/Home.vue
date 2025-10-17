<template lang="pug">
.support-home
    h1 Ourboat Supporter
    p 아워보트 서포터 페이지입니다.

    .router-menu-wrap
        router-link.router-menu(to="/support/invite")
            div 이미지
            div 이미지
            .title 마스터 계정 초대
            .desc 사용자의 회사 메일로 Ourboat 마스터 계정을 생성합니다.
        router-link.router-menu(to="/support")
            div 이미지
            div 이미지
            .title 추가될 기능
            .desc 추가될 기능에 대한 설명을 추가합니다. 추가될 기능에 대한 설명을 추가.
        router-link.router-menu(to="/support")
            div 이미지
            div 이미지
            .title 추가될 기능
            .desc 추가될 기능에 대한 설명을 추가합니다. 추가될 기능에 대한 설명을 추가.
</template>
<script setup lang="ts"></script>
<style scoped lang="less"></style>