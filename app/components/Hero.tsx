import React from "react";
import Link from "next/link";
import { profile, Project, projects } from "./Portfolio";
const stats = [
  { value: "4+", label: "Years experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "10+", label: "Happy clients" },
];

const specialties = [
  { title: "Frontend", items: "React, Next.js, TypeScript, Tailwind" },
  { title: "Backend", items: "Java, Spring Boot, Spring Security, Node.js" },
  { title: "Data & DevOps", items: "PostgreSQL, Redis, Docker, AWS, CI/CD" },
];
const ProjectCard = ({
  p,
  center = false,
}: {
  p: Project;
  center?: boolean;
}) => (
  <Link
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative block shrink-0 overflow-hidden rounded-[20px] shadow-xl transition-transform duration-500 hover:-translate-y-2 ${
      center
        ? "h-[440px] w-[300px] md:h-[520px] md:w-[360px]"
        : "h-[400px] w-[280px] md:h-[470px] md:w-[330px]"
    }`}
  >
    {/* Background: image if provided, else gradient */}
    {p.image ? (
      <img
        src={p.image}
        alt={p.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
    ) : (
      <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`}>
        {/* soft light blob for depth */}
        <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

    {/* Center "balance" block */}
    <div className="absolute inset-x-0 top-[38%] flex flex-col items-center text-white">
      <span className="text-xs opacity-90">{p.tag}</span>
      <span className="mt-1 text-4xl font-bold tracking-tight md:text-5xl">
        {p.stat}
      </span>
      <span className="mt-3 rounded-full bg-white px-5 py-2 text-sm font-medium text-neutral-900">
        {p.title}
      </span>
    </div>

    {/* Bottom chip */}
    <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-indigo-500 text-sm text-white">
        ↗
      </span>
      <div className="flex-1 leading-tight">
        <p className="text-sm font-medium text-neutral-900">{p.metricLabel}</p>
        <p className="text-xs text-neutral-500">{p.metricSub}</p>
      </div>
      <span className="text-sm font-medium text-neutral-900">
        {p.metricValue}
      </span>
    </div>
  </Link>
);

const Hero = () => {
  const [left, middle, right] = projects.filter((p) => p.featured);

  return (
    <section className="bg-white  pb-24 pt-48 text-center  md:px-6">
      <h1 className="mx-auto max-w-4xl text-5xl  font-semibold tracking-tight text-neutral-900 md:text-7xl">
        Hey I&apos;m {profile.name},
      </h1>
      <p className="mx-auto px-3 mt-8 max-w-3xl text-[16px] text-neutral-800 md:text-[20px] md:leading-snug">
        a {profile.role.toLowerCase()} who designs, builds and ships fast,
        reliable web apps, from rock-solid Backend APIs to pixel-perfect
        frontends .
      </p>
      {/* <a
        href="#work"
        className="mt-10 inline-block rounded-full bg-neutral-900 px-9 py-4 text-[15px] font-medium text-white transition hover:bg-neutral-700"
      >
        See my work
      </a> */}

      {/* About box */}
      {/* About box */}
      <div className="relative mx-auto mt-16 grid max-w-6xl overflow-hidden md:rounded-[32px] bg-neutral-900 text-left text-white shadow-2xl md:grid-cols-[1fr_1.15fr]">
        {/* Blurred photo behind the whole box — this is what the glass "sees" */}
        <img
          src="/ope-professional.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-110 object-cover object-[50%_25%] opacity-60 blur-2xl"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Photo (lighter overlays) */}
        <div className="relative h-[420px] md:h-auto md:min-h-[560px]">
          <img
            src="/ope-professional.png"
            alt="Profile photo"
            className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
          />
          {/* soft vignette, face stays clear */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_38%,transparent_0%,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
          {/* gentle bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Info on glass */}
        <div className="relative flex flex-col justify-center p-4 md:p-6">
          <div className="rounded-[24px] bg-black/30 p-6 ring-1 ring-white/15 backdrop-blur-md md:p-10">
            <div className="grid grid-cols-3 gap-4 border-b border-white/15 pb-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-semibold md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-neutral-300 md:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {specialties.map((s) => (
                <div
                  key={s.title}
                  className="flex flex-col gap-1 rounded-2xl bg-white/[0.08] px-5 py-4 ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-white/[0.14] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium">{s.title}</span>
                  <span className="text-sm text-neutral-300">{s.items}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-2 font-medium text-neutral-900 transition hover:bg-neutral-200"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="rounded-full border-2 border-white/70 px-7 py-2 font-medium transition hover:bg-white/10"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
