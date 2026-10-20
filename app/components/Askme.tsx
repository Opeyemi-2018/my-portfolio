"use client";
import React, { useState } from "react";
import { profile, qa } from "./Portfolio";

const AskMe = () => {
  const [active, setActive] = useState(0);
  const item = qa[active];

  return (
    <section id="ask" className="relative overflow-hidden bg-black px-4 pt-6 md:pt-0 md:pt-28 text-center text-white md:px-6">
      {/* hills glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(120,120,140,0.25),transparent_70%)]" />

      <h2 className="relative text-3xl font-semibold tracking-tight md:text-7xl">Ask, and I&apos;ll answer</h2>
      <p className="relative mx-auto mt-8 max-w-2xl text-lg md:text-2xl md:leading-snug">
        Curious how I work? Tap a question below — or just send me a message.
      </p>

      <div className="relative mt-10 flex  justify-center gap-3">
        {qa.map((x, i) => (
          <button
            key={x.q}
            onClick={() => setActive(i)}
            className={`rounded-full text-[8px] md:text-[16px] px-3 md:px-6 py-2 md:py-3 text-base font-medium transition ${
              active === i ? "bg-white text-neutral-900" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {x.q}
          </button>
        ))}
      </div>

      {/* Phone mockup */}
      <div className="relative mx-auto mt-7 md:mt-16 h-[520px] w-[330px] rounded-t-[56px] border-[10px] border-b-0 border-neutral-800 bg-neutral-950 px-6 pt-10 shadow-[0_0_80px_rgba(255,255,255,0.06)] md:w-[380px]">
        <div className="flex items-center justify-between">
          <span className="text-2xl">×</span>
          <span className="text-lg font-medium">Ask </span>
          <span className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-50 via-slate-300 to-slate-700" />
        </div>

        <div key={active} className="mt-10 space-y-5 text-left">
          <div className="ml-auto max-w-[80%] animate-[fadeUp_.4s_ease] rounded-2xl rounded-br-sm bg-neutral-700 px-4 py-3 text-[17px]">
            {item.q}
          </div>
          <div className="max-w-[90%] animate-[fadeUp_.6s_ease] rounded-2xl rounded-bl-sm bg-neutral-800/80 px-4 py-4">
            <p className="text-sm text-neutral-400">{profile.name}</p>
            <p className="mt-1 text-[16px] leading-relaxed">{item.a}</p>
            <a href="#contact" className="mt-3 inline-block text-sm font-medium text-emerald-400">
              Continue the chat ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
};

export default AskMe;