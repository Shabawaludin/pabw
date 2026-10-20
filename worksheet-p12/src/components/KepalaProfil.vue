<script setup>
import { ref } from 'vue'

const props = defineProps({
  profil: { type: Object, required: true }
})

const isDark = ref(false)

function toggleTema() {
  isDark.value = !isDark.value
  // Menambah/menghapus kelas tema-gelap pada body
  document.body.classList.toggle('tema-gelap', isDark.value)
  document.body.classList.toggle('dark', isDark.value)
  document.documentElement.classList.toggle('tema-gelap', isDark.value)
  
  if (isDark.value) {
    document.body.setAttribute('data-tema', 'gelap')
  } else {
    document.body.removeAttribute('data-tema')
  }
}
</script>

<template>
  <header class="kepala">
    <a href="#" class="tombol-tema" @click.prevent="toggleTema">
      {{ isDark ? 'Tema terang' : 'Tema gelap' }}
    </a>
    <div class="kepala__baris">
      <h1 class="kepala__judul">{{ props.profil.nama }}</h1>
      <nav class="nav">
        <a href="#tentang">Tentang</a>
        <a href="#karya">Karya</a>
        <a href="#kontak">Kontak</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.kepala__baris {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.nav {
  display: flex;
  gap: 1.5rem;
}
</style>