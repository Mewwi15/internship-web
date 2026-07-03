"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { NAV_LINKS } from "@/lib/config";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = [...NAV_LINKS.map((l) => l.href.slice(1)), "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-logo"
            src="/assets/logo-fte.png"
            alt="โลโก้คณะครุศาสตร์อุตสาหกรรม มจพ."
          />
          <span className="brand-sep" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-logo"
            src="/assets/logo-dept.png"
            alt="โลโก้ภาควิชาคอมพิวเตอร์ศึกษา"
          />
          <span className="brand-name">การฝึกงานของผม</span>
        </a>
        <button
          className="burger"
          aria-label="เมนู"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name="menu" />
        </button>
        <nav className={`nav-links${open ? " show" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            ติดต่อ
          </a>
        </nav>
      </div>
    </header>
  );
}
