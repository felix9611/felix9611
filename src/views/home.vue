<template>
  <div class="grid xl:grid-cols-5 px-[5rem] lg:px-[8rem] py-[9rem]">
    <div class="flex justify-center items-center">
      <img class="lg:col-sapn-1 rounded-xl scale-150" :src="mySelfHere.photo1" />
    </div>
    <div class="h-sceen xl:col-span-3">
      <div
        class="lg:px-[10rem] text-center text-[8rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        Felix Page
      </div>
      <div
        class="lg:px-[10rem] text-center text-[5rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        Welcome
      </div>
      <div
        class="lg:px-[10rem] text-center text-[5rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        I'm in there
      </div>
    </div>
    <div class="flex justify-center items-center">
      <img class="lg:col-sapn-1 rounded-xl scale-150" :src="mySelfHere.photo2" />
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'

const mySelfHere = ref({
  photo1: '/felix9611/toronto-sakura.jpg',
  photo2: '/felix9611/maruzensky-2.jpg'
})

export default defineComponent({
  setup() {
    return {
      mySelfHere
    }
  }
})
</script>
