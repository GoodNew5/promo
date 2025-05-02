<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import Preloader from '@/components/Preloader/Preloader.vue'
import { BtnVariants, type BtnProps } from './BtnTypes'

const props = withDefaults(defineProps<BtnProps>(), {
  variant: BtnVariants.one
})

const { disabled, isLoading, variant } = toRefs(props)

const classes = computed(() => ({
  'variant-one': variant.value === BtnVariants.one,
  'variant-two': variant.value === BtnVariants.two,
  'is-loading': isLoading.value
}))

const isDisabled = computed(() => disabled.value || isLoading.value)
</script>

<template>
  <button class="btn" :class="{ ...classes }" :disabled="isDisabled">
    <span class="btn-text">
      <slot />
    </span>
    <Preloader v-if="isLoading" />
  </button>
</template>
<style scoped src="./Btn.scss" />
