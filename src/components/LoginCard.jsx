import { useState } from "react";
import { User, Lock } from "lucide-react";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login sebagai ${role} - email: ${email}`);
  };

  return (
    <section id="login" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Akses Sistem</h2>
          <p className="text-slate-600 mt-2">Masuk untuk mengelola laboratorium, memantau jadwal, dan mengajukan peminjaman.</p>
          <ul className="mt-4 text-slate-600 space-y-2 text-sm list-disc list-inside">
            <li>Admin: kelola data lab, jadwal, persetujuan peminjaman</li>
            <li>Teknisi: validasi peralatan dan kesiapan lab</li>
            <li>Dosen/Mahasiswa: ajukan peminjaman dan lihat status</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border shadow-sm p-6 space-y-4">
          <div>
            <label className="text-sm text-slate-700">Peran</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
              <option value="admin">Admin</option>
              <option value="teknisi">Teknisi</option>
              <option value="pengguna">Dosen/Mahasiswa</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-slate-700">Email</label>
            <div className="mt-1 relative">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500 pl-9" placeholder="you@campus.ac.id"/>
              <User className="absolute left-2 top-2.5 text-slate-400" size={18}/>
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-700">Kata Sandi</label>
            <div className="mt-1 relative">
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500 pl-9" placeholder="••••••••"/>
              <Lock className="absolute left-2 top-2.5 text-slate-400" size={18}/>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white rounded-md py-2.5 font-medium hover:bg-blue-700">Masuk</button>
          <p className="text-xs text-slate-500 text-center">Gunakan akun kampus untuk autentikasi.</p>
        </form>
      </div>
    </section>
  );
}

export default LoginCard;
