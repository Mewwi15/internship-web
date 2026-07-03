"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Reveal from "./Reveal";
import { GALLERY, CATEGORIES, type CategoryKey } from "@/lib/gallery";

const STEP = 24;
const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSIjZWVmMWY1Ii8+PC9zdmc+";

export default function Gallery() {
  const [filter, setFilter] = useState<CategoryKey | "all">("all");
  const [shown, setShown] = useState(STEP);
  const [index, setIndex] = useState(-1);

  const items = useMemo(
    () => (filter === "all" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter],
  );
  const visible = items.slice(0, shown);
  const slides = useMemo(() => items.map((g) => ({ src: g.src })), [items]);

  const changeFilter = (key: CategoryKey | "all") => {
    setFilter(key);
    setShown(STEP);
    setIndex(-1);
  };

  return (
    <section id="gallery" className="soft-bg">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">แกลเลอรีผลงาน</span>
          <h2>รวมภาพตลอดการฝึกงาน</h2>
          <p>คลิกที่ภาพเพื่อดูขนาดเต็ม • เลือกหมวดเพื่อกรองผลงาน</p>
        </Reveal>

        <div className="gallery-filters">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              className={`chip${filter === c.key ? " active" : ""}`}
              onClick={() => changeFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="gallery">
          {visible.map((item, i) => (
            <button
              key={item.src}
              className="g-item"
              onClick={() => setIndex(i)}
              aria-label={`เปิดภาพผลงาน ${i + 1}`}
            >
              <Image
                src={item.src}
                width={item.w}
                height={item.h}
                sizes="(max-width:600px) 50vw, (max-width:920px) 33vw, 25vw"
                placeholder="blur"
                blurDataURL={BLUR}
                loading="lazy"
                alt={`ผลงานฝึกงาน ${i + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </button>
          ))}
        </div>

        {shown < items.length && (
          <div className="gallery-more">
            <button
              className="btn btn-ghost"
              onClick={() => setShown((s) => Math.min(s + STEP, items.length))}
            >
              แสดงรูปเพิ่มเติม
            </button>
          </div>
        )}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      />
    </section>
  );
}
