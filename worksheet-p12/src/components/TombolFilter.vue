<script setup>
import { state, pilihKategori } from '../state.js'
</script>

<template>
  <div id="filter" class="filter">
    <button 
      :class="{ aktif: state.kategoriAktif === 'semua' }" 
      @click="pilihKategori('semua')"
    >
      Semua
    </button>
    <button 
      :class="{ aktif: state.kategoriAktif === 'web' }" 
      @click="pilihKategori('web')"
    >
      Web
    </button>
    <button 
      :class="{ aktif: state.kategoriAktif === 'ui' }" 
      @click="pilihKategori('ui')"
    >
      UI/UX
    </button>
  </div>
</template>