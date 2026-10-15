// js/app.js
import { ambilProyek } from './api.js';
import { state, muat } from './state.js';
import { render, tampilkanMemuat, tampilkanGalat } from './dom.js';
import { pasangPendengar } from './events.js';

async function jalankanAplikasi() {
    // 1. Pasang pendengar klik dan form
    pasangPendengar();

    // 2. Beri indikator sedang memuat
    tampilkanMemuat();

    try {
        // 3. Ambil data mentah dari jaringan, masukkan ke state
        const dataApi = await ambilProyek();
        state.daftarProyek = dataApi;

        // 4. Periksa apakah browser masih ingat pilihan sebelumnya
        const memori = muat();
        if (memori) {
            state.kategoriAktif = memori.kategoriAktif;
        } else {
            state.kategoriAktif = "semua"; // Nilai bawaan jika kosong/rusak
        }

        // 5. Gambar ulang halaman dengan state yang final
        render(state);

    } catch (galat) {
        tampilkanGalat(galat.message);
    }
}

// Menjalankan rakitan modul
jalankanAplikasi();