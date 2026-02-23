<template>
  <div>
    <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
      <span></span> Education
    </h3>
    <div class="space-y-2">
      <div
        v-for="(edu, i) in education"
        :key="i"
        class="p-2.5 rounded-xl transition-colors duration-300"
        :class="isDark ? 'bg-dark-border' : 'bg-sky-50'"
      >
        <p class="text-[13px] font-semibold leading-tight">{{ edu.school }}</p>
        <p :class="isDark ? 'text-dark-muted' : 'text-light-muted'" class="text-[11px] leading-tight mt-0.5">{{ edu.degree }}</p>
        <p :class="isDark ? 'text-dark-accent' : 'text-light-accent'" class="text-[11px] font-medium mt-0.5">
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