<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>♫</span> Now Playing
    </h3>
    <div class="flex items-center gap-3">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        :class="isDark ? 'bg-dark-border' : 'bg-sky-50'"
      >
        🎧
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium truncate">Favorite Song Title</p>
        <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-xs truncate">
          Artist Name
        </p>
      </div>
    </div>
    <div class="mt-3">
      <div class="w-full h-1 rounded-full overflow-hidden" :class="isDark ? 'bg-dark-border' : 'bg-gray-200'">
        <div
          class="h-full rounded-full w-2/3 transition-all duration-300"
          :class="isDark ? 'bg-dark-accent' : 'bg-light-accent'"
        ></div>
      </div>
      <div class="flex justify-between mt-1" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
        <span class="text-xs">2:34</span>
        <span class="text-xs">3:45</span>
      </div>
    </div>
    <div class="mt-3 space-y-2">
      <div
        v-for="(song, i) in playlist"
        :key="i"
        class="flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 cursor-pointer"
        :class="isDark ? 'hover:bg-dark-border' : 'hover:bg-sky-50'"
      >
        <span class="text-xs" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">{{ i + 1 }}</span>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-medium truncate">{{ song.title }}</p>
          <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-xs truncate">{{ song.artist }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ isDark: Boolean })

const playlist = [
  { title: 'Blinding Lights', artist: 'The Weeknd' },
  { title: 'Levitating', artist: 'Dua Lipa' },
  { title: 'Starboy', artist: 'The Weeknd' },
]
</script>
