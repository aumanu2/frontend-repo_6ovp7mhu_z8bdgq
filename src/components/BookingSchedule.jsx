import { useState } from "react";
import { CalendarDays, Clock, Send } from "lucide-react";

function BookingSchedule(){
  const [requests, setRequests] = useState([
    { id: 1, lab: "Lab Komputer 1", date: "2025-11-15", time: "09:00-11:00", status: "Menunggu" },
  ]);
  const [form, setForm] = useState({ lab: "Lab Komputer 1", date: "", time: "08:00-10:00", purpose: "" });

  const submit = (e) => {
    e.preventDefault();
    const id = Date.now();
    setRequests([{ id, lab: form.lab, date: form.date, time: form.time, status: "Menunggu" }, ...requests]);
    setForm({ ...form, date: "", purpose: "" });
  };

  return (
    <section id="schedule" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Pengajuan Peminjaman & Jadwal</h2>

        <div className="grid lg:grid-cols-3 gap-6">
          <form onSubmit={submit} className="bg-white border rounded-xl p-6 space-y-3 lg:col-span-1">
            <div>
              <label className="text-sm text-slate-700">Laboratorium</label>
              <select value={form.lab} onChange={e=>setForm({...form, lab: e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                <option>Lab Komputer 1</option>
                <option>Lab Kimia</option>
                <option>Lab Fisika</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-700">Tanggal</label>
              <input type="date" value={form.date} onChange={e=>setForm({...form, date: e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="text-sm text-slate-700">Waktu</label>
              <input type="text" value={form.time} onChange={e=>setForm({...form, time: e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="08:00-10:00"/>
            </div>
            <div>
              <label className="text-sm text-slate-700">Keperluan</label>
              <textarea value={form.purpose} onChange={e=>setForm({...form, purpose: e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" rows={3} placeholder="Praktikum, penelitian, dsb"/>
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md px-3 py-2 hover:bg-blue-700"><Send size={18}/>Ajukan</button>
          </form>

          <div className="bg-white border rounded-xl p-6 lg:col-span-2">
            <div className="flex items-center gap-2 text-slate-700 font-medium mb-4"><CalendarDays size={18}/> Jadwal Mendatang</div>
            <div className="divide-y">
              {requests.map((r)=> (
                <div key={r.id} className="py-3 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center"><Clock size={18}/></div>
                  <div>
                    <p className="font-medium text-slate-800">{r.lab}</p>
                    <p className="text-sm text-slate-500">{r.date} • {r.time}</p>
                  </div>
                  <span className={`ml-auto text-xs px-2 py-1 rounded-full ${r.status === 'Menunggu' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSchedule;
