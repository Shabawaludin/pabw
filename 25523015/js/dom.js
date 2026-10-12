// Memisahkan lapisan data. dom.js hanya memanggil api.js, BUKAN app.js
import { ambilProyek } from "./api.js";

// Pemilihan Elemen (Tetap sama)
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const formKontak = document.querySelector("#form-kontak");
const tombolKirim = formKontak.querySelector("button[type='submit']");

// Variabel global untuk menyimpan data hasil fetch agar bisa difilter
let dataProyekGlobal = [];

// Fungsi menyusun elemen anak (Tetap sama)
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
    time.textContent = proyek.tahun;

    const a = document.createElement("a");
    a.href = "#karya";
    a.textContent = proyek.selesai ? "Lihat Halaman" : "Proses...";

    divKaki.append(time, a);
    li.append(divIsi, divKaki);

    return li;
}

// Fungsi render untuk menampilkan hasil filter
function render(daftar) {
    wadah.textContent = "";

    if (daftar.length === 0) {
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;
    daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// Async/Await untuk menampilkan 4 keadaan antarmuka
async function tampilkanProyek() {
    wadah.textContent = "Memuat data proyek..."; // 1. KEADAAN MEMUAT
    pesanKosong.hidden = true;

    try {
        const daftar = await ambilProyek();
        dataProyekGlobal = daftar; // Simpan untuk filter

        if (daftar.length === 0) {
            wadah.textContent = "Belum ada proyek yang ditambahkan."; // 2. KEADAAN KOSONG
            return;
        }

        render(daftar); // 3. KEADAAN BERHASIL
    } catch (galat) {
        wadah.textContent = "Gagal memuat data: " + galat.message; // 4. KEADAAN GAGAL
    }
}

// Event Delegation untuk filter (Tetap sama, tapi pakai dataProyekGlobal)
function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    tandaiTombolAktif(tombol);

    const kategori = tombol.dataset.kategori;
    const terpilih = dataProyekGlobal.filter(
        (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
});

// Validasi Form Real-time (Tetap sama seperti P9)
function validasiForm() {
    let formSah = true;
    const nama = formKontak.querySelector("#nama");
    const email = formKontak.querySelector("#email");

    if (nama.value.trim() === "") {
        nama.setAttribute("aria-invalid", "true");
        nama.nextElementSibling.hidden = false;
        formSah = false;
    } else {
        nama.removeAttribute("aria-invalid");
        nama.nextElementSibling.hidden = true;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
        email.setAttribute("aria-invalid", "true");
        email.nextElementSibling.hidden = false;
        formSah = false;
    } else {
        email.removeAttribute("aria-invalid");
        email.nextElementSibling.hidden = true;
    }

    tombolKirim.disabled = !formSah;
    return formSah;
}

formKontak.addEventListener("input", validasiForm);
formKontak.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validasiForm()) {
        alert("Berhasil! Pesan Anda telah terkirim.");
        formKontak.reset();
        formKontak.querySelectorAll("input").forEach((i) => i.removeAttribute("aria-invalid"));
        formKontak.querySelectorAll(".pesan-galat").forEach((p) => p.hidden = true);
        tombolKirim.disabled = true;
    }
});

// Jalankan fetch saat halaman dimuat
tampilkanProyek();