import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* HEADER / HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)] shrink-0">
          <Image 
            src="/profile.jpg" 
            alt="Foto Dalu" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
            Halo, Saya Dalu! 👋
          </h1>
          {/* MOTTO SECTION */}
          <p className="text-xl italic text-blue-400 mb-6 font-medium">
            "Buatlah seseorang bahagia sebelum ia menyukai mu."
          </p>
          <h2 className="text-2xl font-medium text-slate-300 mb-6">
            Tech & Hardware Enthusiast
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Perjalanan saya di dunia teknologi dimulai dari rasa penasaran tentang bagaimana keamanan jaringan bekerja. Sekarang, fokus saya beralih penuh ke dunia hardware, dari merakit alat elektronik, membangun sistem IoT, hingga melakukan flashing dan modifikasi level sistem pada berbagai perangkat.
          </p>
        </div>
      </section>

      {/* TENTANG SAYA & SKILL */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 border-b-2 border-blue-500 inline-block pb-2">Tentang Saya</h3>
            <ul className="space-y-4 text-slate-300 text-lg">
              <li>📍 <strong className="text-white">Asal:</strong> Surabaya, Indonesia</li>
              <li>🏫 <strong className="text-white">Pendidikan:</strong> SMA Negeri 8 Surabaya (Kelas X)</li>
              <li>🎯 <strong className="text-white">Fokus:</strong> Teknik Komputer & Sistem Embedded</li>
              <li>💻 <strong className="text-white">Evolusi:</strong> Network Security ➡️ IoT & Hardware</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 border-b-2 border-blue-500 inline-block pb-2">Hobi & Eksplorasi</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700">🔧 Ngerakit PC & Laptop</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700">📱 Flashing Hardware & Custom ROM</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700">🎮 Modifikasi PlayStation</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700">🤖 Embedded Systems (IoT)</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700">🛡️ Cybersecurity & Penetration-Testing</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center text-white mb-12">Showcase Eksperimen & Proyek</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🛡️</div>
            <h4 className="text-2xl font-bold text-blue-300 mb-3">Penetration Testing Tools</h4>
            <p className="text-slate-400">
              Mengeksplorasi sisi *offensive security*. Saya pernah bereksperimen mengembangkan alat uji keamanan seperti tracker nomor HP, simulasi phishing link, stress-testing jaringan (DDoS), manajemen botnet, hingga script spam SMS.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🐟</div>
            <h4 className="text-2xl font-bold text-blue-300 mb-3">Smart Fish Feeder (IoT)</h4>
            <p className="text-slate-400">
              Sistem pakan otomatis berbasis mikrokontroler terintegrasi. Dilengkapi dengan notifikasi real-time ke Discord Webhook untuk laporan status pakan secara otomatis.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">⚡</div>
            <h4 className="text-2xl font-bold text-blue-300 mb-3">Modifikasi Firmware & Konsol</h4>
            <p className="text-slate-400">
              Ahli dalam modifikasi level sistem: flashing Custom ROM Android, manipulasi modul sistem (Magisk/KernelSU), serta modifikasi firmware PlayStation untuk jailbreak firmware sony.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">🖥️</div>
            <h4 className="text-2xl font-bold text-blue-300 mb-3">Hardware Tuning & Assembly</h4>
            <p className="text-slate-400">
              Berpengalaman dalam merakit dan melakukan troubleshooting PC/Laptop. Fokus pada efisiensi komponen dan eksperimen hardware tuning untuk mencapai performa maksimal.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 text-center py-10 text-slate-500">
        <p className="italic mb-2 text-slate-400">"Buatlah seseorang bahagia sebelum ia menyukai mu."</p>
        <p>© {new Date().getFullYear()} Dalu Raziq Hidayatullah. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}