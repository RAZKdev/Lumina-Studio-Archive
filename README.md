# Lumina Studio Archive

> Arsip eksperimen editor video non-linear berbasis browser yang tidak lengkap dan saat ini tidak dapat dijalankan.

## 1. Deskripsi Proyek

**Lumina Studio Archive** adalah snapshot arsip dari eksperimen awal editor video dan audio non-linear. Repo ini menyimpan shell antarmuka React (`App.tsx`), entry point (`main.tsx`), konfigurasi Vite/Tailwind/TypeScript, dan CSS global.

Repo ini **bukan** aplikasi yang siap dijalankan. Komponen yang diimpor oleh `App.tsx` tidak ada di repo, sehingga halaman editor tidak dapat dirender. Dokumentasi ini menjelaskan isi arsip dan batasannya, bukan fitur yang sudah berfungsi.

## 2. Kenapa Proyek Ini Dibuat

Eksperimen ini dibuat untuk mempelajari konsep editor video berbasis browser:

- **Langsung di browser:** tanpa aplikasi desktop dan tanpa backend.
- **Privasi:** media diproses di perangkat pengguna, bukan diunggah ke server.
- **Pembelajaran:** eksplorasi timeline, sinkronisasi audio-video, Canvas, Web Audio API, dan MediaRecorder.

Fitur-fitur tersebut adalah tujuan eksperimen, bukan implementasi yang tersedia di repo ini. Setelah pengembangan dipindahkan ke proyek `Lumina-Studio`, repo ini diarsipkan sebagai catatan sejarah.

## 3. Status Implementasi

**Yang tersedia:**

- `App.tsx` — shell UI yang mengimpor komponen editor.
- `main.tsx` — entry point React.
- `index.html`, `index.css`, serta konfigurasi Vite, Tailwind, PostCSS, dan TypeScript.
- `start.bat` — launcher Windows dengan path Node yang di-hardcode.

**Yang tidak tersedia:**

- `components/Header`, `components/MediaBin`, `components/PreviewMonitor`, `components/Timeline/Timeline`, dan `components/ExportModal` yang diimpor `App.tsx`.
- Folder `src/` yang dirujuk oleh `index.html` dan `tsconfig.json`.
- Implementasi media bin, preview monitor, timeline, ekspor video, dan keyboard shortcuts.

**Akibatnya:**

- Halaman `npm run dev` tidak dapat dimuat karena import komponen tidak ditemukan.
- `npm run build` gagal karena TypeScript tidak menemukan komponen dan folder `src/`.
- `index.html` memuat `/src/main.tsx`, sedangkan `main.tsx` berada di root repo.

Repo ini hanya memiliki 12 file yang tercatat di Git.

## 4. Bahasa Pemrograman & Teknologi

| Lapisan | Teknologi | Catatan |
| --- | --- | --- |
| Bahasa utama | TypeScript | Dikonfigurasi di repo |
| UI | React 18 | Dideklarasikan di `package.json` |
| Build tool | Vite 5 | Dikonfigurasi, tetapi build gagal |
| Styling | Tailwind CSS 3 | Dikonfigurasi |
| State management | Zustand | Dideklarasikan; penggunaan aktual tidak dapat diverifikasi |
| Ikon | Lucide React | Dideklarasikan; penggunaan aktual tidak dapat diverifikasi |
| Rendering & media | Canvas, Web Audio API, MediaRecorder | Hanya disebut di shell/status bar; implementasi tidak ada |

## 5. Struktur Direktori

```text
Lumina-Studio-Archive/
├── App.tsx
├── main.tsx
├── index.html
├── index.css
├── start.bat
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Tidak ada folder `components/` atau `src/` di repo.

## 6. Cara Menjalankan

**Prasyarat:** Node.js 18+ dan npm. Repo tidak menetapkan batas versi Node di `package.json`.

Perintah yang dimaksudkan:

```bash
npm install
npm run dev
```

`npm install` hanya memasang dependensi; `npm run dev` tidak dapat memuat halaman karena komponen yang diimpor tidak ada. `start.bat` juga tidak menjamin berhasil karena menetapkan path `%LOCALAPPDATA%\Programs\node-v20.18.0-win-x64` secara hardcoded.

**Build produksi:**

```bash
npm run build
npm run preview
```

Build produksi tidak dapat diselesaikan sampai komponen yang hilang ditambahkan dan struktur `src/` diperbaiki.

**Untuk memulihkan proyek:** tambahkan komponen yang hilang, pindahkan `main.tsx` ke `src/main.tsx` atau ubah `index.html`, lalu sesuaikan `include` di `tsconfig.json`. Perbaikan tersebut belum dilakukan di repo ini.

## 7. Pengujian

Tidak ada skrip pengujian otomatis di `package.json`. Pengujian manual juga belum dapat diselesaikan karena aplikasi belum dapat di-build atau dijalankan.

## 8. Status & Lisensi

- **Status:** arsip tidak lengkap; tidak dapat dijalankan.
- **Lisensi:** belum ada berkas lisensi di repo. Hubungi pemilik repo untuk penggunaan ulang.
