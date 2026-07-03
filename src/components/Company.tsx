import Reveal from "./Reveal";
import { CONFIG } from "@/lib/config";

export default function Company() {
  return (
    <section id="company" className="soft-bg">
      <div className="container info-grid">
        <Reveal className="info-photo logo-frame frame-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-cde-t.png"
            alt="โลโก้ภาควิชาคอมพิวเตอร์ศึกษา มจพ."
          />
        </Reveal>
        <Reveal>
          <span className="eyebrow">หน่วยงานที่ฝึกงาน</span>
          <h2>{CONFIG.companyName}</h2>
          <p>{CONFIG.companyDesc}</p>
          <ul className="pill-list">
            {CONFIG.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
