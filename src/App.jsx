import Topbar from "./components/Topbar";
import LoginCard from "./components/LoginCard";
import AdminDashboard from "./components/AdminDashboard";
import LabManagement from "./components/LabManagement";
import BookingSchedule from "./components/BookingSchedule";
import UsageReports from "./components/UsageReports";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800">
      <Topbar />

      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Sistem Informasi Manajemen Laboratorium
            </h1>
            <p className="mt-3 text-slate-600">
              Kelola data laboratorium, pengajuan peminjaman, jadwal penggunaan, dan laporan pemakaian dalam satu tempat.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Mulai Masuk</a>
              <a href="#dashboard" className="px-4 py-2 rounded-md border hover:bg-white">Lihat Dashboard</a>
            </div>
          </div>
          <div className="bg-white/70 border rounded-xl p-6 shadow-sm">
            <ul className="space-y-3 text-sm">
              <li>• Login multi-peran: Admin, Teknisi, Pengguna</li>
              <li>• Manajemen data laboratorium dan peralatan</li>
              <li>• Pengajuan peminjaman & alur persetujuan</li>
              <li>• Jadwal penggunaan real-time</li>
              <li>• Report penggunaan per periode</li>
            </ul>
          </div>
        </div>
      </section>

      <LoginCard />
      <AdminDashboard />
      <LabManagement />
      <BookingSchedule />
      <UsageReports />

      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Lab Management • Dibuat untuk demo perancangan SIM Laboratorium</footer>
    </div>
  );
}

export default App;
