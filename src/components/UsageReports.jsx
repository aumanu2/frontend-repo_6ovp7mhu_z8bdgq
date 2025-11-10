import { FileText, Download } from "lucide-react";

function UsageReports(){
  const reports = [
    { id: 1, title: "Laporan Bulan Oktober 2025", file: "laporan-10-2025.pdf", size: "220 KB" },
    { id: 2, title: "Laporan Bulan September 2025", file: "laporan-09-2025.pdf", size: "205 KB" },
  ];

  return (
    <section id="reports" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Report Penggunaan Lab</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {reports.map(r => (
            <div key={r.id} className="bg-white border rounded-xl p-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-violet-600 text-white grid place-items-center"><FileText size={18}/></div>
              <div>
                <p className="font-medium text-slate-800">{r.title}</p>
                <p className="text-sm text-slate-500">{r.file} • {r.size}</p>
              </div>
              <button className="ml-auto inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-slate-50"><Download size={16}/>Unduh</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UsageReports;
