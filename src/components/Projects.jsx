"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("PBL");

  const filteredProjects = projectsData.filter((p) => p.type === filter);

  return (
    <section id="projects" className="pt-8 pb-16 w-full flex flex-col gap-6 font-sans">
      {/* Header Projects & Filter Buttons */}
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-5xl font-pixel text-slate-900">
          Projects
        </h2>

        {/* Filter Tab Buttons */}
        <div className="flex gap-2">
          {["PBL", "Personal", "Archive"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                filter === cat
                  ? "bg-[#243447] text-white shadow-md border border-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat === "Archive" ? "Design Archive" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Area Tampilan Konten Projects */}
      {filter === "Personal" || filteredProjects.length === 0 ? (
        /* Tampilan Khusus Saat Tab Personal Aktif:
           Menjaga tinggi wadah (min-h-[380px]) agar persis sama dengan tinggi deretan kartu PBL,
           tanpa kotak warna gelap, dan teks pesan berada di tengah mulus. */
        <div className="w-full min-h-95 flex items-center justify-center text-slate-500 font-sans my-2">
          <p className="text-sm md:text-base font-medium tracking-wide">
            Currently doesn&apos;t have any personal projects yet.
          </p>
        </div>
      ) : (
        /* Container Scroll Ke Samping Kartu Projects */
        <div className="w-full min-h-95 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex gap-6 flex-nowrap w-max min-w-full">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                /* Kartu tetap diam di tempat (tanpa hover translate) & warna #243447 sama seperti About */
                className="w-64 md:w-72 bg-[#243447] text-white border border-slate-700/80 rounded-2xl p-4 shadow-md flex flex-col justify-between shrink-0 transition-all duration-200 hover:shadow-2xl hover:border-slate-500 group"
              >
                <div>
                  {/* Label Semester / ID */}
                  <div className="text-xs font-semibold text-slate-300 group-hover:text-sky-300 transition-colors mb-2.5 font-sans">
                    {project.label}
                  </div>

                  {/* Gambar Poster/Cover */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-slate-800 shadow-inner">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-medium -z-10 text-center px-2 font-sans">
                      {project.pblCode}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-white group-hover:text-sky-200 transition-colors line-clamp-2 text-sm leading-snug mb-1 font-sans">
                    {project.title}
                  </h3>
                </div>

                {/* Footer Info (Kode PBL & Tahun) */}
                <div className="mt-4 pt-3 border-t border-slate-700/60 flex justify-between items-center text-xs text-slate-300 font-sans">
                  <span>{project.pblCode}</span>
                  <span>{project.year}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}