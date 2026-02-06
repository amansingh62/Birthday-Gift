import AboutSection from "@/components/AboutSection";
import BirthdayLanding from "@/components/BirthdayHero";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <main className="min-h-screen">
      <section id="home">
        <BirthdayLanding />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="features">
        <FeaturesSection />
      </section>
      
      <section id="footer">
        <Footer />
      </section>
    </main>
    </>
  );
}
