import React from "react";
import { profile } from "./Portfolio";

// Cached so the year is part of the static shell (cacheComponents forbids raw `new Date()` during prerender).
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const Contact = () => (
  <footer id="contact" className="bg-white px-4 py-10 md:py-28 text-center md:px-6">
    <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-neutral-900 md:text-7xl">
      Let&apos;s build something
    </h2>
    <p className="mx-auto mt-6 max-w-xl text-neutral-700 text-[15px]">
      Got an idea, a role or a bug that won&apos;t die? My inbox is open.
    </p>
    <a
      href={`mailto:${profile.email}`}
      className="mt-10 inline-block rounded-full bg-neutral-900 px-9 py-4 text-[14px] md:text-[16px]  text-white transition hover:bg-neutral-700"
    >
      {profile.email}
    </a>

    <div className="mt-12 flex justify-center gap-4">
      {profile.socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-neutral-300 px-6 py-2 text-neutral-800 transition hover:border-neutral-900"
        >
          {s.label}
        </a>
      ))}
    </div>

    <p className="mt-20 text-sm text-neutral-400">
      © <CurrentYear /> {profile.name}.
    </p>
  </footer>
);

export default Contact;