import Icon from "./Icon";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { CONFIG } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Internship Showcase 2025</span>
          <h1>
            เส้นทางการเรียนรู้และ
            <br />
            <span className="hl">ผลงานจากการฝึกงาน</span>ของผม
          </h1>
          <p className="lead">{CONFIG.heroLead}</p>
          <div className="btn-row">
            <a href="#gallery" className="btn btn-primary">
              ดูผลงานทั้งหมด <Icon name="arrow-right" />
            </a>
            <a href="#profile" className="btn btn-ghost">
              เกี่ยวกับผม
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="n">
                <CountUp value={CONFIG.statImages} />
              </div>
              <div className="l">ภาพผลงาน</div>
            </div>
            <div className="stat">
              <div className="n">
                <CountUp value={CONFIG.statWorkDays} />
              </div>
              <div className="l">วันทำงาน</div>
            </div>
            <div className="stat">
              <div className="n">
                <CountUp value={CONFIG.statHours} />
              </div>
              <div className="l">ชั่วโมงรวม</div>
            </div>
            <div className="stat">
              <div className="n">
                <CountUp value={CONFIG.statSkills} />
              </div>
              <div className="l">ทักษะใหม่</div>
            </div>
          </div>
        </div>
        <Reveal className="hero-visual">
          <figure className="hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero.jpg"
              alt="กิจกรรม OOP — Object Oriented Programming ที่ภาควิชาคอมพิวเตอร์ศึกษา"
            />
            <figcaption className="hero-photo-cap">
              OOP · Object Oriented Programming
              <span>กิจกรรมที่ภาควิชาคอมพิวเตอร์ศึกษา · มจพ.</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
