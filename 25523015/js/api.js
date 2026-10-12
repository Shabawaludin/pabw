// js/api.js
const ALAMAT = 'proyek.json'; // JSON lokal sebagai simulasi API

// async/await dan satu blok try/catch untuk menangani galat
export async function ambilProyek() {
    try {
        const respons = await fetch(ALAMAT);

        // Periksa respons.ok sebelum membaca JSON (karena 404 tidak otomatis galat)
        if (!respons.ok) {
            throw new Error('Status balasan: ' + respons.status);
        }

        // Membaca teks menjadi nilai objek/array JavaScript
        const data = await respons.json();
        return data;

    } catch (galat) {
        console.error('Gagal memuat data dari API:', galat.message);
        throw galat; // Lempar ke pemanggil (dom.js) agar ditampilkan ke halaman
    }
}