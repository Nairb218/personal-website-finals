<template>
  <div>
    <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
      <span></span> Interests
    </h3>
    <div class="flex flex-wrap gap-1.5">
      <span
        v-for="(interest, i) in interests"
        :key="i"
        class="px-3 py-1.5 rounded-xl text-[13px] font-medium transition-all duration-300 cursor-default hover:scale-105"
        :class="isDark
          ? 'bg-dark-border hover:bg-dark-accent/20 hover:text-dark-accent'
          : 'bg-sky-50 hover:bg-light-accent/10 hover:text-light-accent'"
      >
        {{ interest }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({ isDark: Boolean })

const interests = [
  '🎮 Gaming',
  '📚 Reading',
  '🎵 Music',
  '🏋️ Fitness',
  '𖣐 Anime',
  '🍳 Cooking',
  '💻 Programming',
  '🐶 Dogs ',
  '🐱 Cats '
]
</script>