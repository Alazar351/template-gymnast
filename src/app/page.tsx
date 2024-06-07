import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Bmi from "@/components/Bmi";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HeroBanner from "@/components/HeroBanner";
import LayoutWrapper from "@/components/LayoutWrapper";
import Newsletter from "@/components/Newsletter";
import Schedule from "@/components/Schedule";
import Staff from "@/components/Staff";
import Testimonial from "@/components/Testimonial";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="tablet:-mt-20">
        <HeroBanner />
      </div>
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
      <LayoutWrapper>
        <Staff />
      </LayoutWrapper>
      <Testimonial />
      <LayoutWrapper>
        <Blog />
      </LayoutWrapper>
    </>
  );
}
