<template>
  <div :class="{ dark: isDark }" class="min-h-screen transition-colors duration-300">
    <div
      class="min-h-screen px-4 py-8 md:px-8 lg:px-16"
      :class="isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'"
    >
      <!-- Header -->
      <header class="max-w-7xl mx-auto flex items-center justify-between mb-8">
        <h1 class="text-2xl font-bold tracking-tight">
          <span :class="isDark ? 'text-dark-accent' : 'text-light-accent'">My</span>Portfolio
        </h1>
        <button
          @click="toggleTheme"
          class="p-3 rounded-2xl transition-all duration-300 hover:scale-110"
          :class="isDark
            ? 'bg-dark-card border border-dark-border text-yellow-400 hover:bg-dark-border'
            : 'bg-light-card border border-light-border text-gray-700 hover:bg-gray-100'"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <span class="text-xl">{{ isDark ? '☀️' : '🌑' }}</span>
        </button>
      </header>

      <!-- Bento Grid -->
      <main class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-auto">
        <!-- Profile Photo - spans 1 col -->
        <BentoCard :isDark="isDark" class="lg:col-span-1 md:col-span-1">
          <ProfileCard :isDark="isDark" />
        </BentoCard>

        <!-- About Me - spans 2 cols -->
        <BentoCard :isDark="isDark" class="lg:col-span-2 md:col-span-1">
          <AboutCard :isDark="isDark" />
        </BentoCard>

        <!-- Music - 1 col -->
        <BentoCard :isDark="isDark" class="lg:col-span-1 md:col-span-1">
          <MusicCard :isDark="isDark" />
        </BentoCard>

        <!-- Gallery - spans 2 cols -->
        <BentoCard :isDark="isDark" class="lg:col-span-2 md:col-span-1">
          <GalleryCard :isDark="isDark" />
        </BentoCard>

        <!-- Education - 1 col -->
        <BentoCard :isDark="isDark" class="lg:col-span-1 md:col-span-1">
          <EducationCard :isDark="isDark" />
        </BentoCard>

        <!-- Interests - 1 col -->
        <BentoCard :isDark="isDark" class="lg:col-span-1 md:col-span-1">
          <InterestsCard :isDark="isDark" />
        </BentoCard>

        <!-- Tech Stack - spans 2 cols -->
        <BentoCard :isDark="isDark" class="lg:col-span-2 md:col-span-2">
          <TechStackCard :isDark="isDark" />
        </BentoCard>

        <!-- Projects - spans 2 cols -->
        <BentoCard :isDark="isDark" class="lg:col-span-2 md:col-span-2">
          <ProjectsCard :isDark="isDark" />
        </BentoCard>

        <!-- Contact - spans 2 cols -->
        <BentoCard :isDark="isDark" class="lg:col-span-2 md:col-span-1">
          <ContactCard :isDark="isDark" />
        </BentoCard>

        <!-- Guestbook - spans 2 cols -->
        <BentoCard :isDark="isDark" class="lg:col-span-2 md:col-span-1">
          <GuestbookCard :isDark="isDark" />
        </BentoCard>
      </main>

      <!-- Footer -->
      <footer class="max-w-7xl mx-auto mt-8 text-center text-sm" :class="isDark ? 'text-dark-muted' : 'text-light-muted'">
        <p>&copy; 2026 MyPortfolio. Built with Vue.js + NestJS + Supabase</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BentoCard from './components/BentoCard.vue'
import ProfileCard from './components/ProfileCard.vue'
import AboutCard from './components/AboutCard.vue'
import MusicCard from './components/MusicCard.vue'
import GalleryCard from './components/GalleryCard.vue'
import EducationCard from './components/EducationCard.vue'
import InterestsCard from './components/InterestsCard.vue'
import TechStackCard from './components/TechStackCard.vue'
import ProjectsCard from './components/ProjectsCard.vue'
import ContactCard from './components/ContactCard.vue'
import GuestbookCard from './components/GuestbookCard.vue'

const isDark = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  }
})

function toggleTheme() {
  document.documentElement.classList.add('theme-transition')
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transition')
  }, 300)
}
</script>
