<template>
  <div class="py-6">
    <div class="px-[3rem] lg:px-[10rem]">
      <div
        class="py-[1.5rem] text-center text-[3rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_rgb(99_102_241_/_0.8)]"
      >
        {{ mySelf.title }}
      </div>
    </div>
    <div
      class="px-[3rem] lg:px-[8rem] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-2 gap-6"
    >
      <template v-for="photo in mySelf.photos" key="photo">
        <div class="grid grid-cols-4 gap-3 text-center text-[1.25rem]">
          <div class="col-span-full relative w-full overflow-hidden bg-cover bg-no-repeat">
            <img
              :src="photo.path"
              class="w-full transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
          <div class="col-span-full text-center text-[1.5rem] text-white font-black">
            {{ photo.name }}
          </div>
          <div>
            {{ photo.shutter }}
          </div>
          <div>
            {{ photo.aperture }}
          </div>
          <div>ISO{{ photo.iso }}</div>
          <div>
            {{ photo.len }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'

const mySelf = ref({
  title: 'My Photographs',
  detailOfMe: `Hello I'm Felix, a software engineer with strong for full-stack development. Studied in Taiwan's University and have some work experience in Hong Kong, bring my skill and my smart in the software industry. and started my new life in Toronto, Ontario , Canada from 2023. I'm happy bring my ability and my skill to Canada continue my career there.I Always let myself to face on different challenges, never stop in only one place anf given up, continue to go another miles, let my life more full the poert.`,
  photos: [
    {
      path: '/photos-1.jpg',
      name: 'Northern Lights in Ontario',
      shutter: '10s',
      aperture: 'F3.5',
      iso: 800,
      len: '10mm'
    },
    {
      path: '/photos-2.jpg',
      name: 'Northern Lights in Ontario',
      shutter: '13s',
      aperture: 'F3.5',
      iso: 640,
      len: '10mm'
    },
    {
      path: '/photos-3.jpg',
      name: 'Train arrived station in Tokyo, Japan',
      shutter: '1/400',
      aperture: 'F5.6',
      iso: 200,
      len: '70mm'
    },
    {
      path: '/photos-4.jpg',
      name: 'Spring of Yokohama, Japan',
      shutter: '1/160',
      aperture: 'F7.1',
      iso: 100,
      len: '27mm'
    },
    {
      path: '/photos-5.jpg',
      name: 'Old Bus in the modern of Hong Kong',
      shutter: '1/160',
      aperture: 'F4.5',
      iso: 200,
      len: '17mm'
    },
    {
      path: '/photos-6.jpg',
      name: 'The woman crossplay with sunset',
      shutter: '1/160',
      aperture: 'F4.5',
      iso: 200,
      len: '17mm'
    }
  ]
})
</script>
