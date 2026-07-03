import Reveal from "./Reveal";
import { CONFIG } from "@/lib/config";

export default function University() {
  return (
    <section id="university">
      <div className="container info-grid">
        <Reveal>
          <span className="eyebrow">สถาบันการศึกษา</span>
          <h2>{CONFIG.uniName}</h2>
          <p>{CONFIG.uniDesc}</p>
        </Reveal>
        <Reveal className="info-photo logo-frame frame-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-fte.png" alt="โลโก้คณะครุศาสตร์อุตสาหกรรม มจพ." />
        </Reveal>
      </div>
    </section>
  );
}
