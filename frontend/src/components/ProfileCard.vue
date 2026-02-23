<template>
  <div class="flex flex-col items-center text-center">
    <div
      class="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 transition-colors duration-300"
      :class="isDark ? 'border-dark-accent' : 'border-light-accent'"
    >
      <div
        class="w-full h-full flex items-center justify-center text-4xl font-bold"
        :class="isDark ? 'bg-dark-border text-dark-accent' : 'bg-sky-100 text-light-accent'"
      >
        👤
      </div>
    </div>
    <h2 class="text-xl font-bold mb-1">Nairb Ackillis Varona</h2>
    <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-sm">
      Full-Stack Developer
    </p>
    <div class="flex gap-2 mt-3">
      <span
        class="px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300"
        :class="isDark ? 'bg-dark-accent/20 text-dark-accent' : 'bg-light-accent/10 text-light-accent'"
      >
        Open for Challenges
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({ isDark: Boolean })
</script>
