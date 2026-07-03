import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "การฝึกงานของผม | Internship Showcase — พงศกร ศรีษเกตุ",
  description:
    "เว็บไซต์สรุปประสบการณ์การฝึกงาน รวมผลงานและการเรียนรู้ ณ ภาควิชาคอมพิวเตอร์ศึกษา มจพ.",
  icons: { icon: "/assets/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={prompt.variable}>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
