import Reveal from "./Reveal";
import { THANKS, THANKS_INTRO } from "@/lib/config";

export default function Thanks() {
  return (
    <section id="thanks">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">คำขอบคุณ</span>
          <h2>ขอบคุณบุคลากรในภาควิชา</h2>
          <p>{THANKS_INTRO}</p>
        </Reveal>
        <div className="thanks-grid">
          {THANKS.map((t, i) => (
            <Reveal className="thanks-card" key={`${t.name}-${i}`} delay={i * 0.05}>
              <div className="thanks-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  style={{ objectPosition: t.pos }}
                />
              </div>
              <div className="thanks-name">
                {t.prefix && <span className="thanks-prefix">{t.prefix}</span>}
                {t.name}
              </div>
              <div className="thanks-role">{t.role}</div>
              <p className="thanks-note">{t.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
