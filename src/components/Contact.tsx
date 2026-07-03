import Icon from "./Icon";
import Reveal from "./Reveal";
import { CONFIG } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact-card">
          <h2>สนใจพูดคุยหรือดูผลงานเพิ่มเติม?</h2>
          <p>
            ยินดีรับฟังทุกความคิดเห็นและโอกาสใหม่ ๆ
            ติดต่อผมได้ตามช่องทางด้านล่าง
          </p>
          <div className="contact-links">
            {CONFIG.contacts.map((c) => (
              <a key={c.label} href={c.url} target="_blank" rel="noopener noreferrer">
                <Icon name={c.icon} />
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
