import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="mx-auto max-w-7xl px-6 py-14
                      grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-yellow-400" />
            <h3 className="font-extrabold text-white text-lg">
              Hillside Academy
            </h3>
          </div>
          <p className="text-sm text-blue-300 leading-relaxed">
            Nurturing young minds from Nursery to Grade 8 in the heart of
            Surkhet since 2075 BS.
          </p>
          <p className="mt-4 text-xs text-blue-400">
            Birendranagar-7, Surkhet<br />
            Karnali Province, Nepal
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase
                         tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Home",       "/"],
              ["About Us",   "/about"],
              ["Academics",  "/academics"],
              ["Admissions", "/admissions"],
              ["Gallery",    "/gallery"],
              ["Notice",     "/notice"],
              ["Contact",    "/contact"],
            ].map(([label, path]) => (
              <li key={path}>
                <Link to={path}
                      className="text-blue-300 hover:text-yellow-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase
                         tracking-widest">
            Academics
          </h4>
          <ul className="space-y-2 text-sm text-blue-300">
            <li>Early Childhood (Nursery–UKG)</li>
            <li>Primary School (Grade 1–5)</li>
            <li>Lower Secondary (Grade 6–8)</li>
            <li>Extra-Curricular Activities</li>
            <li>Sports & Arts Programs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase
                         tracking-widest">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm text-blue-300">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              Birendranagar-7, Surkhet
            </li>
            <li className="flex items-start gap-2">
              <span>📞</span>
              +977-083-XXXXXX
            </li>
            <li className="flex items-start gap-2">
              <span>✉️</span>
              info@hillsideacademy.edu.np
            </li>
            <li className="flex items-start gap-2">
              <span>🕘</span>
              Sun–Fri: 9:00 AM – 4:00 PM
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900 py-5">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row
                        items-center justify-between gap-3 text-xs text-blue-400">
          <p>
            © {new Date().getFullYear()} Hillside Academy, Surkhet.
            All rights reserved.
          </p>
          <p>
            Nursery to Grade 8 · Birendranagar-7, Surkhet
          </p>
        </div>
      </div>
    </footer>
  );
}