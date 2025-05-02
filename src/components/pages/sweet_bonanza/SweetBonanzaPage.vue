<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import SomeBonanzaComponent from './components/SomeBonanzaComponent/SomeBonanzaComponent.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

onBeforeMount(() => {
  document.documentElement.classList.add('sweet-bonanza-page')
  document.title = 'Sweet Bonanza'
  /**
   * Add fonts or something
   */
})
</script>

<template>
  <div class="sweet-bonanza-component">
    <h1>Sweet Bonanza</h1>
    <SvgIcon class="icon-container mb-2" name="container" />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, dolore ab explicabo reiciendis,
    odit modi aut pariatur cupiditate qui ullam amet et dolor voluptas molestiae eaque! Voluptate,
    velit! Neque, nulla.
    <p>{{ $t('chickenRoadPage.title') }}</p>
    <SomeBonanzaComponent />
  </div>
</template>
<style scoped src="./SweetBonanzaPage.scss" />
