import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-500 text-slate-100 flex justify-between p-2">
      <span>Invoicr</span>
      <nav className="space-x-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-slate-50 underline" : "text-slate-200"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-slate-50 underline" : "text-slate-200"
          }
          to="/invoices"
        >
          Invoices
        </NavLink>
      </nav>
    </header>
  );
}
