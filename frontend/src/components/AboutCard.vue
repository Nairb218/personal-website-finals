<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span></span> About Me
    </h3>
    <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-sm leading-relaxed">
      Hi! My name is Nairb, a 2nd year BSIT student at Asia Pacific College. I'm an aspiring full stack developer who's hungry to improve and learn new things. I have a passion for creating web applications and exploring new technologies. When I'm not coding, you can find me playing my guitar, composing songs that I want to release soon, or jamming with friends. I als love paying online games—especially mobile games.I'm always open to new challenges and opportunities to grow both personally and professionally.
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

const tags = ['Developer', 'Musician', 'Team Player', 'Fast Learner', 'Problem Solver']
</script>
