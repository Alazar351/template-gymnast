import Image from "next/image";
import Bg from "../../../public/assets/bg.jpg";
import Link from "next/link";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";

export default function FeaturesPage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonial />
    </>
  );
}

function Hero() {
  return (
    <div className="relative flex h-[400px] items-center justify-center">
      <Image
        src={Bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full bg-top object-cover object-top brightness-[.2]"
      />
      <div className="flex flex-col items-center justify-center">
        <p className="font-oswald text-[clamp(37px,4vw,56px)] font-bold uppercase tracking-tight text-white ">
          Our Features
        </p>
        <div className="mt-4 flex gap-2 text-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <p>Our Features</p>
        </div>
      </div>
    </div>
  );
}
