## Clone Repository

clone repository untuk bisa menggunakan projectnya.

```bash
git clone https://github.com/CPS-TelU/modul3-backend2324.git
```

## Install Modul

Install modul menggunakan Node Package Manager.

```bash
npm install
```

## Cara Menjalankan

1. Pastikan telah menginstal dependencies yang diperlukan dengan mengikuti langkah-langkah di atas.
2. Buka terminal dan jalankan server dengan perintah berikut: `node app.js`
3. Setelah server berjalan, buka browser dan kunjungi `http://localhost:3000/api`. Anda akan melihat hasil kodingan yang dijalankan.

## Dokumentasi API

Deskripsikan endpoint API yang tersedia dalam project ini, seperti parameter yang diperlukan, contoh hasil, dsb. Anda dapat menggunakan tools seperti Postman atau curl untuk menguji API.

### GET /api

Mengembalikan daftar data contoh.

Contoh Response:

```
[
 {
  "id": 1,
  "nama": "Yanto",
  "kelas": "TT-40-01"
 },
 {
  "id": 2,
  "nama": "Sugito",
  "kelas": "TT-42-02"
 }
]
```

## License

Copyright (c) 2023 Cyber Physical System Laboratory
