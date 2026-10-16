"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, Repeat, Shuffle } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (audioRef.current.readyState >= 1) {
        setDuration(audioRef.current.duration);
      }
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Gagal memutar audio:", err);
        });
    }
  };

  const formatTime = (time) => {
    if (isNaN(time) || !isFinite(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const progressPercent = duration && duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-200/80 py-3 md:py-4 px-6 md:px-12 text-slate-900 font-sans shadow-lg transition-all">
      <audio
        ref={audioRef}
        src="/audio/song.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      />

      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200/80 group cursor-pointer">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div
          className="h-full bg-slate-900 transition-all duration-100"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="w-1/3 flex items-center justify-start gap-3 md:gap-4">
          <button
            onClick={togglePlay}
            className="p-2.5 rounded-full bg-slate-900 text-white hover:scale-105 active:scale-95 transition-transform shadow-md cursor-pointer"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
          </button>

          <div className="font-mono text-xs md:text-sm text-slate-700 tracking-wider">
            <span>{formatTime(currentTime)}</span>
            <span className="text-slate-400 mx-1">/</span>
            <span className="text-slate-500">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="w-1/3 flex items-center justify-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl overflow-hidden bg-slate-200 border border-slate-300/80 shadow-sm">
            <Image
              src="/images/cover-boogie.jpg"
              alt="Track Cover"
              fill
              sizes="100px"
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="truncate text-left font-sans">
            <p className="text-xs md:text-sm font-bold text-slate-900 truncate leading-tight">
              BOOGIE
            </p>
            <p className="text-[10px] md:text-xs text-slate-600 font-medium truncate mt-0.5">
              BROCKHAMPTON • Saturation III • 2017
            </p>
          </div>
        </div>

        <div className="w-1/3 flex items-center justify-end gap-4 text-slate-500">
          <button className="hover:text-black transition-colors cursor-pointer">
            <Shuffle size={18} />
          </button>
          <button className="hover:text-black transition-colors cursor-pointer">
            <Repeat size={18} />
          </button>
          <button className="hover:text-black transition-colors cursor-pointer">
            <Volume2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}