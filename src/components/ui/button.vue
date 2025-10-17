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

<style scoped lang="less">
.btn {
	font-size: var(--font-size-md);
	font-weight: 500;
	color: #fff;
	background-color: var(--primary-color-400);
	border: 1px solid var(--primary-color-400);
	border-radius: var(--border-radius-lg);
	height: 2.3rem;
	padding: 0 0.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	flex: none;

	&:hover,
	&:active,
	&:focus {
		background-color: var(--primary-color-400-dark);
		border: 1px solid var(--primary-color-400-dark);
	}

	&:disabled {
		background-color: var(--primary-color-200);
		border: 1px solid var(--primary-color-200);
		cursor: default;
	}

	i {
		color: #fff;
	}

	&.lg {
		font-size: var(--font-size-lg);
		font-weight: 700;
		height: 2.875rem;
		padding: 0 1.25rem;
	}

	&.sm {
		height: 1.25rem;
		font-size: var(--font-size-sm);
		padding: 0 0.4rem;
		border-radius: var(--border-radius-md);
	}

	&.xs {
		height: 1.8125rem;
		font-size: var(--font-size-sm);
		padding: 0 0.5rem;
		border-radius: var(--border-radius-md);
	}

	&.outline {
		background-color: #fff;
		color: var(--primary-color-400);

		&:hover,
		&:active {
			background-color: var(--primary-color-50);
			border: 1px solid var(--primary-color-400-dark);
		}

		&:focus {
			border: 1px solid var(--primary-color-400);
		}

		&:disabled {
			background-color: var(--primary-color-100);
			border: 1px solid var(--primary-color-200);
			color: var(--primary-color-200);

			i {
				color: var(--primary-color-200);
			}
		}

		i {
			color: var(--primary-color-400);
		}
	}

	&.bg-gray {
		background-color: var(--gray-color-200);
		border: 1px solid var(--gray-color-200);
		color: var(--gray-color-500);

		&:hover,
		&:active {
			background-color: var(--gray-color-400);
			border: 1px solid var(--gray-color-400);
			color: var(--gray-color-700);

			i {
				color: var(--gray-color-700);
			}
		}

		i {
			color: var(--gray-color-500);
		}

		&:disabled {
			background-color: var(--gray-color-100);
			border: 1px solid var(--gray-color-100);
			color: var(--gray-color-300);

			i {
				color: var(--gray-color-300);
			}
		}

		&.outline {
			background-color: #fff;
			border: 1px solid var(--gray-color-400);

			&:hover,
			&:active {
				background-color: var(--gray-color-300);
				border: 1px solid var(--gray-color-500);
			}

			i {
				color: var(--gray-color-700);
			}

			&:disabled {
				background-color: var(--gray-color-100);
				border: 1px solid var(--gray-color-300);
				color: var(--gray-color-300);

				i {
					color: var(--gray-color-300);
				}
			}
		}
	}

	&.warning {
		background-color: var(--warning-color-500);
		border: 1px solid var(--warning-color-500);
		color: #fff;

		&:hover,
		&:active {
			background-color: var(--warning-color-600);
			border: 1px solid var(--warning-color-600);
		}

		&:disabled {
			background-color: var(--warning-color-50);
			border: 1px solid var(--warning-color-50);
			color: var(--warning-color-200);

			i {
				color: var(--warning-color-200);
			}
		}

		&.outline {
			background-color: #fff;
			border: 1px solid var(--warning-color-500);
			color: var(--warning-color-500);

			&:hover,
			&:active {
				background-color: var(--warning-color-50);
				border-color: var(--warning-color-600);
				color: var(--warning-color-600);
			}

			i {
				color: var(--warning-color-600);
			}

			&:disabled {
				background-color: var(--warning-color-50);
				border: 1px solid var(--warning-color-200);
				color: var(--warning-color-200);

				i {
					color: var(--warning-color-200);
				}
			}
		}
	}
}
</style>
