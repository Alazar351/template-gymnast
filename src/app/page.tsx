import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Bmi from "@/components/Bmi";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LayoutWrapper from "@/components/LayoutWrapper";
import Newsletter from "@/components/Newsletter";
import Schedule from "@/components/Schedule";
import Staff from "@/components/Staff";
import Testimonial from "@/components/Testimonial";

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
      <LayoutWrapper>
        <Staff />
      </LayoutWrapper>
      <Testimonial />
      <LayoutWrapper>
        <Blog />
      </LayoutWrapper>
      <Footer />
    </>
  );
}
