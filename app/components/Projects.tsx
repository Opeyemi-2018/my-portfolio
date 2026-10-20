"use client";
import React, { useState } from "react";
import Link from "next/link";
import { projects } from "./Portfolio";

type Tab = "featured" | "side";

const Projects = () => {
  const [tab, setTab] = useState<Tab>("featured");
  const list = projects.filter((p) => (tab === "featured" ? p.featured : !p.featured));

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-gradient-to-b from-neutral-800 via-neutral-900 to-black px-4 py-28 text-center text-white md:px-6"
    >
      <div className="pointer-events-none absolute left-1/2 top-[55%] h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <h2 className="relative text-3xl font-semibold tracking-tight md:text-7xl">Things I&apos;ve shipped</h2>
      <p className="relative mx-auto mt-6 max-w-2xl text-lg md:text-2xl md:leading-snug">
        Real products used by real people. Each one taught me something about scale, speed or craft.
      </p>
      <p className="relative mt-3 text-sm text-neutral-400">Case studies available on request.</p>

      <div className="relative -mx-4 md:mt-20 overflow-x-auto px-4 pb-10 pt-10 [perspective:2000px] [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0">
        <div className="mx-auto flex w-max items-end gap-6 md:w-auto md:justify-center md:gap-8 md:[transform:rotateX(14deg)_rotateZ(-6deg)]">
          {list.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block shrink-0 rounded-[28px] outline-none"
            >
              <div className="rounded-[28px] bg-gradient-to-br from-white/40 via-white/10 to-white/30 p-[1.5px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-[transform,box-shadow] duration-500 ease-out will-change-transform group-hover:-translate-y-6 group-hover:shadow-[0_40px_80px_-10px_rgba(0,0,0,0.9)] group-focus-visible:-translate-y-6">
                <div
                  className={`relative h-[22rem] w-[17rem] overflow-hidden rounded-[27px] bg-gradient-to-br sm:w-[20rem] md:h-[28rem] md:w-[22rem] lg:w-[24rem] ${p.gradient}`}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  ) : (
                    <span className="absolute left-7 top-10 h-10 w-14 rounded-lg bg-gradient-to-br from-amber-100 to-stone-400 opacity-90" />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-black/65 transition-opacity duration-500 group-hover:opacity-40" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="pointer-events-none absolute -inset-y-10 left-0 w-1/3 -translate-x-[150%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[350%]" />

                  {/* top: tag pill + (logo or arrow) */}
                  <div className="pointer-events-none absolute inset-x-5 top-5 flex items-start justify-between gap-3">
                    <span className="mt-1 rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur-md">
                      {p.tag}
                    </span>

                    {p.logo ? (
                      /* NEW: big platform logo, top-right */
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="relative">
                          <img
                            src={p.logo}
                            alt={p.logoLabel ?? "Platform logo"}
                            className="h-16 w-16 rounded-2xl object-cover shadow-[0_10px_30px_-5px_rgba(0,0,0,0.7)] ring-2 ring-white/30 transition-transform duration-500 ease-out group-hover:scale-110 md:h-20 md:w-20"
                          />
                          {/* hover arrow sits on the logo's corner */}
                          <span className="absolute -bottom-2 -left-2 grid h-7 w-7 scale-75 place-items-center rounded-full bg-white text-sm text-neutral-900 opacity-0 shadow-md transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                            ↗
                          </span>
                        </div>
                        {p.logoLabel && (
                          <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-md">
                            {p.logoLabel}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="grid h-9 w-9 scale-75 place-items-center rounded-full bg-white text-neutral-900 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                        ↗
                      </span>
                    )}
                  </div>

                  {/* vertical title (NEW: moved down when a logo is shown) */}
                  <span
                    className={`pointer-events-none absolute right-5 text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] [writing-mode:vertical-rl] md:text-4xl ${
                      p.logo ? "top-36 md:top-40" : "top-20"
                    }`}
                  >
                    {p.title}
                  </span>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-left">
                    <div className="translate-y-[7.5rem] transition-transform duration-500 ease-out group-hover:translate-y-0">
                      <p className="text-xl font-semibold">{p.title}</p>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        {p.blurb}
                      </p>
                      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 opacity-0 ring-1 ring-white/15 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100">
                        <div className="flex-1 leading-tight">
                          <p className="text-sm font-medium">{p.metricLabel}</p>
                          <p className="text-xs text-neutral-400">{p.metricSub}</p>
                        </div>
                        <span className="text-sm font-semibold">{p.metricValue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative md:mt-10 flex justify-center gap-4">
        {(["featured", "side"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-8 py-3 text-[10px] md:text-[16px] font-medium transition ${
              tab === t ? "bg-white text-neutral-900" : "border-2 border-white/80 text-white hover:bg-white/10"
            }`}
          >
            {t === "featured" ? "Featured work" : "Side projects"}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;