<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>📬</span> Contact & Resources
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <a
        v-for="(link, i) in links"
        :key="i"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
        :class="isDark ? 'bg-dark-border hover:bg-dark-accent/10' : 'bg-sky-50 hover:bg-light-accent/10'"
      >
        <span class="text-xl">{{ link.icon }}</span>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium group-hover:underline">{{ link.label }}</p>
          <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-xs truncate">
            {{ link.value }}
          </p>
        </div>
        <span :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-sm">→</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({ isDark: Boolean })

const links = [
  { icon: '📧', label: 'Email', value: 'your.email@example.com', url: 'mailto:your.email@example.com' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/yourusername', url: 'https://github.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yourname', url: 'https://linkedin.com' },
  { icon: '📄', label: 'Resume', value: 'Download PDF', url: '#' },
]
</script>
