<template>
  <div>
    <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
      <span>📖</span> Guestbook
    </h3>

    <!-- Form -->
    <form @submit.prevent="submitEntry" class="mb-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <!-- Name -->
        <div>
          <label class="block text-xs font-medium mb-1" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
            Name *
          </label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            maxlength="50"
            class="w-full px-3 py-2 rounded-xl text-sm outline-none transition-all duration-300 border"
            :class="isDark
              ? 'bg-dark-border border-dark-border text-dark-text placeholder-dark-muted focus:border-dark-accent'
              : 'bg-sky-50 border-light-border text-light-text placeholder-light-muted focus:border-light-accent'"
          />
        </div>

        <!-- Visibility -->
        <div>
          <label class="block text-xs font-medium mb-1" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
            Visibility *
          </label>
          <div class="flex gap-2">
            <button
              type="button"
              @click="form.visibility = 'public'"
              class="flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 border"
              :class="form.visibility === 'public'
                ? (isDark ? 'bg-dark-accent/20 border-dark-accent text-dark-accent' : 'bg-light-accent/10 border-light-accent text-light-accent')
                : (isDark ? 'bg-dark-border border-dark-border text-dark-muted' : 'bg-sky-50 border-light-border text-light-muted')"
            >
              🌎 Public
            </button>
            <button
              type="button"
              @click="form.visibility = 'private'"
              class="flex-1 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 border"
              :class="form.visibility === 'private'
                ? (isDark ? 'bg-dark-highlight/20 border-dark-highlight text-dark-highlight' : 'bg-yellow-100 border-yellow-400 text-yellow-700')
                : (isDark ? 'bg-dark-border border-dark-border text-dark-muted' : 'bg-sky-50 border-light-border text-light-muted')"
            >
              🔒 Private
            </button>
          </div>
        </div>
      </div>

      <!-- Message -->
      <div class="mb-3">
        <label class="block text-xs font-medium mb-1" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
          Message *
        </label>
        <textarea
          v-model="form.message"
          placeholder="Leave a message..."
          rows="3"
          maxlength="500"
          class="w-full px-3 py-2 rounded-xl text-sm outline-none transition-all duration-300 border resize-none"
          :class="isDark
            ? 'bg-dark-border border-dark-border text-dark-text placeholder-dark-muted focus:border-dark-accent'
            : 'bg-sky-50 border-light-border text-light-text placeholder-light-muted focus:border-light-accent'"
        ></textarea>
        <div class="text-right mt-1">
          <span class="text-xs" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
            {{ form.message.length }}/500
          </span>
        </div>
      </div>

      <!-- Info about private messages -->
      <div
        v-if="form.visibility === 'private'"
        class="mb-3 p-3 rounded-xl text-xs flex items-center gap-2"
        :class="isDark ? 'bg-dark-highlight/10 text-dark-highlight' : 'bg-yellow-50 text-yellow-700'"
      >
        🔒 Private messages are stored securely but won't be displayed publicly.
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="isSubmitting || !isFormValid"
        class="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        :class="isDark
          ? 'bg-dark-accent text-dark-bg hover:bg-dark-accent/80'
          : 'bg-light-accent text-white hover:bg-light-accent/80'"
      >
        <span v-if="isSubmitting" class="flex items-center gap-2">
          <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Sending...
        </span>
        <span v-else>Sign Guestbook 𓂃🖊</span>
      </button>

      <!-- Status Messages -->
      <div v-if="statusMessage" class="mt-3">
        <p
          class="text-sm p-3 rounded-xl"
          :class="statusType === 'success'
            ? (isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700')
            : (isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-700')"
        >
          {{ statusMessage }}
        </p>
      </div>
    </form>

    <!-- Entries -->
    <div>
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-sm font-semibold" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
          Public Messages ({{ entries.length }})
        </h4>
        <button
          @click="fetchEntries"
          :disabled="isLoading"
          class="text-xs px-3 py-1 rounded-lg transition-colors duration-300"
          :class="isDark ? 'text-dark-accent hover:bg-dark-border' : 'text-light-accent hover:bg-sky-100'"
        >
          {{ isLoading ? 'Loading...' : '↻ Refresh' }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="space-y-3">
        <div
          v-for="n in 3"
          :key="n"
          class="p-4 rounded-xl animate-pulse"
          :class="isDark ? 'bg-dark-border' : 'bg-sky-50'"
        >
          <div class="h-4 rounded w-1/4 mb-2" :class="isDark ? 'bg-dark-bg' : 'bg-gray-200'"></div>
          <div class="h-3 rounded w-3/4" :class="isDark ? 'bg-dark-bg' : 'bg-gray-200'"></div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-else-if="entries.length === 0"
        class="text-center py-8"
        :class="isDark ? 'text-dark-muted' : 'text-light-muted'"
      >
        <p class="text-3xl mb-2">📝</p>
        <p class="text-sm">No public messages yet. Be the first to sign!</p>
      </div>

      <!-- Entries List -->
      <div v-else class="space-y-3 max-h-96 overflow-y-auto pr-1">
        <div
          v-for="entry in entries"
          :key="entry.id"
          class="p-4 rounded-xl transition-colors duration-300"
          :class="isDark ? 'bg-dark-border' : 'bg-sky-50'"
        >
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                :class="isDark ? 'bg-dark-accent/20 text-dark-accent' : 'bg-light-accent/10 text-light-accent'"
              >
                {{ getInitials(entry.name) }}
              </div>
              <span class="text-sm font-semibold">{{ entry.name }}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs" :class="isDark ? 'text-dark-accent' : 'text-light-accent'">🔓</span>
              <span class="text-xs" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
                {{ formatDate(entry.created_at) }}
              </span>
            </div>
          </div>
          <p class="text-sm" :class="isDark ? 'text-dark-text' : 'text-light-text'">
            {{ entry.message }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const props = defineProps({ isDark: Boolean })

// API base URL - change to your deployed backend URL in production
const API_BASE = import.meta.env.VITE_API_URL || '/api'

const form = ref({
  name: '',
  message: '',
  visibility: 'public',
})

const entries = ref([])
const isLoading = ref(false)
const isSubmitting = ref(false)
const statusMessage = ref('')
const statusType = ref('')

const isFormValid = computed(() => {
  return form.value.name.trim().length >= 2 && form.value.message.trim().length >= 3
})

async function fetchEntries() {
  isLoading.value = true
  try {
    const response = await axios.get(`${API_BASE}/guestbook`)
    entries.value = response.data.data || []
  } catch (error) {
    console.error('Failed to fetch entries:', error)
    entries.value = []
  } finally {
    isLoading.value = false
  }
}

async function submitEntry() {
  if (!isFormValid.value || isSubmitting.value) return

  isSubmitting.value = true
  statusMessage.value = ''

  try {
    await axios.post(`${API_BASE}/guestbook`, {
      name: form.value.name.trim(),
      message: form.value.message.trim(),
      visibility: form.value.visibility,
    })

    statusType.value = 'success'
    if (form.value.visibility === 'private') {
      statusMessage.value = '🔒 Your private message has been saved securely!'
    } else {
      statusMessage.value = '✅ Your message has been posted!'
    }

    // Reset form
    form.value = { name: '', message: '', visibility: 'public' }

    // Refresh public entries
    await fetchEntries()
  } catch (error) {
    statusType.value = 'error'
    if (error.response?.data?.message) {
      const msg = error.response.data.message
      statusMessage.value = Array.isArray(msg) ? msg.join(', ') : msg
    } else {
      statusMessage.value = '❌ Failed to submit. Please try again.'
    }
  } finally {
    isSubmitting.value = false
    setTimeout(() => {
      statusMessage.value = ''
    }, 5000)
  }
}

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

onMounted(() => {
  fetchEntries()
})
</script>
