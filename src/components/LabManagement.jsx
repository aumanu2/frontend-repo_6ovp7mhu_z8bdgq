import { useState } from "react";
import { Plus, FlaskConical, Trash2, Pencil } from "lucide-react";

function LabManagement(){
  const [labs, setLabs] = useState([
    { id: 1, name: "Lab Komputer 1", capacity: 30, equipment: "PC, Proyektor" },
    { id: 2, name: "Lab Kimia", capacity: 24, equipment: "Peralatan Gelas, Mikroskop" },
  ]);

  const [form, setForm] = useState({ name: "", capacity: "", equipment: "" });

  const addLab = (e) => {
    e.preventDefault();
    if(!form.name) return;
    const id = Date.now();
    setLabs([...labs, { id, ...form, capacity: Number(form.capacity) || 0 }]);
    setForm({ name: "", capacity: "", equipment: "" });
  };

  const removeLab = (id) => setLabs(labs.filter(l => l.id !== id));

  return (
    <section id="labs" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-800">Manajemen Laboratorium</h2>
        </div>

        <form onSubmit={addLab} className="bg-white border rounded-xl p-4 grid md:grid-cols-4 gap-3 mb-6">
          <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Nama Lab"/>
          <input value={form.capacity} onChange={e=>setForm({...form, capacity: e.target.value})} className="rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Kapasitas"/>
          <input value={form.equipment} onChange={e=>setForm({...form, equipment: e.target.value})} className="rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Peralatan"/>
          <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md px-3 py-2 hover:bg-blue-700"><Plus size={18}/>Tambah</button>
        </form>

        <div className="grid md:grid-cols-2 gap-4">
          {labs.map(lab => (
            <div key={lab.id} className="bg-white border rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-600 text-white grid place-items-center"><FlaskConical size={18}/></div>
                <div>
                  <h3 className="font-medium text-slate-800">{lab.name}</h3>
                  <p className="text-sm text-slate-500">Kapasitas {lab.capacity} • {lab.equipment}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <button className="p-2 rounded-md hover:bg-slate-100" title="Edit"><Pencil size={16}/></button>
                  <button onClick={()=>removeLab(lab.id)} className="p-2 rounded-md hover:bg-slate-100 text-red-600" title="Hapus"><Trash2 size={16}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LabManagement;
