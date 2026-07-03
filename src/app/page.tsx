import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Company from "@/components/Company";
import University from "@/components/University";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Professor from "@/components/Professor";
import Thanks from "@/components/Thanks";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Company />
        <University />
        <Timeline />
        <Gallery />
        <Professor />
        <Thanks />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
