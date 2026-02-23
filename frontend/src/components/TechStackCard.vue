<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>💻</span> Tech Stack
    </h3>
    <div class="grid grid-cols-4 gap-2">
      <div
        v-for="(tech, i) in technologies"
        :key="i"
        class="flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 cursor-default hover:scale-105"
        :class="isDark ? 'bg-dark-border hover:bg-dark-accent/10' : 'bg-sky-50 hover:bg-light-accent/10'"
      >
        <img :src="tech.icon" :alt="tech.name" class="w-7 h-7 object-contain" />
        <span class="text-[10px] font-medium text-center leading-tight">{{ tech.name }}</span>
        <div class="w-full h-1 rounded-full overflow-hidden" :class="isDark ? 'bg-dark-bg' : 'bg-gray-200'">
          <div
            class="h-full rounded-full transition-all duration-500"
            :class="isDark ? 'bg-dark-accent' : 'bg-light-accent'"
            :style="{ width: tech.level + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vueLogo from '@/logos/Vue.png'
import jsLogo from '@/logos/javascriptLogo.png'
import tsLogo from '@/logos/typescript.png'
import nestLogo from '@/logos/nestJS.svg'
import nodeLogo from '@/logos/nodeJS.png'
import pythonLogo from '@/logos/pythonLogo.png'
import supabaseLogo from '@/logos/supabase.png'
import cssLogo from '@/logos/css.png'
import htmlLogo from '@/logos/html.png'
import outsystemsLogo from '@/logos/outsystems.png'
import javaLogo from '@/logos/java.png'
import arduinoLogo from '@/logos/Arduino_Logo.png'

defineProps({ isDark: Boolean })

const technologies = [
  { name: 'Vue.js', icon: vueLogo, level: 78 },
  { name: 'JavaScript', icon: jsLogo, level: 60 },
  { name: 'TypeScript', icon: tsLogo, level: 42 },
  { name: 'NestJS', icon: nestLogo, level: 75 },
  { name: 'Node.js', icon: nodeLogo, level: 35 },
  { name: 'Python', icon: pythonLogo, level: 85 },
  { name: 'Supabase', icon: supabaseLogo, level: 95 },
  { name: 'CSS', icon: cssLogo, level: 90 },
  { name: 'HTML', icon: htmlLogo, level: 90 },
  { name: 'Outsystems', icon: outsystemsLogo, level: 95 },
  { name: 'Java', icon: javaLogo, level: 45 },
  { name: 'Arduino', icon: arduinoLogo, level: 65 },
]
</script>