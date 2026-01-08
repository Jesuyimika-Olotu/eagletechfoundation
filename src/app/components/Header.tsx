"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 lg:px-28 py-4 bg-[#F8F6FE] sticky top-0 z-30 shadow-md">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          <Image
            src="/icons/updated-logo2.svg"
            width={200}
            height={200}
            alt="Logo"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6">
            {[
              ["Home", "/"],
              ["Projects", "/projects"],
              ["About Us", "/about"],
              ["Volunteer", "/volunteer"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[#3322AA] text-[1rem] font-medium hover:text-[#3133EE] hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-[#3322AA] text-2xl"
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
          className={`absolute inset-0 bg-[#020A18]/40 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar */}
        <aside
          className={`absolute left-0 top-0 h-full w-72 bg-[#F8F6FE] px-6 py-8 transform transition-transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold text-[#3322AA]">Logo</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-[#020A18]"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-6">
              {[
                ["Home", "/"],
                ["Projects", "/projects"],
                ["About Us", "/about"],
                ["Volunteer", "/volunteer"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#3322AA] text-lg font-medium hover:text-[#3133EE]"
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
