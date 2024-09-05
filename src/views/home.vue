<template>
  <div class="grid grid-cols-1 xl:grid-cols-5 gap-2 px-[5rem] lg:px-[4rem] py-[4rem]">
    <div class="">
      <img class="lg:col-sapn-1 rounded-xl" :src="mySelfHere.photo1" />
    </div>
    <div class="text-center h-sceen xl:col-span-3 px-[3rem]">
      <div
        class="lg:px-[10rem] text-[3rem] lg:text-[7.4rem] xl:text-[7.4rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        Felix Page
      </div>
      <div
        class="lg:px-[10rem] text-[3rem] lg:text-[5rem] xL:text-[5rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        Welcome
      </div>
      <div
        class="lg:px-[10rem] text-[3rem] lg:text-[7.4rem] xl:text-[7.4rem] text-[5rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        I'm there
      </div>
    </div>
    <div class="xl:col-span-1">
      <img class="lg:col-sapn-1 rounded-xl" :src="mySelfHere.photo2" />
    </div>
    <div class="xl:col-span-full text-center text-white py-[2rem] text-[1.1rem]">
      <div>Copy Rights by {{ footerData.name }} @ {{ footerData.year }}</div>
      <div>{{ footerData.email }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'

const mySelfHere = ref({
  photo1: '/felix9611/toronto-sakura.jpg',
  photo2: '/felix9611/maruzensky-2.jpg'
})

const footerData = ref({
  name: 'Felix Mak',
  email: 'felix9611.ca@gmail.com',
  year: new Date().getFullYear()
})

export default defineComponent({
  setup() {
    return {
      mySelfHere,
      footerData
    }
  }
})
</script>
