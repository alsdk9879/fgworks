<template lang="pug">
h1 hello
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>
<style scoped lang="less"></style>