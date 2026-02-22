<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>💻</span> Tech Stack
    </h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      <div
        v-for="(tech, i) in technologies"
        :key="i"
        class="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 cursor-default hover:scale-105"
        :class="isDark ? 'bg-dark-border hover:bg-dark-accent/10' : 'bg-sky-50 hover:bg-light-accent/10'"
      >
        <span class="text-2xl">{{ tech.icon }}</span>
        <span class="text-xs font-medium text-center">{{ tech.name }}</span>
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
defineProps({ isDark: Boolean })

const technologies = [
  { name: 'Vue.js', icon: '💚', level: 90 },
  { name: 'JavaScript', icon: '🟨', level: 85 },
  { name: 'TypeScript', icon: '🔷', level: 80 },
  { name: 'NestJS', icon: '🐱', level: 75 },
  { name: 'Node.js', icon: '🟩', level: 80 },
  { name: 'Python', icon: '🐍', level: 70 },
  { name: 'Tailwind', icon: '🎨', level: 90 },
  { name: 'Supabase', icon: '⚡', level: 75 },
]
</script>
