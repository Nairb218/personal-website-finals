<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>🖼️</span> Gallery
    </h3>
    <div class="grid grid-cols-3 gap-2">
      <div
        v-for="(item, i) in gallery"
        :key="i"
        class="aspect-square rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
        :class="isDark ? 'bg-dark-border' : 'bg-sky-50'"
      >
        <div class="w-full h-full flex items-center justify-center text-3xl">
          {{ item.emoji }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ isDark: Boolean })

const gallery = [
  { emoji: '🌄' },
  { emoji: '🏙️' },
  { emoji: '🌊' },
  { emoji: '🌅' },
  { emoji: '🏔️' },
  { emoji: '🌺' },
]
</script>
