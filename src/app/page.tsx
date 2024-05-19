import About from "@/components/About";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <LayoutWrapper>
        <About />
      </LayoutWrapper>
      <Banner />
    </>
  );
}
