<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useGlobalStore } from '@/stores/test'
import { defineComponent, ref } from 'vue'

const globalStore = useGlobalStore()

const footerData = ref({
  name: 'Felix Mak',
  email: 'felix9611.ca@gmail.com',
  year: new Date().getFullYear()
})
const lickToOutside = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="w-screen h-full bg-gradient-to-r from-[#330831] to-[#134b75] py-4 text-white">
    <div
      class="lg:px-[10rem] xl:px-[20rem] text-[1.4rem] flex gap-5 items-center justify-center grid grid-cols-1 lg:grid-cols-5 gap-3 py-5"
    >
      <button @click="$router.push('/')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Home
        </div>
      </button>
      <button @click="$router.push('/about')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          About Me
        </div>
      </button>
      <button @click="$router.push('/my-photos')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Photographs
        </div>
      </button>
      <button @click="$router.push('/my-projects')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          My Projects
        </div>
      </button>
      <button @click="lickToOutside('https://felix9611-selfweb-angular.web.app/')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Angular Page
        </div>
      </button>
    </div>
    <div
      class="py-[1.65rem] text-center text-[3rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_rgb(99_102_241_/_0.8)]"
    >
      Here is Felix's Page
    </div>
    <div>
      <router-view />
    </div>
    <div class="text-center text-white font-600 text-[1.1rem]">
      <div>Copy Rights by {{ footerData.name }} @ {{ footerData.year }}</div>
      <div>{{ footerData.email }}</div>
    </div>
  </div>
</template>

<style scoped></style>
