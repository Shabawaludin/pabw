<script setup>
import { ref } from 'vue'

const nama = ref('')
const email = ref('')

function kirimPesan() {
  alert('Berhasil! Pesan Anda telah terkirim.')
  nama.value = ''
  email.value = ''
}
</script>

<template>
  <section id="kontak">
    <h2>Hubungi saya</h2>
    <form id="form-kontak" @submit.prevent="kirimPesan">
      <div>
        <label for="nama">Nama lengkap</label>
        <input id="nama" v-model="nama" type="text" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <button type="submit" :disabled="!nama || !email">Kirim pesan</button>
    </form>
  </section>
</template>