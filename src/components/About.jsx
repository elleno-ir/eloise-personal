import BeRealPhoto from "./BeRealPhoto";

export default function About() {
  const tools = [
    "Grafana & Prometheus",
    "OPNsense & Suricata",
    "Python & SQL",
    "Django & Flask",
    "Figma & Canva",
    "Linux/Bash",
    "Docker & VirtualBox",
  ];

  return (
    <section id="about" className="pt-4 pb-12 w-full min-h-[calc(100vh-140px)] flex flex-col justify-center">
      {/* Subjudul About */}
      <div className="w-full mb-3">
        <h2 className="text-4xl md:text-5xl font-pixel text-right text-slate-900">
          About
        </h2>
      </div>

      {/* Card Pembungkus dengan Nuansa Steel/Slate Blue Gunung */}
      <div className="w-full bg-[#243447] text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-700/60 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
        {/* Left: Foto BeReal */}
        <div className="shrink-0 flex items-center justify-center">
          <BeRealPhoto />
        </div>

        {/* Right: Nama, Deskripsi, Tools */}
        <div className="flex-1 flex flex-col justify-center gap-4 text-right">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-sans tracking-wide">
            Helena Yolanda Amelia
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-slate-200 font-sans font-normal">
            A 5th-semester Cyber Security Engineering student at Politeknik Negeri Batam, currently hands-on with penetration testing for this semester's PBL. Passionate about digital defense, SIEM, and SOC operations. I love exploring attack-and-defense concepts and building secure infrastructure—blending cybersecurity engineering with a touch of UI/UX and clean visual design.
          </p>

          {/* Tools Section */}
          <div className="mt-2 flex flex-col gap-2.5 items-end">
            <h4 className="text-xl md:text-2xl font-pixel text-slate-100">
              Tools
            </h4>
            <div className="flex flex-wrap gap-2 justify-end">
              {tools.map((tool, idx) => (
                <span 
                  key={idx} 
                  className="bg-[#1E293B] text-slate-100 text-xs md:text-sm px-3.5 py-1.5 rounded-xl font-medium shadow-xs border border-slate-600/80 hover:bg-[#334155] transition-all font-sans"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}