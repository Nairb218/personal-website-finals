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
          <span class="text-2xl">{{ project.icon }}</span>
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
defineProps({ isDark: Boolean })

const projects = [
  {
    name: 'Personal Portfolio',
    icon: '🌐',
    description: 'A modern bento-grid portfolio built with Vue.js, NestJS, and Supabase.',
    status: 'Live',
    tags: ['Vue', 'NestJS', 'Supabase'],
  },
  {
    name: 'Task Manager',
    icon: '✅',
    description: 'Full-stack task management app with authentication and real-time updates.',
    status: 'Completed',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Weather App',
    icon: '🌤️',
    description: 'Real-time weather application with location services and beautiful UI.',
    status: 'Completed',
    tags: ['Vue', 'API', 'CSS'],
  },
  {
    name: 'E-Commerce Store',
    icon: '🛒',
    description: 'Online marketplace with cart, checkout, and payment integration.',
    status: 'In Progress',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
]
</script>
