"use client";

import { useState } from "react";

export default function BeRealPhoto() {
  const [isSwapped, setIsSwapped] = useState(false);

  const photoBack = "/images/bereal-back.jpg";  // Foto Utama
  const photoFront = "/images/bereal-front.jpg"; // Foto Selfie

  return (
    <div 
      onClick={() => setIsSwapped(!isSwapped)}
      className="relative w-56 h-72 md:w-64 md:h-84 bg-white/80 rounded-2xl p-1.5 shadow-sm select-none shrink-0 cursor-pointer group transition-all"
    >
      {/* Gambar Utama (Besar) */}
      <div className="w-full h-full bg-slate-200 rounded-xl overflow-hidden relative">
        <img
          src={isSwapped ? photoFront : photoBack}
          alt="BeReal Main"
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-102"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-sans text-xs font-semibold -z-10 text-center px-2">
          {isSwapped ? "Foto Selfie (Front)" : "Foto Utama (Back)"}
        </div>
      </div>

      {/* Gambar Overlay Kecil (Depan) - Bingkai Tipis */}
      <div className="absolute top-4 left-4 w-16 h-22 md:w-20 md:h-26 bg-slate-300 rounded-lg border-2 border-white shadow-md overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 z-10">
        <img
          src={isSwapped ? photoBack : photoFront}
          alt="BeReal Secondary"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-sans text-[9px] font-bold -z-10 text-center px-1">
          {isSwapped ? "Foto Utama" : "Foto Selfie"}
        </div>
      </div>
    </div>
  );
}