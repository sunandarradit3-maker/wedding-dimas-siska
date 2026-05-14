# Wedding Siska Dimas - Next.js

Project undangan online berbasis Next.js, siap deploy ke Vercel.

## Cara jalanin lokal

```bash
npm install
npm run dev
```

Buka:

```text
http://localhost:3000
```

## Deploy ke Vercel

1. Upload project ini ke GitHub.
2. Masuk Vercel.
3. Import repository.
4. Framework otomatis terdeteksi sebagai Next.js.
5. Klik Deploy.

## File yang sering diganti

Semua data utama ada di:

```text
lib/wedding-config.ts
```

Ganti data pengantin, acara, Google Maps, DANA, WA, love story, dan galeri di file itu.

## Struktur gambar

```text
public/assets/images/logo.png
public/assets/images/cover.jpg
public/assets/images/profil-siska.jpg
public/assets/images/profil-dimas.jpg
public/assets/images/gallery-1.jpg
public/assets/images/gallery-2.jpg
...
public/assets/images/gallery-10.jpg
```

Tinggal replace gambar dengan nama yang sama.

## Musik

Default audio ada di:

```text
public/assets/audio/background-music.wav
```

Kalau punya MP3, taruh file:

```text
public/assets/audio/background-music.mp3
```

Kode sudah support MP3 dulu, lalu fallback ke WAV.

## Live Chat

Live chat yang dipakai adalah popup premium yang mengarah ke WhatsApp. Ini paling cocok untuk undangan online karena ringan, cepat, dan tidak butuh database.

Nomor WhatsApp ada di:

```text
lib/wedding-config.ts
```

Bagian:

```ts
bride.whatsapp
groom.whatsapp
contact.phone
```

Format nomor harus pakai 62, contoh:

```text
6282315640398
```

## Catatan

Nomor WhatsApp Dimas sementara disamakan dengan nomor utama karena belum ada data baru. Ganti di `lib/wedding-config.ts` kalau nomor Dimas sudah diberikan.
