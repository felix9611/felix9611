<template>
  <div class="">
    <div class="lg:px-[10rem] px-[3rem] md:px-[3rem] grid lg:grid-cols-1 gap-6">
      <div
        class="lg:px-[10rem] text-center text-[1rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        {{ textOne }}
      </div>

      <div
        class="text-center text-[1rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        Trying new things brings challenges and stimulates growth, offering valuable new experiences
        for myself.
      </div>

      <!--<div class="text-center text-white p-2 text-[2rem] font-bold">My work experiences</div>

      <div class="grid lg:grid-cols-2 gap-3 h-full">
        <div v-for="workExperience in workExperiences">
          <div class="hover:bg-opacity-45 bg-white bg-opacity-25 rounded-2xl shadow-lg p-3 h-full">
            <div class="text-center text-[1.2rem]">
              <div class="text-[1.8rem] font-bold">{{ workExperience.company }}</div>
              <div class="text-[1.4rem] font-bold">{{ workExperience.jobTilte }}</div>
              <div>{{ workExperience.location }}</div>
              <div>{{ workExperience.workRange[0] }} - {{ workExperience.workRange[1] }}</div>
            </div>
            <div class="h-full py-1">
              <div class="py-1">
                <div class="text-center text-[1.2rem]">Job Highlight</div>
                <div
                  class="hover:bg-opacity-65 bg-white bg-opacity-40 rounded-lg shadow-md grid grid-cols-1 gap-2 p-2"
                >
                  <div
                    v-for="highlight in workExperience.jobHighlight"
                    class="text-center text-[1.2rem]"
                  >
                    <span>{{ highlight }}</span>
                  </div>
                </div>
              </div>
              <div class="py-1">
                <div class="text-center text-[1.2rem]">Job Highlight</div>
                <div
                  class="hover:bg-opacity-65 bg-white bg-opacity-40 rounded-lg shadow-md grid grid-cols-2 gap-2 p-2"
                >
                  <div v-for="skill in workExperience.skills" class="text-center text-[1.2rem]">
                    <span>-{{ skill }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <div
        class="text-center text-[3rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        My Project in Github
      </div>

      <div class="grid lg:grid-cols-2 gap-3 h-full">
        <div v-for="project in githubProjects">
          <div class="hover:bg-opacity-45 bg-white bg-opacity-25 rounded-2xl shadow-lg p-3 h-full">
            <div class="grid grid-cols-10">
              <div class="text-left text-[1.8rem] font-bold col-span-9">
                {{ project.name }}
              </div>
              <div v-if="project.url" class="flex justify-center items-center">
                <img
                  @click="clickToGithub(project.url)"
                  class="w-[70%] mt-0 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100"
                  src="/github.png"
                />
              </div>
              <div v-if="project.otherUrl" class="flex justify-center items-center">
                <img
                  @click="clickToGithub(project.otherUrl)"
                  class="w-[70%] mt-0 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100"
                  src="/world-wide-web.png"
                />
              </div>
            </div>
            <div class="py-1 text-center text-[1.5rem]">Example Screen</div>
            <div class="grid lg:grid-cols-2 gap-3">
              <div v-for="image in project.images">
                <div>
                  <img :src="image" class="rounded-md w-[100%]" />
                </div>
              </div>
            </div>
            <div class="text-center py-1 text-[1.5rem]">Descripction</div>
            <div class="hover:bg-opacity-65 bg-white bg-opacity-40 rounded-lg shadow-md p-2">
              <div v-for="descripction in project.descripction">・{{ descripction }}</div>
            </div>
            <div class="py-1 text-center text-[1.5rem]">Stack Flow</div>
            <div :class="`grid lg:grid-cols-${project.stackFlows.length > 1 ? '2' : '1'} gap-3`">
              <div v-for="stackFlow in project.stackFlows">
                <div
                  class="hover:bg-opacity-50 bg-white bg-opacity-20 rounded-lg shadow-md p-2 grid lg:grid-cols-2 gap-3 h-full"
                >
                  <div class="text-center text-[1.25rem] lg:col-span-full">
                    {{ stackFlow.name }}
                  </div>
                  <div
                    class="lg:col-span-full hover:bg-opacity-80 bg-[#d5d5d5] bg-opacity-60 rounded-lg border-1 p-4 shadow-md"
                  >
                    <div v-for="descripctionStack in stackFlow.descripctions">
                      <span>・{{ descripctionStack }}</span>
                    </div>
                  </div>
                  <div
                    class="lg:col-span-full hover:bg-opacity-80 bg-[#d5d5d5] bg-opacity-60 rounded-lg border-1 p-4 shadow-md text-center"
                  >
                    <div class="font-bold text-[1.2rem]">Technology Stack</div>
                    <div class="flex flex-wrap gap-3 py-2 w-full">
                      <div v-for="mainHighligth in stackFlow.mainHighligths">
                        <div
                          :class="`hover:bg-opacity-50 bg-[#575757] bg-opacity-30 px-2 py-1 rounded-lg text-white whitespace-nowrap`"
                        >
                          {{ mainHighligth }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer-->
      <div class="text-center text-white font-600 text-[1.1rem]">
        <div>Copy Rights by {{ footerData.name }} @ {{ footerData.year }}</div>
        <div>{{ footerData.email }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'

const footerData = ref({
  name: 'Felix Mak',
  email: 'felix9611.ca@gmail.com',
  year: new Date().getFullYear()
})

const githubProjects = ref([
  {
    name: 'Fixed Assets Management System',
    url: 'https://github.com/felix9611/springboot-fixedasset-vue-2',
    descripction: [
      'Inclubes frontend and backend for Fixed Assets Management System',
      'Management purchase expenditure record ,maintenance and write-off records in fixed assets at facilities',
      'Cloud-based web systems offer ease of use with no installation required, significantly reducing costs.'
    ],
    images: [
      '/felix9611/fixedasset-1.png',
      '/felix9611/fixedasset-2.png',
      '/felix9611/fixedasset-3.png',
      '/felix9611/fixedasset-4.png'
    ],
    stackFlows: [
      {
        name: 'Frontend',
        descripctions: [
          'Develop and design the frontend user interface to work seamlessly with in-house use solution, for example myself to use',
          'Manage fixed assets, including status tracking, information recording, equipment purchase records, write-offs, and maintenance, within facility settings.',
          'Provide reporting, exporting, monitoring, and tracking capabilities for the status of fixed assets.',
          'Using Tailwind CSS for UI design, and can support multiple devices with PC & Moblie'
        ],
        mainHighligths: ['Vue.js v2', 'Tailwind CSS', 'Chart.js', 'jspdf', 'xlsx(Node.js)', 'JWT']
      },
      {
        name: 'Backend',
        descripctions: [
          'Develop and design backend logic for database management and create queries to generate user-friendly datasets.',
          'Implement permission levels to control user access rights and manage the status of fixed assets.',
          'Use JWT tokens for user authentication and authorization, ensuring security and protection of fixed assets data.'
        ],
        mainHighligths: ['Java', 'Spring boot v3.2', 'MySQL', 'JWT', 'xlsx(Node.js)', 'captcha']
      }
    ]
  },
  {
    name: 'POS System',
    url: 'https://github.com/felix9611/springboot-pos-vue',
    descripction: [
      'Inclubes frontend and backend for POS System',
      'Management purchase orders record ,transaction history, inventory and product records in POS at bussiness',
      'Cloud-based web systems offer ease of use with no installation required, significantly reducing costs.'
    ],
    images: [
      '/felix9611/pos-1.png',
      '/felix9611/pos-2.png',
      '/felix9611/pos-3.png',
      '/felix9611/pos-4.png'
    ],
    stackFlows: [
      {
        name: 'Frontend',
        descripctions: [
          'Develop and design the frontend user interface to work seamlessly with POS solution',
          'Manage products, inventories, and purchase orders across various branch locations more effectively.',
          'Provide reporting, exporting, monitoring, and tracking capabilities for the status of purchase orders and inventory',
          'Using Tailwind CSS for UI design, and can support multiple devices with PC & Moblie'
        ],
        mainHighligths: ['Vue.js v2', 'Tailwind CSS', 'Chart.js', 'jspdf', 'xlsx(Node.js)', 'JWT']
      },
      {
        name: 'Backend',
        descripctions: [
          'Develop and design backend logic for database management and create queries to generate user-friendly datasets.',
          'Implement permission levels to control user access rights for operating POS system',
          'Use JWT tokens for user authentication and authorization, ensuring security and protection of products, inventories, and purchase orders data.'
        ],
        mainHighligths: ['Java', 'Spring boot v3.2', 'MySQL', 'JWT', 'xlsx(Node.js)', 'captcha']
      }
    ]
  },
  {
    name: 'Toronto HeartCon Official Page',
    otherUrl: 'https://torontoheartcon.github.io/torontoheartcon/',
    descripction: [
      'Develop and design the official page for the cosplay event in Toronto by as the Co-founder & Website Manager'
    ],
    images: [
      '/felix9611/heartcon-1.png',
      '/felix9611/heartcon-2.png',
      '/felix9611/heartcon-3.png',
      '/felix9611/heartcon-4.png'
    ],
    stackFlows: [
      {
        name: 'Frontend',
        descripctions: [
          'Using serverless database system for rapid deployment and de-emphasize the website',
          'Using Tailwind CSS for UI design, and can support multiple devices with PC & Moblie'
        ],
        mainHighligths: ['Vue.js v3', 'Tailwind CSS', 'Vite', 'Serverless Database']
      }
    ]
  }
])

const textOne =
  ref(`My journey never stops. I keep moving forward and embracing new milestones. Life doesn’t
        have fixed answers—we should never stop searching for our own. Without trying, we won't
        discover new directions.`)

function clickToGithub(url: string) {
  window.open(url, '_blank')
}
</script>
<style>
.typingEffect {
  width: 0;
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
  border-right: 2px solid white; /* The cursor*/
  font-size: 16px;
  white-space: nowrap; /* Keeps the text on a single line */
  animation: typing 10s steps(30) forwards;
}

/* The typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
