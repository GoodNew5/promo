<script lang="ts" setup></script>

<template>
  <div class="app-layout">
    <main class="background-wrapper">
      <div class="wrapper wrapper-content">
        <div class="locale-changer">
          <select v-model="$i18n.locale">
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale }}
            </option>
          </select>
        </div>
        <slot></slot>
      </div>
    </main>
    <footer class="wrapper">
      <div>footer...</div>
    </footer>
  </div>
</template>
<style scoped src="./AppLayout.scss" />
