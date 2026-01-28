import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header({ brand = "Car Dealership", nav = null }) {
  const [open, setOpen] = useState(false);
  const link_class = ({isActive}) => 
    isActive? `text-(--color-accent) border-b -(--color-fg) transition` : `text-(--color-fg) hover:(--color-accent) transition`
  const link_class_mobile = ({isActive}) => 
    isActive? `block text-(--color-accent) py-2 rounded hover:bg-slate-50`:`block text-(--color-fg) py-2 rounded hover:bg-(--color-fg)`

  const items = nav ?? [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Cars" },
    { to: "/dealers", label: "Dealers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl font-semibold text-(--color-fg)">{brand}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className={link_class}
              >
                {it.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-1">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className={link_class_mobile}
              >
                {it.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}