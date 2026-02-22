<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>📝</span> About Me
    </h3>
    <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-sm leading-relaxed">
      Hello! I'm a passionate full-stack developer who loves building modern web applications.
      I enjoy working with cutting-edge technologies and creating beautiful, functional user experiences.
      When I'm not coding, you can find me exploring new tech, contributing to open source, or learning
      something new every day.
    </p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300"
        :class="isDark ? 'bg-dark-highlight/20 text-dark-highlight' : 'bg-yellow-100 text-yellow-700'"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({ isDark: Boolean })

const tags = ['Creative', 'Problem Solver', 'Team Player', 'Fast Learner']
</script>
