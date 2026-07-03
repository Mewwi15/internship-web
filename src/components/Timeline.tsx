import Icon from "./Icon";
import Reveal from "./Reveal";
import { TIMELINE } from "@/lib/config";

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">เส้นทางการฝึกงาน</span>
          <h2>ตลอดช่วงการฝึกงาน</h2>
          <p>ลำดับงานและการเรียนรู้ตั้งแต่วันแรก (20 เม.ย.) จนถึงการส่งมอบงาน (10 มิ.ย. 2569)</p>
        </Reveal>

        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <Reveal className="tl-item" key={t.title} delay={i * 0.06}>
              <div className="tl-marker">
                <Icon name={t.icon} />
              </div>
              <div className="tl-card">
                <span className="tl-period">{t.period}</span>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
