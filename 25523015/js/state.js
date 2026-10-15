// js/state.js
import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 1;

// Objek keadaan tunggal (Single Source of Truth)
export const state = {
    kategoriAktif: "semua",
    daftarProyek: []
};

// Fungsi memuat data dari localStorage dengan penanganan jalan pulang
export function muat() {
    try {
        const isi = JSON.parse(localStorage.getItem(KUNCI));
        if (isi?.versi !== VERSI) {
            localStorage.removeItem(KUNCI); // Bentuk lama: buang
            return null;
        }
        return isi;
    } catch {
        localStorage.removeItem(KUNCI); // Isi rusak: buang
        return null;
    }
}

// Fungsi menyimpan keadaan ke localStorage
export function simpan() {
    const isi = {
        versi: VERSI,
        kategoriAktif: state.kategoriAktif
    };
    localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// SATU PINTU MASUK untuk mengubah kategori
export function pilihKategori(kategori) {
    state.kategoriAktif = kategori;
    simpan();      // Simpan pilihan terbaru
    render(state); // Gambar ulang tampilan berdasarkan state baru
}

// Fungsi Atur Ulang pilihan ke keadaan bawaan (Default)
export function aturUlangPilihan() {
    localStorage.removeItem(KUNCI);
    state.kategoriAktif = "semua";
    render(state);
}