import { Users, FlaskConical, ClipboardList, CalendarClock, BarChart3 } from "lucide-react";

function Stat({ icon: Icon, label, value, variant = "blue" }) {
  const variants = {
    blue: "bg-blue-600",
    emerald: "bg-emerald-600",
    amber: "bg-amber-600",
    violet: "bg-violet-600",
  };
  return (
    <div className="bg-white border rounded-xl p-4 flex items-center gap-4 shadow-sm">
      <div className={`h-10 w-10 rounded-lg grid place-items-center text-white ${variants[variant] || variants.blue}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-xl font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <section id="dashboard" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Dashboard Admin</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat icon={Users} label="Pengguna Aktif" value="128" variant="blue" />
          <Stat icon={FlaskConical} label="Laboratorium" value="12" variant="emerald" />
          <Stat icon={ClipboardList} label="Pengajuan Masuk" value="9" variant="amber" />
          <Stat icon={CalendarClock} label="Jadwal Hari Ini" value="7" variant="violet" />
        </div>
        <div className="mt-8 bg-white border rounded-xl p-6">
          <div className="flex items-center gap-2 text-slate-700 font-medium mb-4">
            <BarChart3 size={18} /> Ringkasan Penggunaan Mingguan
          </div>
          <div className="h-40 grid grid-cols-12 gap-2 items-end">
            {[20, 40, 35, 60, 45, 70, 55, 45, 65, 30, 50, 80].map((h, i) => (
              <div key={i} className="bg-blue-600/20 rounded" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">Simulasi grafik batang untuk ilustrasi.</p>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
