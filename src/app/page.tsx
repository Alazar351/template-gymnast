import About from "@/components/About";
import Banner from "@/components/Banner";
import Bmi from "@/components/Bmi";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LayoutWrapper from "@/components/LayoutWrapper";
import Newsletter from "@/components/Newsletter";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <>
      <Hero />
      <LayoutWrapper>
        <About />
      </LayoutWrapper>
      <Banner />
      <LayoutWrapper>
        <Features />
      </LayoutWrapper>
      <Newsletter />
      <LayoutWrapper>
        <Schedule />
      </LayoutWrapper>
      <Bmi />
    </>
  );
}
