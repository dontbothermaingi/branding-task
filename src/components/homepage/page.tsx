import AboutPage from "./aboutpage";
import LandingPage from "./landingpage";
import Services from "./services";
import Tiktok from "./tiktok";

function Page() {
  return (
    <div>
      <section>
        <LandingPage />
      </section>

      <section>
        <AboutPage />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Tiktok />
      </section>
    </div>
  );
}

export default Page;
