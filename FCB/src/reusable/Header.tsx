import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const base = "inline-flex items-center rounded-xl border px-4 py-2 transition " + "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95";


export default function Header() {
  

  return (
    <header className="relative bg-linear-90 from-blue-700 to-red-700 p-10">
      <NavLink to="/" className={({ isActive }) =>`absolute left-6 top-1/2 -translate-y-1/2 ${base} ${isActive ? "bg-white text-slate-900": "text-white border-white/80 hover:bg-white/10"}`}end>
        <FontAwesomeIcon icon={faHouse} size="2x" />
      </NavLink>

      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8">
        <NavLink className={({isActive}) => `${base} ${isActive ? "bg-white text-slate-900" : "text-white border-white/80 hover:bg-white/10"}`} to="/history">History</NavLink>
        <NavLink className={({isActive}) => `${base} ${isActive ? "bg-white text-slate-900" : "text-white border-white/80 hover:bg-white/10"}`} to="/squad">Squad</NavLink>
        <NavLink className={({isActive}) => `${base} ${isActive ? "bg-white text-slate-900" : "text-white border-white/80 hover:bg-white/10"}`} to="/legends">Legends</NavLink>
        <NavLink className={({isActive}) => `${base} ${isActive ? "bg-white text-slate-900" : "text-white border-white/80 hover:bg-white/10"}`} to="/trophies">Trophies</NavLink>
      </nav>
      <img className="size-15 ml-370" src="https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png" alt="logo" />
    </header>
  );
}

