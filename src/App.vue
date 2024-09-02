<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { useGlobalStore } from '@/stores/test'

const globalStore = useGlobalStore()

const onClick = () => {
  globalStore.routeKey++
}
</script>

<template>
  <router-view />
</template>

<style scoped></style>
