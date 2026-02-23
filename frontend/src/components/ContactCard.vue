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
        <img v-if="link.isImage" :src="link.icon" :alt="link.label" class="w-6 h-6 object-contain" />
        <span v-else class="text-xl">{{ link.icon }}</span>

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
import emailIcon from '@/logos/Outlook.com-Logo.wine.svg'
import githubIcon from '@/logos/GitHub-logo.png'
import linkedinIcon from '@/logos/linkedin-logo.webp'

defineProps({ isDark: Boolean })

const links = [
  { icon: emailIcon, isImage: true, label: 'Email', value: 'ngvarona@student.apc.edu.ph', url: 'https://myaccount.microsoft.com/?ref=MeControl' },
  { icon: githubIcon, isImage: true, label: 'GitHub', value: 'github.com/Nairb218', url: 'https://github.com/Nairb218' },
  { icon: linkedinIcon, isImage: true, label: 'LinkedIn', value: 'linkedin.com/in/nairb-ackillis-varona', url: 'https://www.linkedin.com/in/nairb-ackillis-varona-83b184322/' },
  { icon: '📞', isImage: false, label: 'Phone No.', value: '0950 801 3908' },
]
</script>