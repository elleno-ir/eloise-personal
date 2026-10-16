export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative w-full bg-cover bg-center font-sans pt-16 pb-36 min-h-[calc(100vh-80px)] flex flex-col justify-center"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      {/* Overlay Putih Lebih Tebal dengan Blur agar Teks & Tombol Terbaca Sangat Kontras */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[0,7px]" />

      {/* Gradasi Halus Mulus Menyambung dari Background Putih Projects */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-linear-to-b from-white via-white/80 to-transparent pointer-events-none" />

      {/* Konten Utama Contact */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Google Maps Pin Point Polibatam */}
        <div className="w-full md:w-1/2 h-72 md:h-80 rounded-3xl overflow-hidden border border-white/90 shadow-2xl shrink-0">
          <iframe
            title="Politeknik Negeri Batam Location"
            src="https://maps.google.com/maps?q=Politeknik%20Negeri%20Batam&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        {/* Right: Info Contact & Tombol Sosial Media */}
        <div className="flex flex-col items-end gap-5 text-right w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-pixel text-slate-900 drop-shadow-xs">
            Contact
          </h2>

          <p className="text-sm md:text-base text-slate-900 font-bold max-w-md font-sans leading-relaxed">
            Let&apos;s connect & collaborate on cyber security, digital defense, or tech projects.
          </p>

          {/* Tombol Sosial Media 1 Baris */}
          <div className="flex flex-wrap gap-3 justify-end mt-2">
            <a
              href="https://www.linkedin.com/in/helenayolandaamelia/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#243447] hover:bg-[#1e2b3b] text-white px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold shadow-md border border-slate-700 transition-all cursor-pointer font-sans"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/elleno-ir"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#243447] hover:bg-[#1e2b3b] text-white px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold shadow-md transition-all cursor-pointer font-sans"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/ameliaaydn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#243447] hover:bg-[#1e2b3b] text-white px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold shadow-md transition-all cursor-pointer font-sans"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}