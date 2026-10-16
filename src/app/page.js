"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="min-h-screen relative w-full overflow-x-hidden bg-white">
      {/* NAVBAR STICKY */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <Hero isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* SECTION 2: ABOUT & PROJECTS */}
      <div className="bg-white text-slate-900">
        <div className="w-full px-8 md:px-16 lg:px-24 max-w-350 mx-auto">
          <About />
          <Projects />
        </div>
      </div>

      {/* SECTION 3: CONTACT (FULL WIDTH WITH BACKGROUND IMAGE) */}
      <Contact />

      {/* AUDIO PLAYER STICKY BOTTOM */}
      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </main>
  );
}