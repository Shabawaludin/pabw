// js/dom.js
import { formatTanggal } from './data.js';

// Pemilihan Elemen (Satu-satunya berkas yang boleh menyentuh halaman)
export const wadah = document.querySelector("#daftar");
export const pesanKosong = document.querySelector("#pesan-kosong") || document.createElement("p");
export const barisFilter = document.querySelector("#filter");
export const formKontak = document.querySelector("#form-kontak");
export const tombolReset = document.querySelector("#tombol-reset");

if (!document.querySelector("#pesan-kosong")) {
    pesanKosong.id = "pesan-kosong";
    wadah.parentElement.appendChild(pesanKosong);
}

function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";

    const divIsi = document.createElement("div");
    divIsi.className = "kartu_isi";

    const h3 = document.createElement("h3");
    h3.className = "kartu__judul";
    h3.textContent = proyek.judul;

    const pDeskripsi = document.createElement("p");
    pDeskripsi.textContent = proyek.deskripsi;

    divIsi.append(h3, pDeskripsi);

    const divKaki = document.createElement("div");
    divKaki.className = "kartu_kaki";

    const time = document.createElement("time");
    time.textContent = formatTanggal(proyek.tahun);

    const a = document.createElement("a");
    a.href = "#karya";
    a.textContent = proyek.selesai ? "Lihat Halaman" : "Proses...";

    divKaki.append(time, a);
    li.append(divIsi, divKaki);

    return li;
}

// Lembar C.2: Fungsi saring berdasarkan state
export function saring(state) {
    return state.daftarProyek.filter(
        (proyek) => state.kategoriAktif === "semua" || proyek.kategori === state.kategoriAktif
    );
}

// Render tampilan berpatokan penuh pada objek state
export function render(state) {
    wadah.textContent = "";

    // Tandai elemen filter yang sedang aktif (mendukung button dan tag a)
    if (barisFilter) {
        barisFilter.querySelectorAll("button:not(#tombol-reset), a").forEach((el) => {
            const kat = (el.dataset.kategori || el.textContent || "").trim().toLowerCase();
            const aktif = kat.includes(state.kategoriAktif);
            el.classList.toggle("aktif", aktif);
        });
    }

    const tampil = saring(state);

    if (tampil.length === 0) {
        pesanKosong.textContent = "Belum ada proyek yang ditambahkan atau tidak ada di kategori ini.";
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;
    tampil.forEach((proyek) => wadah.append(buatKartu(proyek)));
}
export function tampilkanMemuat() {
    wadah.textContent = "Memuat data proyek...";
    pesanKosong.hidden = true;
}

export function tampilkanGalat(pesan) {
    wadah.textContent = "Gagal memuat data: " + pesan;
}