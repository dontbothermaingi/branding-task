import { useRef } from "react";
import AboutPage from "./aboutpage";
import Footer from "./footer";
import LandingPage from "./landingpage";
import Services from "./services";
import Tiktok from "./tiktok";
import Whatwedeal from "./whatwedeal";

function Page() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const tiktokRef = useRef<HTMLElement | null>(null);

  function scrollToAbout() {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToServices() {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToTiktok() {
    tiktokRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <section>
        <LandingPage
          scrollToAbout={scrollToAbout}
          scrollToServices={scrollToServices}
          scrollToTiktok={scrollToTiktok}
        />
      </section>

      <section ref={aboutRef}>
        <AboutPage />
      </section>

      <section ref={servicesRef}>
        <Whatwedeal />
      </section>

      <section ref={tiktokRef}>
        <Tiktok />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Page;
