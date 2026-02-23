<template>
  <div>
    <!-- Header -->
    <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
      <span>🏞️</span> Gallery
      <button
        @click="showModal = true"
        class="ml-auto text-xs font-medium underline underline-offset-2 transition-colors duration-200"
        :class="isDark ? 'text-dark-accent hover:text-white' : 'text-light-accent hover:text-black'"
      >
        View All
      </button>
    </h3>

    <!-- Grid Preview: strict 3 cols × 2 rows, first 6 only -->
    <div class="grid grid-cols-3 gap-1.5">
      <div
        v-for="(item, i) in previewGallery"
        :key="i"
        class="aspect-square rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
        :class="isDark ? 'bg-dark-border' : 'bg-sky-50'"
        @click="openPhoto(item)"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <!-- View All Modal -->
    <Teleport to="body">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center"
        style="background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);"
        @click.self="showModal = false"
      >
        <div
          class="relative rounded-2xl p-4 w-[90vw] max-w-lg max-h-[80vh] overflow-y-auto"
          :class="isDark ? 'bg-dark-border' : 'bg-white'"
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-base font-semibold flex items-center gap-2">
              <span>🏞️</span> Gallery
            </h3>
            <button
              @click="showModal = false"
              class="text-lg font-bold leading-none transition-opacity hover:opacity-60"
            >
              ✕
            </button>
          </div>

          <!-- Modal Grid -->
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="(item, i) in gallery"
              :key="i"
              class="aspect-square rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
              :class="isDark ? 'bg-dark-bg' : 'bg-sky-50'"
              @click="openPhoto(item)"
            >
              <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Fullscreen Photo Modal -->
    <Teleport to="body">
      <div
        v-if="selectedPhoto"
        class="fixed inset-0 z-[60] flex items-center justify-center"
        style="background: rgba(0,0,0,0.85); backdrop-filter: blur(6px);"
        @click.self="selectedPhoto = null"
      >
        <div class="relative max-w-[90vw] max-h-[90vh]">
          <!-- Close Button -->
          <button
            @click="selectedPhoto = null"
            class="absolute -top-8 right-0 text-white text-lg font-bold hover:opacity-60 transition-opacity"
          >
            ✕
          </button>

          <!-- Left Arrow -->
          <button
            @click="prevPhoto"
            class="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 text-white text-2xl font-bold hover:opacity-60 transition-opacity"
          >
            ‹
          </button>

          <!-- Photo -->
          <img
            :src="selectedPhoto.src"
            :alt="selected.alt"
            class="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain shadow-2xl"
          />

          <!-- Right Arrow -->
          <button
            @click="nextPhoto"
            class="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 text-white text-2xl font-bold hover:opacity-60 transition-opacity"
          >
            ›
          </button>

          <!-- Caption -->
          <p class="text-center text-white text-xs mt-2 opacity-70">{{ selectedPhoto.alt }}</p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import antipsHand from '../assets/antipsHand.jpg'
import champs from '../assets/champs.jpg'
import keysnchrods25 from "../assets/keysnchrods'25.jpg"
import kyoirb from '../assets/kyoirb.jpg'
import sabitPanyeng from '../assets/sabitPanyeng.jpg'
import trioGae from '../assets/trioGae.jpg'
import wRomeo from '../assets/wRomeo.jpg'
import saintNairb from '../assets/saintNairb.jpg'
import hearts4 from '../assets/hearts4.jpg'
import lugawanbabies from '../assets/lugawanbabies.jpg'
import lugawanmat from '../assets/lugawanmat.jpg'
import anghelNairb from '../assets/anghelNairb.jpg'
import bgcSad from '../assets/bgcSadboi.jpg'
import intra from '../assets/intraa.jpg'
import intra2 from '../assets/intraparin.jpg'
import meinheart from '../assets/meinheart.jpg'
import nyipieo from '../assets/nyipieo.jpg'
import questionMark from '../assets/questionMark.jpg'
import sleepingTrio from '../assets/sleepingTrio.jpg'
import trio from '../assets/trio.jpg'
import mamaNitay from '../assets/mamaNitay.jpg'
import wItay from '../assets/w Itay.jpg'
import varonafam from '../assets/varonafam.jpg'
import tatlongGwapo from '../assets/tatlong gwapo.jpg'

defineProps({ isDark: Boolean })

const showModal = ref(false)
const selectedPhoto = ref(null)

const gallery = [
  { src: hearts4, alt: 'Hearts 4' },
  { src: saintNairb, alt: 'Saint Nairb' },
  { src: mamaNitay, alt: 'Mama Nitay' },
  { src: wItay, alt: 'w Itay' },
  { src: anghelNairb, alt: 'Angel Nairb' },
  { src: bgcSad, alt: 'BGC Sadboi' },
  { src: intra, alt: 'Intra' },
  { src: intra2, alt: 'Intra pa rin' },
  { src: meinheart, alt: 'Meinheart' },
  { src: nyipieo, alt: 'Nyipieo' },
  { src: questionMark, alt: '?' },
  { src: tatlongGwapo, alt: 'Tatlong gwapo' },
  { src: varonafam, alt: 'Varonafam' },
  { src: sleepingTrio, alt: 'My Trio' },
  { src: trio, alt: 'Trio uli' },
  { src: antipsHand, alt: 'Antips' },
  { src: champs, alt: 'Champs' },
  { src: keysnchrods25, alt: "Keysnchrods '25" },
  { src: kyoirb, alt: 'w Kyo' },
  { src: sabitPanyeng, alt: 'Sabit Panyeng' },
  { src: trioGae, alt: 'Trio Gae' },
  { src: wRomeo, alt: 'w Leo' },
  { src: lugawanbabies, alt: 'Lugawan Babies' },
  { src: lugawanmat, alt: 'Lugawan sa Debut ni Namih' },
]

const previewGallery = computed(() => gallery.slice(0, 6))

function openPhoto(item) {
  selectedPhoto.value = item
}

function prevPhoto() {
  const index = gallery.indexOf(selectedPhoto.value)
  selectedPhoto.value = gallery[(index - 1 + gallery.length) % gallery.length]
}

function nextPhoto() {
  const index = gallery.indexOf(selectedPhoto.value)
  selectedPhoto.value = gallery[(index + 1) % gallery.length]
}
</script>