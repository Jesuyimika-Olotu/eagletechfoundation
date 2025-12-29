// import Link from "next/link";

// export default function Header() {
//   return (
//     <div className="flex justify-between px-28 py-5">
//       <Link href="/" className="text-black">
//         Logo
//       </Link>
//       <nav>
//         <ul className="flex gap-y-4 gap-x-5">
//           <li>
//             <Link
//               href="/about"
//               className=" text-blue-700 text-[1rem] font-medium"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className=" text-blue-700 text-[1rem] font-medium"
//             >
//               Gallery
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className=" text-blue-700 text-[1rem] font-medium"
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/about"
//               className=" text-blue-700 text-[1rem] font-medium"
//             >
//               Volunteer
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className=" text-blue-700 text-[1rem] font-medium"
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-16 lg:px-28 py-5 bg-white shadow-sm">
        {/* Logo */}
        <Link href="/" className="text-black font-bold text-xl">
          Logo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6">
            {[
              ["Home", "/"],
              ["Gallery", "/gallery"],
              ["About Us", "/about"],
              ["Volunteer", "/volunteer"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-blue-700 text-[1rem] font-medium hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-blue-700 text-2xl"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar */}
        <aside
          className={`absolute left-0 top-0 h-full w-72 bg-white px-6 py-8 transform transition-transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold text-blue-700">Logo</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-6">
              {[
                ["Home", "/"],
                ["Gallery", "/gallery"],
                ["About Us", "/about"],
                ["Volunteer", "/volunteer"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-blue-700 text-lg font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
