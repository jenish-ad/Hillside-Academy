import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "px-3 py-1 rounded-lg text-sm font-semibold transition hover:bg-blue-50";
  // find this line and replace:
const linkActive = "text-blue-900 bg-white";
  const linkInactive = "text-gray-700";

  return (
    <header className="sticky bg-yellow-400 top-0 z-50 w-full backdrop-blur border-b border-blue-100 py-0.5">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-between">
          {/* Logo + name (LOGO SIZE UNCHANGED) */}
          <div className="flex items-center gap-3">
            <div className="h-35 w-45 grid place-items-center overflow-hidden">
              <img loading="lazy"
                src="/Untitled.png"
                alt="Logo"
                className="bg-yellow-500object-cover scale-110"
              />
            </div>

            <div className="leading-none">
              <p className="text-4xl font-extrabold text-black leading-tight">
                Hillside Academy
              </p>
              <p className="text-s text-black 600 leading-none">
                Birendranagar-7, Surkhet
              </p>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex gap-1">
            {// replace the links array in BOTH places (desktop + mobile)
              [
                ["Home",       "/"],
                ["About",      "/about"],
                ["Academics",  "/academics"],
                ["Admissions", "/admissions"],
                ["Gallery",    "/gallery"],
                ["Notice",     "/notice"],
                ["Contact",    "/contact"],
              ].map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-xl border border-blue-200 p-2"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-3">
            <div className="rounded-2xl border border-blue-100 bg-white p-3 space-y-2">
              {// replace the links array in BOTH places (desktop + mobile)
                [
                  ["Home",       "/"],
                  ["About",      "/about"],
                  ["Academics",  "/academics"],
                  ["Admissions", "/admissions"],
                  ["Gallery",    "/gallery"],
                  ["Notice",     "/notice"],
                  ["Contact",    "/contact"],
                ].map(([label, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-50"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
