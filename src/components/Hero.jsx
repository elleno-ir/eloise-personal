"use client";

import { motion } from "framer-motion";

export default function Hero({ isPlaying, setIsPlaying }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center overflow-hidden font-sans"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay Putih Soft agar Opacity Foto Pas & Teks 'Eloise' Tetap Terbaca Kontras */}
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[0.5px]" />

      {/* Gradient Putih Murni di Bagian Bawah agar Awan di Foto Menyatu Mulus ke Section About */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white via-white/80 to-transparent pointer-events-none" />

      {/* Konten Utama Hero */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl md:text-8xl font-pixel text-slate-900 tracking-tight drop-shadow-sm">
            Eloise
          </h1>
          <p className="text-base md:text-lg font-medium text-slate-900 leading-snug font-sans">
            Cyber Security Engineering Student <br />
            <span className="text-slate-700 font-semibold">@ Batam, Indonesia</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-3">
            <a
              href="https://www.linkedin.com/in/helenayolandaamelia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-slate-800 hover:bg-white hover:scale-105 hover:shadow-md transition-all backdrop-blur-xs"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a
              href="https://github.com/elleno-ir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-slate-800 hover:bg-white hover:scale-105 hover:shadow-md transition-all backdrop-blur-xs"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/ameliaaydn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-slate-800 hover:bg-white hover:scale-105 hover:shadow-md transition-all backdrop-blur-xs"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Vinyl Disc */}
        <div 
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative w-60 h-60 md:w-72 md:h-72 flex items-center justify-center cursor-pointer group shrink-0"
        >
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="relative w-full h-full rounded-full bg-slate-900 border-4 border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center"
          >
            <img
              src="/images/cover.jpg"
              alt="Spinning Vinyl Disc"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </motion.div>

          {/* Lubang Tengah Vinyl */}
          <div className="absolute w-12 h-12 rounded-full bg-white border-4 border-slate-900 shadow-inner flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-slate-900" />
          </div>
        </div>

      </div>
    </section>
  );
}