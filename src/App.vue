<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useGlobalStore } from '@/stores/test'
import { defineComponent } from 'vue'

const globalStore = useGlobalStore()

const onClick = () => {
  globalStore.routeKey++
}
</script>

<template>
  <div class="w-screen h-full bg-gradient-to-r from-[#330831] to-[#134b75] py-4 text-white">
    <div class="flex gap-5 items-center justify-center grid-col-1 lg:grid-col-3 py-5">
      <button @click="$router.push('/')">
        <div
          class="text-[1.2rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Home
        </div>
      </button>
      <button @click="$router.push('/about')">
        <div
          class="text-[1.2rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          About Me
        </div>
      </button>
      <button @click="$router.push('/my-projects')">
        <div
          class="text-[1.2rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          My Projects
        </div>
      </button>
    </div>
    <div
      class="py-[1.5rem] text-center text-[3rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_rgb(99_102_241_/_0.8)]"
    >
      Here is Felix's Page
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
