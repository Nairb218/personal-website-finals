<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>♫</span> Now Playing
    </h3>

    <!-- Now Playing -->
    <div class="flex items-center gap-3">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl cursor-pointer select-none transition-transform duration-150 active:scale-90"
        :class="isDark ? 'bg-dark-border' : 'bg-sky-50'"
        @click="togglePlay"
      >
        <span v-if="isPlaying">❚❚</span>
        <span v-else>▶</span>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium truncate">{{ currentSong.title }}</p>
        <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-xs truncate">
          {{ currentSong.artist }}
        </p>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="mt-3">
      <div
        class="w-full h-1 rounded-full overflow-hidden cursor-pointer"
        :class="isDark ? 'bg-dark-border' : 'bg-gray-200'"
        @click="seek($event)"
        ref="progressBar"
      >
        <div
          class="h-full rounded-full transition-all duration-200"
          :class="isDark ? 'bg-dark-accent' : 'bg-light-accent'"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
      <div class="flex justify-between mt-1" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
        <span class="text-xs">{{ formatTime(currentTime) }}</span>
        <span class="text-xs">{{ formatTime(duration) }}</span>
      </div>
    </div>

    <!-- Volume -->
    <div class="mt-2 flex items-center gap-2">
      <span class="text-xs cursor-pointer select-none" @click="toggleMute">{{ volume === 0 ? '🔇' : '🔊' }}</span>
      <input
        type="range"
        min="0"
        max="100"
        :value="volume"
        @input="setVolume(Number($event.target.value))"
        class="w-full h-1 accent-sky-500 cursor-pointer"
      />
    </div>

    <!-- Playlist -->
    <div class="mt-3 space-y-2">
      <div
        v-for="(song, i) in playlist"
        :key="i"
        class="flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 cursor-pointer"
        :class="[
          isDark ? 'hover:bg-dark-border' : 'hover:bg-sky-50',
          currentIndex === i ? (isDark ? 'bg-dark-border' : 'bg-sky-50') : ''
        ]"
        @click="playSong(i)"
      >
        <span class="text-xs w-4 text-center" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
          <span v-if="currentIndex === i && isPlaying">♫</span>
          <span v-else>{{ i + 1 }}</span>
        </span>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-medium truncate">{{ song.title }}</p>
          <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-xs truncate">{{ song.artist }}</p>
        </div>
      </div>
    </div>

    <!-- Hidden YouTube Player -->
    <div ref="ytContainer" style="position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;">
      <div id="yt-player"></div>
    </div>
  </div>
</template>

<script setup>
import laufeyIcon from '@/assets/laufey.png'
import ivosIcon from '@/assets/ivosAndalucia.jpg'
import colnIcon from '@/assets/lasonColn.jpg'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

defineProps({ isDark: Boolean })

const playlist = [
  { icon: laufeyIcon, title: 'Serendipity', artist: 'Laufey', videoId: 'WIj7VVFpvCs' },
  { icon: ivosIcon, title: 'Karma', artist: 'IV of Spades', videoId: 't9IKlvreloo' },
  { icon: colnIcon, title: 'Lason', artist: 'COLN', videoId: 'JRtJXGoVIoA' },
]

const currentIndex = ref(0)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(80)
const progressBar = ref(null)

let player = null
let progressInterval = null

const currentSong = computed(() => playlist[currentIndex.value])
const progressPercent = computed(() => (duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0))

function formatTime(seconds) {
  const s = Math.floor(seconds)
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${sec.toString().padStart(2, '0')}`
}

function loadYTApi() {
  return new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve()
      return
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)
    window.onYouTubeIframeAPIReady = () => resolve()
  })
}

function initPlayer(videoId) {
  return new Promise((resolve) => {
    player = new window.YT.Player('yt-player', {
      height: '1',
      width: '1',
      videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: (e) => {
          e.target.setVolume(volume.value)
          resolve()
        },
        onStateChange: (e) => {
          if (e.data === window.YT.PlayerState.ENDED) {
            playNext()
          }
          if (e.data === window.YT.PlayerState.PLAYING) {
            duration.value = player.getDuration()
          }
        },
      },
    })
  })
}

function startProgressTracking() {
  stopProgressTracking()
  progressInterval = setInterval(() => {
    if (player && typeof player.getCurrentTime === 'function') {
      currentTime.value = player.getCurrentTime()
      if (duration.value === 0 && typeof player.getDuration === 'function') {
        duration.value = player.getDuration()
      }
    }
  }, 250)
}

function stopProgressTracking() {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
}

async function playSong(index) {
  currentIndex.value = index
  currentTime.value = 0
  duration.value = 0

  if (!player) {
    await loadYTApi()
    await initPlayer(playlist[index].videoId)
  } else {
    player.loadVideoById(playlist[index].videoId)
  }

  player.setVolume(volume.value)
  player.playVideo()
  isPlaying.value = true
  startProgressTracking()
}

function togglePlay() {
  if (!player) {
    playSong(currentIndex.value)
    return
  }
  if (isPlaying.value) {
    player.pauseVideo()
    isPlaying.value = false
    stopProgressTracking()
  } else {
    player.playVideo()
    isPlaying.value = true
    startProgressTracking()
  }
}

function playNext() {
  const next = (currentIndex.value + 1) % playlist.length
  playSong(next)
}

function seek(event) {
  if (!player || !progressBar.value) return
  const rect = progressBar.value.getBoundingClientRect()
  const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
  player.seekTo(ratio * duration.value, true)
  currentTime.value = ratio * duration.value
}

function setVolume(val) {
  volume.value = val
  if (player && typeof player.setVolume === 'function') {
    player.setVolume(val)
  }
}

let prevVolume = 80
function toggleMute() {
  if (volume.value > 0) {
    prevVolume = volume.value
    setVolume(0)
  } else {
    setVolume(prevVolume)
  }
}

onMounted(() => {
  // Pre-load YT API so first click is faster
  loadYTApi()
})

onBeforeUnmount(() => {
  stopProgressTracking()
  if (player && typeof player.destroy === 'function') {
    player.destroy()
  }
})
</script>
