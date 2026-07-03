import Icon from "./Icon";
import Reveal from "./Reveal";
import { PROF } from "@/lib/config";

export default function Professor() {
  return (
    <section id="professor">
      <div className="container">
        <Reveal className="prof-head">
          <span className="eyebrow">อาจารย์พี่เลี้ยง</span>
          <h2>ผู้อยู่เบื้องหลังการเรียนรู้</h2>
          <p>
            ตลอดการฝึกงาน ผมได้รับการดูแลและคำแนะนำอย่างใกล้ชิดจากอาจารย์พี่เลี้ยง
            ผู้ซึ่งเป็นทั้งครู ที่ปรึกษา และแรงบันดาลใจในการทำงาน
          </p>
        </Reveal>

        <Reveal className="prof-feature">
          <div className="prof-portrait">
            <div className="prof-portrait-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/professor.jpg"
                alt={`${PROF.name} — อาจารย์พี่เลี้ยง`}
              />
              <span className="prof-portrait-fallback" aria-hidden="true">
                <Icon name="academic" />
              </span>
            </div>
            <div className="prof-badge">
              <Icon name="mentor" />
              <span>อาจารย์ที่ปรึกษาการฝึกงาน</span>
            </div>
          </div>

          <div className="prof-content">
            <h3 className="prof-name">{PROF.name}</h3>
            <p className="prof-title">{PROF.title}</p>
            <p className="prof-affil">{PROF.affil}</p>

            <figure className="prof-quote">
              <Icon name="quote" className="prof-quote-mark" />
              <blockquote>{PROF.quote}</blockquote>
              <figcaption>{PROF.caption}</figcaption>
            </figure>

            <ul className="prof-creds">
              {PROF.creds.map((c) => (
                <li className="prof-cred" key={c.strong}>
                  <Icon name="check" />
                  <div>
                    <strong>{c.strong}</strong>
                    <span>{c.span}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
