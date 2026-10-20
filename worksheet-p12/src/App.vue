<script setup>
import { onMounted, watch } from 'vue'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const identitas = {
  nama: 'Sihab Awaludin',
  peran: 'Mahasiswa Informatika'
}

onMounted(() => {
  const isi = muat()
  if (isi) state.kategoriAktif = isi.kategoriAktif
})

watch(state, (nilai) => simpan(nilai), { deep: true })

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="identitas" />

    <div class="isi">
      <!-- Side Bar Foto & Deskripsi Singkat -->
      <aside class="sisi">
        <img src="/media/foto-profil.JPG" alt="Foto Sihab Awaludin" class="sisi__foto" />
        <p>
          Mahasiswa Informatika yang sedang belajar membangun web, khususnya UI/UX dan Design Token.
        </p>
      </aside>

      <!-- Konten Utama -->
      <main class="utama">
        <!-- Seksi Tentang Saya -->
        <section id="tentang">
          <h2>Tentang saya</h2>
          <p>
            Saya mahasiswa Program Studi Informatika Universitas Islam Indonesia. Saya tertarik pada pengembangan web, khususnya bagian tampilan, karena di sana keputusan teknis langsung terlihat hasilnya.
          </p>

          <p>Kegiatan yang saya ikuti semester ini</p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Kegiatan</th>
                  <th>Peran</th>
                  <th>Waktu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Praktikum PABW</td>
                  <td>Peserta</td>
                  <td>September 2026</td>
                </tr>
                <tr>
                  <td>Kelas Terbuka Kampus</td>
                  <td>Peserta</td>
                  <td>Oktober 2026</td>
                </tr>
                <tr>
                  <td>Organisasi kemahasiswaan</td>
                  <td>Anggota</td>
                  <td>2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Seksi Karya & Filter -->
        <section id="karya">
          <TombolFilter />
          <button id="tombol-reset" @click="aturUlangPilihan">Atur Ulang Pilihan</button>
          <DaftarProyek />
        </section>

        <!-- Seksi Peta Keterampilan -->
        <section id="keterampilan">
          <h2>Peta Keterampilan</h2>
          <h3>CSS Arsitektur</h3>
          <p>Design token, flexbox, grid layout, fluid typography.</p>

          <h3>Version Control (Git)</h3>
          <p>Resolusi konflik, manajemen branch, GitHub PR.</p>
        </section>

        <!-- Seksi Tanya Jawab -->
        <section id="tanya-jawab">
          <h2>Tanya Jawab</h2>
          <details>
            <summary>Fokus utama semester ini?</summary>
            <p>Memahami konsep dasar pengembangan aplikasi berbasis web modern dan komponen.</p>
          </details>
        </section>

        <!-- Seksi Kontak -->
        <FormKontak />
      </main>
    </div>

    <!-- Footer -->
    <footer class="kaki">
      <p>Sihab Awaludin - 25523015 - <time datetime="2026">2026</time></p>
    </footer>
  </div>
</template>