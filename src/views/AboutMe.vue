<template>
  <div>
    <div class="px-[3rem] lg:px-[10rem]">
      <div class="hover:bg-opacity-35 bg-white bg-opacity-10 rounded-xl shadow-lg">
        <div class="text-center text-[1.1rem] py-2 px-[3rem] lg:px-[10rem] text-white">
          <VueWriter :array="[mySelf.detailOfMe]" :typeSpeed="70" />
          {{ mySelf.detailOfMe }}
        </div>
        <div class="text-center text-[1.1rem] py-2 px-[3rem] lg:px-[10rem] text-white">
          {{ mySelf.thinkInMySelf }}
        </div>
        <div class="text-center text-[1.1rem] py-2 px-[3rem] lg:px-[10rem] text-white">
          {{ mySelf.hoobbiesOfMe }}
        </div>
      </div>
    </div>
    <div class="px-[3rem] lg:px-[8rem] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2">
      <!--<div class="order-2 sm:py-[2rem] m:order-2 sm:order-2 md:order-1 lg:order-1 px-[3rem]">
        <img class="lg:col-sapn-1 rounded-lg scale-100" :src="mySelf.photo" />
        <div class="text-white text-center text-[0.8rem] py-2">
          {{ mySelf.photoInfo }}
        </div>
      </div>-->
      <div
        class="sm:order-1 lg:order-full md:col-sapn-full lg:col-sapn-full xl:col-sapn-full px-10 w-full grid grid-cols-1 lg:w-full"
      >
        <div
          class="whitespace-nowrap text-[2rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_rgb(99_102_241_/_0.8)]"
        >
          {{ mySelf.title }}
        </div>
        <div class="text-[1.6rem] text-white whitespace-nowrap">{{ mySelf.myName }}</div>
        <div class="text-[1.4rem] text-white whitespace-nowrap">{{ mySelf.jobTitle }}</div>
        <div
          class="pt-8 text-[1.4rem] text-white font-black py-1 [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_rgb(99_102_241_/_0.8)]"
        >
          {{ mySelf.skills.tilte }}
        </div>
        <div class="w-full">
          <div v-for="item in mySelf.skills.items">
            <span class="text-white text-[1.2rem]">{{ item.name }}</span>
            <div class="flex flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap gap-3 py-2 w-full">
              <div v-for="(row, index) in item.list">
                <div
                  :class="`hover:bg-opacity-50 bg-[#d5d5d5] bg-opacity-30 px-2 py-1 rounded-lg text-white whitespace-nowrap`"
                >
                  {{ row }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'

const mySelf = ref({
  title: 'About me',
  detailOfMe: `Hello I'm Felix, a software engineer with strong for full-stack development. Studied in Taiwan's University and have some work experience in Hong Kong, bring my skill and my smart in the software industry. and started my new life in Toronto, Ontario , Canada from 2023. I'm happy bring my ability and my skill to Canada continue my career there.I Always let myself to face on different challenges, never stop in only one place anf given up, continue to go another miles, let my life more full the poert.`,
  thinkInMySelf: `I thrive on communicate and get along with peoples, through communication make exchange and learn IT Industry development and future, motivate myself to move forward and never astop in there, work in team work and make self learning, positive,get the team has more strength to move forward. I'm excited to contribute my skills and my ability to bring innovative for life and any life.Let connect and discuss I can bring my value and improve the team!I Always welcome to make connect`,
  hoobbiesOfMe: `In the off my coding time, I will doing my Anime Cosplay and photoshoot for meeting my friends, continue my communication.`,
  myName: 'Felix Mak',
  jobTitle: 'Software Engineer (Full-stack)',
  photo: '/maruzensky-2.jpg',
  photoInfo: `The story about my cosplayed anime characters, called Maruzensky and from Japanese Anime called Uma Musume Pretty Derby said race story, they are according to real racing horse history and story. Maruzensky's father called Nijinsky is born in Ontario, Canada and race in UK & Ireland, honours the Canadian Horse Racing Hall of Fame in 1976.
`,
  skills: {
    tilte: 'Skills',
    items: [
      {
        name: 'Programming Languages',
        colorHighlight: 'd4e9ff',
        list: ['Java', 'Javascript', 'Typescript', 'CSS', 'HTML', 'Node.js', 'JSON', 'C++']
      },
      {
        name: 'Backend Framework',
        colorHighlight: 'd4e9ff',
        list: ['Spring Boot (Java)', 'Nest.js (Node.js)']
      },
      {
        name: 'Frontend Framework',
        colorHighlight: 'd4e9ff',
        list: ['Vue.js', 'Tailwind CSS', 'Vite', 'Chart.js', 'Plotly.js', 'Angular']
      },
      {
        name: 'Database',
        colorHighlight: 'd4e9ff',
        list: ['MySQL', 'MSSQL', 'PostgreSQL']
      },
      {
        name: 'Development Tools',
        colorHighlight: 'd4e9ff',
        list: [
          'Git',
          'Github',
          'VS Code',
          'Atom',
          'Postman',
          'IntelliJ',
          'Microsoft SQL Server',
          'MySQL Workbench',
          'Maven',
          'NPM',
          'Yarn',
          'PNPM',
          'WSL'
        ]
      },
      {
        name: 'Other Tools',
        colorHighlight: 'd4e9ff',
        list: ['Photoshop', 'Ligthroom']
      },
      {
        name: 'Personal Speak Language',
        colorHighlight: 'd4e9ff',
        list: ['Cantonese', 'Mandarin', 'English']
      },
      {
        name: 'Other',
        list: ['Photoshoot']
      }
    ]
  }
})

const footerData = ref({
  name: 'Felix Mak',
  email: 'felix9611.ca@gmail.com',
  year: new Date().getFullYear()
})

export default defineComponent({
  setup() {
    return {
      mySelf,
      footerData
    }
  }
})
</script>
