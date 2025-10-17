<template lang="pug">
button.btn(:type="type || 'button'" :disabled="disabled")
  slot
</template>

<script setup lang="ts">
defineProps({
	type: {
		type: String as () => 'button' | 'submit' | 'reset',
		default: 'button'
	},
	disabled: {
		type: Boolean,
		default: false
	}
});
</script>

<style scoped lang="less"></style>
