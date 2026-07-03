import Icon from "./Icon";
import Reveal from "./Reveal";
import { ABOUT_CARDS } from "@/lib/config";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">เกี่ยวกับการฝึกงาน</span>
          <h2>ผมได้ทำอะไรบ้าง?</h2>
          <p>
            งานที่ได้รับมอบหมายครอบคลุมหลายด้าน
            ทำให้ได้เรียนรู้ทักษะที่หลากหลายจากการลงมือทำจริง
          </p>
        </Reveal>
        <div className="grid-3">
          {ABOUT_CARDS.map((c, i) => (
            <Reveal key={c.icon} className="card" delay={i * 0.06}>
              <div className="ico">
                <Icon name={c.icon} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
