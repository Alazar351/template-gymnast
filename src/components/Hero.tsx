"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Img1 from "../../public/assets/carousel-1.jpg";
import Img2 from "../../public/assets/carousel-2.jpg";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Hero() {
  return (
    <section className="">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="-ml-0">
          <CarouselItem className="relative basis-full pl-0">
            <Image
              src={Img1}
              priority
              alt="First hero image"
              className="w-full"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center justify-center">
                <p className="text-center font-oswald text-[25px] font-medium capitalize text-[#E31C25] md:text-[26px]">
                  Gym & Fitness Center
                </p>
                <p className="mt-2 w-max text-center font-oswald  text-[65px] font-bold capitalize text-white md:mt-6 md:text-[73px]">
                  Best Gym In Town
                </p>
                <Button
                  variant="outline"
                  className="mt-4 h-[50px] rounded-none border-2 bg-transparent px-4 py-2 text-[20px] text-white md:mt-12 md:h-[66px] md:px-12 md:py-4"
                >
                  Join Us Now
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="relative basis-full pl-0">
            <Image src={Img2} alt="Second hero image" className="w-full" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center justify-center">
                <p className="text-center font-oswald text-[25px] font-medium capitalize text-[#E31C25] md:text-[26px]">
                  Gym & Fitness Center
                </p>
                <p className="mt-2 w-max text-center font-oswald  text-[65px] font-bold capitalize text-white md:mt-6 md:text-[73px]">
                  Get body in shape
                </p>
                <Button
                  variant="outline"
                  className="mt-4 h-[50px] rounded-none border-2 bg-transparent px-4 py-2 text-[20px] text-white md:mt-12 md:h-[66px] md:px-12 md:py-4"
                >
                  Join Us Now
                </Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 h-full w-1/12 rounded-none border-none bg-transparent text-center text-white/50 hover:bg-transparent hover:text-white " />
        <CarouselNext className="absolute right-0 top-1/2 h-full w-1/12 rounded-none border-none bg-transparent text-center text-white/50 hover:bg-transparent hover:text-white " />
      </Carousel>
    </section>
  );
}
