import Icon from "./Icon";
import Reveal from "./Reveal";
import { CONFIG, PROFILE_BLOCKS } from "@/lib/config";

export default function Profile() {
  return (
    <section id="profile" className="soft-bg">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">โปรไฟล์ผู้ฝึกงาน</span>
          <h2>เกี่ยวกับผม</h2>
        </Reveal>
        <div className="profile">
          <Reveal className="profile-card">
            <div className="ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/miu-training.jpg" alt="นายพงศกร ศรีษเกตุ (มิว) — ระหว่างการอบรม" />
            </div>
            <div className="body">
              <div className="name">{CONFIG.myName}</div>
              <div className="role">{CONFIG.myRole}</div>
              <div className="kv">
                <span className="k">รหัสนักศึกษา</span>
                <span>{CONFIG.studentId}</span>
              </div>
              <div className="kv">
                <span className="k">คณะ</span>
                <span>{CONFIG.major}</span>
              </div>
              <div className="kv">
                <span className="k">มหาวิทยาลัย</span>
                <span>{CONFIG.uniShort}</span>
              </div>
              <div className="kv">
                <span className="k">ระยะเวลา</span>
                <span>{CONFIG.period}</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            {PROFILE_BLOCKS.map((b) => (
              <div className="detail-block" key={b.icon}>
                <h3>
                  <Icon name={b.icon} /> {b.title}
                </h3>
                <ul>
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
