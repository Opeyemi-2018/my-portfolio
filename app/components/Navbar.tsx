"use client";
import React, { useEffect, useState } from "react";
import { profile } from "./Portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "Ask me", href: "#ask" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-neutral-200/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#" className="text-2xl font-bold tracking-tight text-neutral-900">
        <h1>Ope.</h1>
        </a>

        <ul className="hidden gap-10 text-[17px] text-neutral-800 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-neutral-500">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden text-[17px] text-neutral-800 hover:text-neutral-500 sm:block">
         Resume
          </a>
          <a
            href="#contact"
            className="border border-neutral-300 rounded-full  px-6 py-3 text-[15px] font-medium  transition hover:bg-neutral-700"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;