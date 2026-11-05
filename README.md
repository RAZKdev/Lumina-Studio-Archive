# Lumina Studio Archive

> Editor video non-linear (NLE) berbasis browser untuk editing cepat, sepenuhnya berjalan di perangkat pengguna.

## 1. Deskripsi Proyek

**Lumina Studio Archive** adalah MVP editor video dan audio non-linear yang berjalan di browser. Antarmukanya terinspirasi aplikasi profesional seperti DaVinci Resolve dan Adobe Premiere Pro, tetapi seluruh proses — mulai dari impor media, pemotongan klip, hingga ekspor — dilakukan **100% di sisi klien** tanpa backend dan tanpa mengunggah file ke server.

Proyek ini merupakan versi arsip dari eksperimen Lumina Studio sebelum pengembangan dipecah menjadi monorepo yang lebih besar (`Lumina-Studio`).

## 2. Kenapa Proyek Ini Dibuat

Editing video untuk konten pendek sering kali membutuhkan aplikasi desktop yang berat, proses instalasi panjang, atau layanan cloud yang mengharuskan pengguna mengunggah file pribadi. Lumina Studio Archive dibuat untuk menjawab kebutuhan tersebut dengan pendekatan yang lebih ringan:

- **Langsung di browser:** tidak perlu memasang aplikasi tambahan.
- **Privasi:** media tetap berada di perangkat pengguna; tidak ada upload ke server.
- **Cepat untuk eksperimen:** cocok untuk memotong klip, menyusun urutan sederhana, dan mengekspor video pendek.
- **Pembelajaran:** menjadi wadah eksperimen untuk memahami timeline, sinkronisasi audio-video, Canvas, dan Web Audio API.

## 3. Fungsi & Fitur Utama

1. **Media Bin** — impor file MP4, WebM, MOV, MP3, WAV, dan AAC melalui drag-and-drop; pembuatan thumbnail video otomatis; ekstraksi waveform audio; serta generator media demo.
2. **Preview Monitor** — pemutaran tersinkronisasi, tampilan timecode SMPTE (`HH:MM:SS:FF`), kontrol transport (play/pause, maju/mundur satu frame, volume, fullscreen), dan pilihan rasio aspek 16:9, 9:16, serta 1:1.
3. **Timeline Berbasis Canvas** — ruler waktu, dua track (video dan audio), trimming non-destruktif pada in/out point, playhead yang dapat digeser, alat split/razor, mute/lock per track, dan zoom timeline.
4. **Ekspor Video Client-Side** — komposisi frame ke canvas offscreen, perekaman menggunakan `MediaStream` dan `MediaRecorder`, modal progres ekspor, dan unduhan langsung file hasil.
5. **Keyboard Shortcuts** — `Space` untuk play/pause, panah kiri/kanan untuk maju/mundur satu frame, `Home` untuk kembali ke awal, `Delete`/`Backspace` untuk menghapus klip, dan tombol split.

## 4. Bahasa Pemrograman & Teknologi

| Lapisan | Teknologi |
| --- | --- |
| Bahasa utama | TypeScript |
| Struktur halaman | HTML5 |
| Styling | CSS3 + Tailwind CSS |
| UI | React 18 |
| Build tool | Vite 5 |
| State management | Zustand |
| Rendering & media | HTML5 Canvas, Web Audio API, MediaRecorder API |

## 5. Struktur Direktori

```text
Lumina-Studio-Archive/
├── App.tsx             # Komponen utama editor dan state aplikasi
├── main.tsx            # Entry point React
├── index.html          # Shell HTML
├── index.css           # Tailwind dan gaya global
├── start.bat           # Launcher Windows (opsional)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## 6. Cara Menjalankan

**Prasyarat:** Node.js 18+ dan npm.

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Di Windows, Anda juga dapat menjalankan `start.bat`.

**Build produksi:**

```bash
npm run build
npm run preview
```

## 7. Pengujian

Repo ini belum memiliki skrip pengujian otomatis. Pengujian dilakukan secara manual melalui alur:

1. Impor media atau gunakan media demo.
2. Susun klip di timeline, lakukan trim dan split.
3. Putar preview dan pastikan audio-video tersinkron.
4. Ekspor video dan periksa hasil unduhan.

## 8. Status & Lisensi

- **Status:** MVP / arsip eksperimen.
- **Lisensi:** belum ada berkas lisensi di repo. Hubungi pemilik repo untuk penggunaan ulang.
