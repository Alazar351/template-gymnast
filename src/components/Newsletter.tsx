import Image from "next/image";
import Bg from "../../public/assets/bg.jpg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Newsletter() {
  return (
    <section className="relative mt-12 py-24">
      <Image
        src={Bg}
        alt="background"
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full bg-top object-cover brightness-50"
      />
      <div className="flex h-full w-full flex-col items-center justify-center ">
        <h4 className="font-oswald text-[clamp(37px,5vw,54px)] font-bold text-white">
          Subscribe Our Newsletter
        </h4>
        <p className="mt-4 text-white">
          Subscribe and get our latest article in your inbox
        </p>
        <div className="mt-6 flex">
          <Input
            type="email"
            placeholder="Your Email"
            className="rounded-none px-4 py-2 text-[20px]"
          />
          <Button className="rounded-none bg-[#e31c25] px-[12px] py-[6px] hover:bg-[#e31c25]/80">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
