"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`to-top${show ? " show" : ""}`}
      aria-label="กลับขึ้นบนสุด"
    >
      <Icon name="arrow-up" />
    </a>
  );
}
