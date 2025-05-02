<script lang="ts" setup>
import BrowserDetector from 'browser-dtector'
import AppLayout from './components/AppLayout/AppLayout.vue'

const browser = new BrowserDetector(window.navigator.userAgent).parseUserAgent()

document.documentElement.classList.add(browser.name.replace(' ', '_'))
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>
