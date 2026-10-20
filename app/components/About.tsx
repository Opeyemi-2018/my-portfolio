import React from "react";
import { aboutPoints, profile } from "./Portfolio";

const About = () => (
  <section id="about" className="bg-white px-4 py-10 md:px-6 md:py-40">
    <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-7xl">
          Code you can trust
        </h2>
        <p className="mt-10 text-[16px] leading-relaxed text-neutral-800  md:leading-snug">
          I write software the way banks guard money — secure by default, tested end to end, and
          documented so the next engineer can move fast. Clean architecture, thoughtful APIs and
          interfaces people enjoy.
        </p>

        {/* <div className="mt-10 flex gap-10">
          {aboutPoints.map((x) => (
            <div key={x.label}>
              <p className="text-3xl font-semibold text-neutral-900">{x.value}</p>
              <p className="text-sm text-neutral-500">{x.label}</p>
            </div>
          ))}
        </div> */}

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block rounded-full bg-neutral-900 px-8 py-3  text-white transition hover:bg-neutral-700"
        >Resume
        </a>
      </div>

      {/* Metallic shield with code symbol */}
      <div className="flex justify-center">
        <div className="relative h-[380px] w-[320px] drop-shadow-2xl md:h-[460px] md:w-[380px]">
          <div
            className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-400 to-neutral-200"
            style={{ clipPath: "polygon(0 0,100% 0,100% 62%,50% 100%,0 62%)", borderRadius: 24 }}
          />
          <div
            className="absolute inset-[10px] bg-gradient-to-br from-white via-neutral-300 to-neutral-400"
            style={{ clipPath: "polygon(0 0,100% 0,100% 62%,50% 100%,0 62%)" }}
          />
          <span className="absolute inset-x-0 top-[24%] text-center text-[120px] font-black leading-none tracking-tighter text-black md:text-[150px]">
            &lt;/&gt;
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default About;