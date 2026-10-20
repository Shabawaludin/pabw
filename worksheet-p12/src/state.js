// src/state.js
import { reactive } from 'vue'

export const state = reactive({
    kategoriAktif: 'semua',
    daftarProyek: [
        {
            id: 1,
            judul: "Halaman Profil Pribadi",
            tahun: "Sep 2026",
            selesai: true,
            kategori: "web",
            deskripsi: "Membangun Halaman Profil Pribadi – PABW 2026 dengan CSS modern."
        },
        {
            id: 2,
            judul: "Halaman Kelas Terbuka Kampus",
            tahun: "Ags 2026",
            selesai: true,
            kategori: "web",
            deskripsi: "Praktikum P03, HTML semantik dan form dengan lolos audit W3C."
        },
        {
            id: 3,
            judul: "Desain Antarmuka Aplikasi Kasir",
            tahun: "Jul 2026",
            selesai: false,
            kategori: "ui",
            deskripsi: "Eksplorasi UI/UX."
        }
    ]
})

export function pilihKategori(nilai) {
    state.kategoriAktif = nilai
}