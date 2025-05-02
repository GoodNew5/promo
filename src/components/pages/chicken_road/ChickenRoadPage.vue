<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import Btn from '@/components/Btn/Btn.vue'
import { BtnVariants } from '@/components/Btn/BtnTypes'
import SomeChickenComponent from './components/SomeChickenComponent/SomeChickenComponent.vue'
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  document.documentElement.classList.add('chicken-road-page')
  document.title = 'Chicken Road'
  /**
   * Add fonts or something
   */
})
</script>

<template>
  <div class="chicken-road-component">
    <h1>Chicken Road</h1>
    <SvgIcon class="icon-coffee mb-2" name="coffee" />
    <Btn :variant="BtnVariants.one" class="mb-2">Test Btn</Btn>
    <Btn :variant="BtnVariants.one" :is-loading="true" class="mb-2">Test Btn</Btn>
    <div class="box mb-2" />
    <div class="box2 mb-2" />
    <p>{{ $t('chickenRoadPage.title') }}</p>
    <SomeChickenComponent />
  </div>
</template>
<style scoped src="./ChickenRoadPage.scss" />
