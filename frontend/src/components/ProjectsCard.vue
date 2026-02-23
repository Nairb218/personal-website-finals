<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>🚀</span> Projects
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
        :class="isDark ? 'bg-dark-border hover:bg-dark-accent/10' : 'bg-sky-50 hover:bg-light-accent/10'"
      >
        <div class="flex items-start justify-between mb-2">
          <!-- Render image or emoji depending on icon type -->
          <img v-if="project.isImage" :src="project.icon" :alt="project.name" class="w-8 h-8 object-contain" />
          <span v-else class="text-2xl">{{ project.icon }}</span>

          <span
            class="text-xs px-2 py-0.5 rounded-full font-medium"
            :class="isDark ? 'bg-dark-accent/20 text-dark-accent' : 'bg-light-accent/10 text-light-accent'"
          >
            {{ project.status }}
          </span>
        </div>
        <h4 class="font-semibold text-sm mb-1 group-hover:underline">{{ project.name }}</h4>
        <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-xs leading-relaxed">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-1 mt-2">
          <span
            v-for="(tag, j) in project.tags"
            :key="j"
            class="text-xs px-2 py-0.5 rounded-full"
            :class="isDark ? 'bg-dark-bg text-dark-muted' : 'bg-white text-light-muted'"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import resqtagLogo from '@/logos/ResQTag-Logo.png'

defineProps({ isDark: Boolean })

const projects = [
  {
    name: 'Personal Portfolio Website',
    icon: '🌐',
    isImage: false,
    description: 'A modern bento-grid portfolio built with Vue.js, NestJS, and Supabase.',
    status: 'Live',
    tags: ['Vue', 'NestJS', 'Supabase'],
  },
  {
    name: 'ResQTag',
    icon: resqtagLogo,
    isImage: true,
    description: 'A Pet Tag Application that helps pet owners keep track of their pets and ensure their safety.',
    status: 'Completed',
    tags: ['Outsystems'],
  },
  {
    name: 'Personal Profile Mobile App',
    icon: '👤',
    isImage: false,
    description: 'A Mobile Application that serves as a personal profile, showcasing my skills, projects, and contact information.',
    status: 'Completed',
    tags: ['Dart', 'Flutter'],
  }
]
</script>