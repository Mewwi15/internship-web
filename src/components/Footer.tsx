import { CONFIG } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="footer-logo"
          src="/assets/logo-mark.png"
          alt="โลโก้ภาควิชาคอมพิวเตอร์ศึกษา"
        />
        <p>
          © {year} {CONFIG.myNameFoot} • Internship Showcase •
          ภาควิชาคอมพิวเตอร์ศึกษา มจพ.
        </p>
      </div>
    </footer>
  );
}
