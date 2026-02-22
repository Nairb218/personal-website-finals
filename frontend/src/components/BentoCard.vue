<template>
  <div
    class="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 h-full"
    :class="isDark
      ? 'bg-dark-card border border-dark-border shadow-bento-dark hover:shadow-xl hover:border-dark-accent/30'
      : 'bg-light-card border border-light-border shadow-bento hover:shadow-bento-hover hover:border-light-accent/30'"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  isDark: Boolean,
})
</script>
