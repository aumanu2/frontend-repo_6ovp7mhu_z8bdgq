import { Home, LayoutDashboard, FlaskConical, Calendar, FileText, LogIn } from "lucide-react";

function Topbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-semibold">LM</div>
          <span className="font-semibold text-gray-800">Lab Management</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#home" className="hover:text-gray-900 flex items-center gap-2"><Home size={18}/>Home</a>
          <a href="#dashboard" className="hover:text-gray-900 flex items-center gap-2"><LayoutDashboard size={18}/>Dashboard</a>
          <a href="#labs" className="hover:text-gray-900 flex items-center gap-2"><FlaskConical size={18}/>Manajemen Lab</a>
          <a href="#schedule" className="hover:text-gray-900 flex items-center gap-2"><Calendar size={18}/>Jadwal</a>
          <a href="#reports" className="hover:text-gray-900 flex items-center gap-2"><FileText size={18}/>Report</a>
        </nav>
        <a href="#login" className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700"><LogIn size={18}/>Masuk</a>
      </div>
    </header>
  );
}

export default Topbar;
