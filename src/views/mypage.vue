<template>
  <div class="w-screen h-full bg-gradient-to-r from-cyan-500 to-blue-500 py-4">
    <div class="text-center text-white p-3 text-[3rem] font-bold">Here is Felix's Page</div>
    <div class="lg:px-[10rem] px-[3rem] md:px-[3rem] grid lg:grid-cols-1 gap-6">
      <div class="hover:bg-opacity-45 bg-white bg-opacity-25 rounded-xl shadow-lg p-3">
        <div class="text-center text-[1.2rem] text[#676767]">
          My journey never stops. I keep moving forward and embracing new milestones. Life doesn’t
          have fixed answers—we should never stop searching for our own. Without trying, we won't
          discover new directions.
        </div>
      </div>
      <div class="hover:bg-opacity-45 bg-white bg-opacity-25 rounded-xl shadow-lg p-3">
        <div class="text-center text-[1.6rem] text[#676767]">
          Trying new things brings challenges and stimulates growth, offering valuable new
          experiences for myself.
        </div>
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
      <div class="text-center text-white p-2 text-[2rem] font-bold">My Project in Github</div>

      <div class="grid lg:grid-cols-2 gap-3 h-full">
        <div v-for="project in githubProjects">
          <div class="hover:bg-opacity-45 bg-white bg-opacity-25 rounded-2xl shadow-lg p-3 h-full">
            <div class="grid grid-cols-10">
              <div class="text-left text-[1.8rem] font-bold col-span-9">
                {{ project.name }}
              </div>
              <div class="flex justify-center items-center">
                <img
                  @click="clickToGithub(project.url)"
                  class="w-[70%] mt-0 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100"
                  src="/github.png"
                />
              </div>
            </div>
            <div class="py-1 text-center text-[1.5rem]">Example Screen</div>
            <div class="grid lg:grid-cols-2 gap-3">
              <div v-for="image in project.images">
                <div @click="opernDialg(image)">
                  <img :src="image" class="rounded-md w-[100%]" />
                </div>
              </div>
            </div>
            <div class="text-center py-1 text-[1.5rem]">Descripction</div>
            <div class="hover:bg-opacity-65 bg-white bg-opacity-40 rounded-lg shadow-md p-2">
              <div v-for="descripction in project.descripction">・{{ descripction }}</div>
            </div>
            <div class="py-1 text-center text-[1.5rem]">Stack Flow</div>
            <div class="grid lg:grid-cols-2 gap-3">
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
                    <div v-for="mainHighligth in stackFlow.mainHighligths">
                      <span>{{ mainHighligth }}</span>
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
<script lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'

const openDialog = ref(false)

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
          'Develop the frontend user interface to work seamlessly with in-house use solution, for example myself to use',
          'Manage fixed assets, including status tracking, information recording, equipment purchase records, write-offs, and maintenance, within facility settings.',
          'Provide reporting, exporting, monitoring, and tracking capabilities for the status of fixed assets.'
        ],
        mainHighligths: ['Vue.js v2', 'Tailwind CSS', 'Chart.js', 'jspdf', 'xlsx(Node.js)', 'JWT']
      },
      {
        name: 'Backend',
        descripctions: [
          'Develop backend logic for database management and create queries to generate user-friendly datasets.',
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
          'Develop the frontend user interface to work seamlessly with POS solution',
          'Manage products, inventories, and purchase orders across various branch locations more effectively.',
          'Provide reporting, exporting, monitoring, and tracking capabilities for the status of purchase orders and inventory'
        ],
        mainHighligths: ['Vue.js v2', 'Tailwind CSS', 'Chart.js', 'jspdf', 'xlsx(Node.js)', 'JWT']
      },
      {
        name: 'Backend',
        descripctions: [
          'Develop backend logic for database management and create queries to generate user-friendly datasets.',
          'Implement permission levels to control user access rights for operating POS system',
          'Use JWT tokens for user authentication and authorization, ensuring security and protection of products, inventories, and purchase orders data.'
        ],
        mainHighligths: ['Java', 'Spring boot v3.2', 'MySQL', 'JWT', 'xlsx(Node.js)', 'captcha']
      }
    ]
  }
])

const workExperiences = ref([
  {
    jobTilte: 'Software Engineer',
    company: 'Swivel Software Inc.',
    location: 'Toronto, Ontario, Canada',
    workRange: ['2023.04', ''],
    jobHighlight: [
      'Supply Chain system development',
      'Data Analyze and Visualized',
      'System Testing & User Manual',
      'Technology Review and Research for customer requirement'
    ],
    skills: [
      'VUE',
      'Node.Js',
      'NestJS',
      'TailwindCSS',
      'Html',
      'CSS',
      'Typescript',
      'Javascript',
      'MSSQL',
      'MySQL',
      'Data Analyze',
      'Data Visualized'
    ]
  },
  {
    jobTilte: 'Software Engineer',
    company: 'Swivel Software Limited',
    location: 'Sha Tin, HK',
    workRange: ['2021.04', '2023.03'],
    jobHighlight: [
      'Supply Chain system development',
      'Data Analyze and Visualized',
      'System Testing & User Manual',
      'Technology Review and Research for customer requirement'
    ],
    skills: [
      'VUE',
      'Node.Js',
      'NestJS',
      'Html',
      'CSS',
      'Typescript',
      'Javascript',
      'MSSQL',
      'MySQL',
      'Data Analyze',
      'Data Visualized'
    ]
  },
  {
    jobTilte: 'Mobile Developer',
    company: 'Certizen Limited',
    location: '',
    workRange: ['2020.11', '2021.04'],
    jobHighlight: [],
    skills: []
  }
])

export default defineComponent({
  setup() {
    return {
      workExperiences,
      footerData,
      githubProjects,
      openDialog
    }
  },
  methods: {
    clickToGithub(url: string) {
      window.open(url, '_blank')
    },
    opernDialg(imgPath: string) {
      console.log(imgPath)
      this.openDialog = true
    }
  },
  actions: {}
})
</script>
