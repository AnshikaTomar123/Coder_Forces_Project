import { useEffect, useRef } from "react";
import Certificate from "./components/Certificate";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LiveProjects from "./components/LiveProjects";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Roadmap from "./components/Roadmap";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import WorkshopDetails from "./components/WorkshopDetails";
import MasterSkills from "./components/MasterSkills";
import Benefits from "./components/Benefits";

function App() {
  const homeRef = useRef(null);
  const countdownRef = useRef(null);
  const workshopRef = useRef(null);
  const masterSkillsRef = useRef(null);
  const liveProjectsRef = useRef(null);
  const roadmapRef = useRef(null);
  const benefitsRef = useRef(null);
  const certificateRef = useRef(null);
  const registerRef = useRef(null);
  const faqRef = useRef(null);

  const sectionMap = {
    home: homeRef,
    countdown: countdownRef,
    workshop: workshopRef,
    masterSkills: masterSkillsRef,
    projects: liveProjectsRef,
    roadmap: roadmapRef,
    benefits: benefitsRef,
    certification: certificateRef,
    register: registerRef,
    faq: faqRef,
  };

  const scrollToSection = (key) => {
    sectionMap[key]?.current?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${key}`);
  };

  // 🔁 reload / direct URL support
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionMap[hash]) {
      setTimeout(() => {
        sectionMap[hash].current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div>
      <Navbar onNavigate={scrollToSection} />

      <section ref={homeRef}>
        <Hero onEnroll={() => scrollToSection("register")} />
      </section>

      <section ref={countdownRef}>
        <Countdown />
      </section>

      <section ref={workshopRef}>
        <WorkshopDetails />
      </section>

      <section ref={masterSkillsRef}>
        <MasterSkills onEnroll={() => scrollToSection("register")} />
      </section>

      <section ref={liveProjectsRef}>
        <LiveProjects />
      </section>

      <section ref={roadmapRef}>
        <Roadmap />
      </section>

      <section ref={benefitsRef}>
        <Benefits />
      </section>

      <section ref={certificateRef}>
        <Certificate onEnroll={() => scrollToSection("register")} />
      </section>

      <section ref={registerRef}>
        <Register />
      </section>

      <section ref={faqRef}>
        <FAQ />
      </section>

      <Footer />
    </div>
  );
}

export default App;
