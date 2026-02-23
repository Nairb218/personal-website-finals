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
        <div class="w-full h-full flex items-center justify-center">
          <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import antipsHand from '../assets/antipsHand.jpg'
import champs from '../assets/champs.jpg'
import keysnchrods25 from '../assets/keysnchrods\'25.jpg'
import kyoirb from '../assets/kyoirb.jpg'
import sabitPanyeng from '../assets/sabitPanyeng.jpg'
import trioGae from '../assets/trioGae.jpg'
import wRomeo from '../assets/wRomeo.jpg'

defineProps({ isDark: Boolean })

const gallery = [
  { src: antipsHand, alt: 'Antips Hand' },
  { src: keysnchrods25, alt: "Keysnchrods '25" },
  { src: kyoirb, alt: 'Kyoirb' },
  { src: sabitPanyeng, alt: 'Sabit Panyeng' },
  { src: trioGae, alt: 'Trio Gae' },
  { src: wRomeo, alt: 'W Romeo' },
]
</script>