// src/simpanan.js
const KUNCI = "pabw-p11"
const VERSI = 1

export function muat() {
    try {
        const isi = JSON.parse(localStorage.getItem(KUNCI))
        if (isi?.versi !== VERSI) {
            localStorage.removeItem(KUNCI)
            return null
        }
        return isi
    } catch {
        localStorage.removeItem(KUNCI)
        return null
    }
}

export function simpan(data) {
    const isi = {
        versi: VERSI,
        kategoriAktif: data.kategoriAktif
    }
    localStorage.setItem(KUNCI, JSON.stringify(isi))
}

export function aturUlang() {
    localStorage.removeItem(KUNCI)
}