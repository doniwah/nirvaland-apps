# Project Name

Deskripsi singkat project Anda di sini.

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Struktur Proyek](#struktur-proyek)
- [Konfigurasi](#konfigurasi)
- [Testing](#testing)
- [Deployment](#deployment)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## ✨ Fitur

- [ ] Fitur utama 1
- [ ] Fitur utama 2
- [ ] Fitur utama 3

## 🛠 Teknologi

- **Frontend Framework**: React + TypeScript
- **Build Tool**: Vite
- **CSS**: Tailwind CSS
- **Backend**: Supabase
- **Package Manager**: Bun
- **Testing**: Vitest
- **Linting**: ESLint

## 📦 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- [Bun](https://bun.sh/) (versi x.x.x atau lebih tinggi)
- Node.js (optional, jika tidak menggunakan Bun)

## 🚀 Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Kemudian edit file `.env` dengan konfigurasi Anda (khususnya Supabase credentials).

4. **Setup Supabase**
   ```bash
   bun supabase start
   ```

## 💻 Penggunaan

### Development

```bash
bun run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

### Linting

```bash
bun run lint
```

### Testing

```bash
bun run test
```

## 📁 Struktur Proyek

```
src/
├── components/      # React components (AboutSection, BookingForm, etc.)
├── pages/          # Halaman aplikasi
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── data/           # Static data
├── integrations/   # Integrasi eksternal (Supabase, API, etc.)
├── assets/         # Media assets
├── App.tsx         # Main App component
├── main.tsx        # Entry point
└── index.css       # Global styles

supabase/
├── functions/      # Serverless functions
├── migrations/     # Database migrations
└── config.toml     # Supabase configuration

public/            # Static files
```

## ⚙️ Konfigurasi

### Tailwind CSS
Konfigurasi Tailwind dapat ditemukan di [`tailwind.config.ts`](tailwind.config.ts)

### TypeScript
Konfigurasi TypeScript ada di [`tsconfig.json`](tsconfig.json) dan [`tsconfig.app.json`](tsconfig.app.json)

### Vite
Konfigurasi Vite ada di [`vite.config.ts`](vite.config.ts)

### ESLint
Konfigurasi ESLint ada di [`eslint.config.js`](eslint.config.js)

## 🧪 Testing

Project menggunakan Vitest untuk unit testing.

```bash
# Run tests
bun run test

# Run tests dengan coverage
bun run test:coverage
```

Test files biasanya terletak di folder `src/test/`

## 🌐 Deployment

### Deploy ke Vercel/Netlify

1. Push code ke repository GitHub
2. Connect repository ke Vercel/Netlify
3. Set environment variables di dashboard
4. Deploy otomatis akan terpicu

### Deploy Supabase Functions

```bash
bun supabase functions deploy
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Lisensi

Project ini berlisensi di bawah MIT License - lihat file [`LICENSE`](LICENSE) untuk detail.

## 📧 Kontak

Pertanyaan atau saran? Silakan buat issue di repository ini.

---

**Dibuat dengan ❤️**
