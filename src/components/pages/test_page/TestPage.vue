<script lang="ts" setup>
import { useBreakpointsStore } from '@/store/breakpointsStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const breakpoints = useBreakpointsStore()

const { isDesktop, isLaptopOnly, isTabletOnly, isMobileOnly } = storeToRefs(breakpoints)

onMounted(() => {
  console.info('TestPage mounted')
})
</script>

<template>
  <div class="test-page">
    <div class="breakpoint" v-if="isMobileOnly">MOBILE</div>
    <div class="breakpoint" v-if="isTabletOnly">TABLET</div>
    <div class="breakpoint" v-if="isLaptopOnly">LAPTOP</div>
    <div class="breakpoint" v-if="isDesktop">DESKTOP</div>
  </div>
</template>
<style scoped src="./TestPage.scss" />
