import React from "react";
import { stack } from "./Portfolio";

const Coin = ({ label, i }: { label: string; i: number }) => (
  <div
    className="group grid h-28 w-28 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#f5f5f5,#8a8a8a_45%,#2a2a2a_80%)] p-[6px] shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition duration-500 hover:-translate-y-2 hover:rotate-12 md:h-36 md:w-36"
    style={{ animation: `float 5s ease-in-out ${i * 0.3}s infinite` }}
  >
    <div className="grid h-full w-full place-items-center rounded-full bg-[radial-gradient(circle_at_40%_35%,#6b6b6b,#1c1c1c)] ring-2 ring-sky-300/30">
      <span className="font-serif text-lg font-bold tracking-tight text-neutral-300 [text-shadow:0_1px_0_#000,0_-1px_0_#aaa] md:text-xl">
        {label}
      </span>
    </div>
  </div>
);

const Stack = () => (
  <section id="stack" className="bg-black px-4 py-28 text-center text-white md:px-6">
    <h2 className="text-3xl font-semibold tracking-tight md:text-7xl">Explore {stack.length}+ tools I use</h2>
    <p className="mx-auto mt-8 max-w-3xl text-lg md:text-2xl md:leading-snug">
      From React to Spring, I pick the right tool for the job — and I&apos;m always adding more to the
      collection.
    </p>
    <p className="mt-6 text-sm text-neutral-400">Always learning. Coffee at risk.</p>

    <a
      href="#contact"
      className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-lg  text-neutral-900 transition hover:bg-neutral-200"
    >
      Work with me
    </a>

    <div className="mx-auto mt-20 flex max-w-5xl flex-wrap justify-center gap-6 md:gap-8">
      {stack.map((s, i) => (
        <Coin key={s} label={s} i={i} />
      ))}
    </div>

    <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
  </section>
);

export default Stack;