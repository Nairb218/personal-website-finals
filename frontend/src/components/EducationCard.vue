<template>
  <div>
    <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
      <span>🎓</span> Education
    </h3>
    <div class="space-y-3">
      <div
        v-for="(edu, i) in education"
        :key="i"
        class="p-3 rounded-xl transition-colors duration-300"
        :class="isDark ? 'bg-dark-border' : 'bg-sky-50'"
      >
        <p class="text-sm font-semibold">{{ edu.school }}</p>
        <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-xs">{{ edu.degree }}</p>
        <p :class="isDark ? 'text-dark-accent' : 'text-light-accent'" class="text-xs font-medium mt-1">
          {{ edu.year }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ isDark: Boolean })

const education = [
  { school: 'Asia Pacific College', degree: 'B.S. Information Technology', year: '2024 – Present' },
  { school: 'Pasay City South High School', degree: 'HUMSS Strand', year: '2019 – 2024' },
  { school: 'Maricaban Elementary School', degree: 'Grade School', year: '2010 – 2016' },
]
</script>
