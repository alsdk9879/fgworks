<template lang="pug">
select.select-wrap(
	:value="selectValue"
	:disabled="disabled"
	@change="emit('update:selectValue', $event.target.value)"
)
	option(
		v-for="opt in options"
		:key="opt.value"
		:value="opt.value"
	) {{ opt.label }}
</template>

<script setup lang="ts">
defineProps({
	selectValue: {
		type: String,
		default: ''
	},
	disabled: {
		type: Boolean,
		default: false
	},
	options: {
		type: Array as () => { value: string; label: string }[],
		required: true
	}
});

const emit = defineEmits(['update:selectValue']);

// 기본값이 없을 경우 첫 번째 옵션을 선택
if (!selectValue && options.length > 0) {
	emit('update:selectValue', options[0].value);
}
</script>

<style scoped lang="less">
// input
.input-wrap,
.select-wrap {
	position: relative;

	input,
	select,
	textarea {
		width: 100%;
		border: 1px solid var(--gray-color-200);
		border-radius: var(--border-radius-lg);
		padding: 0 1rem;
		font-size: var(--font-size-md);
		color: var(--gray-color-900);
		background-color: #fff;

		&::placeholder {
			opacity: 1;
			font-size: var(--font-size-md);
			color: var(--gray-color-300);
		}

		&:hover {
			border-color: var(--primary-color-400);
		}

		&:disabled {
			background-color: var(--gray-color-100);
			color: var(--gray-color-400);
			cursor: default;

			&:hover,
			&:active,
			&:focus {
				border-color: var(--gray-color-200);
			}
		}
	}

	textarea {
		display: block;
		padding: 1rem;
		resize: none;
		line-height: 1.4;
		min-height: 7.5rem;
	}

	input,
	select {
		height: 2.3rem;
	}

	input,
	textarea {
		&:active,
		&:focus {
			border-color: var(--primary-color-400);
		}
	}

	input[type='password'] {
		padding-right: 3rem;

		+ .btn-eye-off {
			display: none;
		}
	}

	input[type='date'] {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	&.upload-file {
		.text {
			font-size: var(--font-size-xs);
			color: var(--gray-color-600);
			margin-left: 4px;
		}

		.file-wrap {
			margin-top: 12px;
		}

		.file-list {
			margin-top: 16px;
		}

		.btn-upload-file {
			input {
				margin-bottom: 12px;
			}

			input[type='file']:disabled + .btn {
				background-color: var(--primary-color-100);
				border: 1px solid var(--primary-color-200);
				color: var(--primary-color-200);
				cursor: default;
			}

			.btn {
				display: inline-flex;
				width: fit-content;
				min-width: 120px;
				height: 36px;
				font-size: var(--font-size-sm);
				cursor: pointer;
				margin-right: 12px;
			}
		}

		.upload-file-list {
			margin-top: 16px;

			.file-name {
				width: 100%;
				border: 1px dashed var(--gray-color-300);
				background-color: var(--primary-color-25);
				border-radius: var(--border-radius-lg);
				padding: 9px 12px;
				font-size: var(--font-size-xs);
				color: var(--gray-color-400);
				margin-top: 8px;
			}

			li.file-name {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 0.5rem;
				background-color: inherit;
				border: none;
				padding: 0;
				gap: 0.5rem;
			}
		}

		.file-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 0.5rem;
			border: 1px dashed var(--gray-color-300);
			border-radius: var(--border-radius-lg);
			padding: 6.5px 12px;
			font-size: var(--font-size-xs);
			color: var(--gray-color-500);
			margin-top: 8px;

			&:first-child {
				margin-top: 0;
			}

			.file-name {
				line-height: 1.4;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

				&:hover {
					text-decoration: underline;
				}
			}
		}

		.file-link {
			&:hover {
				text-decoration: underline;
			}
		}

		button {
			flex: none;
		}

		svg {
			width: 16px;
			height: 16px;
			fill: var(--gray-color-500);
		}
	}

	input[type='file'] {
		border: none;
		padding: 0;
		border-radius: 0;
		background-color: transparent;
		height: auto;

		&::file-selector-button {
			height: 1.5rem;
			background-color: #fff;
			border: 1px solid var(--primary-color-400);
			border-radius: var(--border-radius-lg);
			padding: 0 1rem;
		}

		&:disabled {
			&::file-selector-button {
				height: 1.5rem;
				background-color: var(--gray-color-100);
				border: 1px solid var(--gray-color-200);
				border-radius: var(--border-radius-lg);
				padding: 0 1rem;
			}
		}
	}

	select {
		padding-right: 2.25rem;
		vertical-align: middle;
		background-repeat: no-repeat;
		background-size: 1.25rem 1.25rem;
		background-position: center right 0.5rem;
		background-image: url('@/assets/img/icon/icon_arrow_bottom.svg');
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;

		option[disabled] {
			display: none;
		}
	}

	&.warning {
		input {
			border-color: var(--warning-color-500);
		}
	}

	&.search {
		input {
			padding: 0 2.625rem 0 1rem;
			vertical-align: middle;
			background-repeat: no-repeat;
			background-size: 16px 16px;
			background-position: center right 14px;
			background-image: url('@/assets/img/icon/icon_search.svg');
		}
	}

	.desc {
		font-size: var(--font-size-xs);
		font-weight: 400;
		color: var(--warning-color-400);
		line-height: 1.2;
		margin-top: 0.25rem;
	}
}
</style>
