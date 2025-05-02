<script lang="ts" setup>
import { computed } from 'vue'
import type { SvgIconProps } from './SvgIconTypes'

const props = defineProps<SvgIconProps>()
const symbolId = computed(() => `icon-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :href="`#${symbolId}`" />
  </svg>
</template>
<style scoped src="./SvgIcon.scss" />
