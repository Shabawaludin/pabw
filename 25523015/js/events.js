// js/events.js
import { pilihKategori, aturUlangPilihan } from './state.js';
import { formKontak } from './dom.js';

export function pasangPendengar() {
    // Menggunakan Event Delegation: mendengarkan klik di seluruh dokumen
    document.addEventListener("click", (event) => {
        // Mencari elemen terdekat yang diklik (bisa <button> atau <a>)
        const tombol = event.target.closest("button, a");
        if (!tombol) return;

        // 1. Jika tombol Atur Ulang yang diklik
        if (tombol.id === "tombol-reset") {
            event.preventDefault();
            aturUlangPilihan();
            return;
        }

        // 2. Jika tombol filter kategori yang diklik
        const teks = tombol.textContent.trim().toLowerCase();
        const dataKat = (tombol.dataset.kategori || "").trim().toLowerCase();

        if (teks === "semua" || teks.includes("web") || teks.includes("ui") || teks.includes("ux") ||
            dataKat === "semua" || dataKat === "web" || dataKat === "ui" || dataKat === "ux") {

            event.preventDefault(); // Mencegah lompatan halaman karena tag a

            let kategori = "semua";
            const targetKat = dataKat || teks;

            if (targetKat.includes("web")) {
                kategori = "web";
            } else if (targetKat.includes("ui") || targetKat.includes("ux")) {
                kategori = "ui";
            } else {
                kategori = "semua";
            }

            pilihKategori(kategori);
        }
    });

    // Pendengar form kontak
    if (formKontak) {
        const tombolKirim = formKontak.querySelector("button[type='submit']");

        function validasiForm() {
            let formSah = true;
            const nama = formKontak.querySelector("#nama");
            const email = formKontak.querySelector("#email");

            if (nama && nama.value.trim() === "") {
                nama.setAttribute("aria-invalid", "true");
                if (nama.nextElementSibling) nama.nextElementSibling.hidden = false;
                formSah = false;
            } else if (nama) {
                nama.removeAttribute("aria-invalid");
                if (nama.nextElementSibling) nama.nextElementSibling.hidden = true;
            }

            if (email && (email.value.trim() === "" || !email.value.includes("@"))) {
                email.setAttribute("aria-invalid", "true");
                if (email.nextElementSibling) email.nextElementSibling.hidden = false;
                formSah = false;
            } else if (email) {
                email.removeAttribute("aria-invalid");
                if (email.nextElementSibling) email.nextElementSibling.hidden = true;
            }

            if (tombolKirim) tombolKirim.disabled = !formSah;
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
                if (tombolKirim) tombolKirim.disabled = true;
            }
        });
    }
}