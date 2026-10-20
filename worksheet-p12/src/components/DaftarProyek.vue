<script setup>
import { computed } from 'vue'
import { state } from '../state.js'
import { formatTanggal } from '../data.js'

const proyekTampil = computed(() => {
  return state.daftarProyek.filter(proyek => {
    return state.kategoriAktif === 'semua' || proyek.kategori === state.kategoriAktif
  })
})
</script>

<template>
  <section id="karya">
    <h2>Karya saya</h2>
    <ul id="daftar" class="daftar">
      <li v-for="proyek in proyekTampil" :key="proyek.id" class="kartu">
        <div class="kartu_isi">
          <h3 class="kartu__judul">{{ proyek.judul }}</h3>
          <p>{{ proyek.deskripsi }}</p>
        </div>
        <div class="kartu_kaki">
          <time>{{ formatTanggal(proyek.tahun) }}</time>
          <a href="#karya">{{ proyek.selesai ? "Lihat Halaman" : "Proses..." }}</a>
        </div>
      </li>
    </ul>
    <p v-if="proyekTampil.length === 0" id="pesan-kosong">
      Belum ada proyek yang ditambahkan atau tidak ada di kategori ini.
    </p>
  </section>
</template>