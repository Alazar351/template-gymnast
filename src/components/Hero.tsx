"use client";

import Img1 from "../../public/assets/carousel-1.jpg";
import Img2 from "../../public/assets/carousel-2.jpg";
import Abs from "../../public/icons/six-pack.png";
import Arms from "../../public/icons/bodybuilding.png";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

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
            <Image src={Img1} priority alt="First hero image" />
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

      <div className="mt-[90px] flex flex-col items-center justify-center md:flex-row tablet:-mt-20">
        <div className=" relative h-[450px] max-w-[508px] bg-red-600 px-12 md:max-w-[344px] tablet:max-w-[464px] lg:max-w-[554px]">
          <div className="flex h-full flex-col items-end justify-center">
            <h3 className="text-right font-oswald text-[clamp(2.319rem,5.5vw,3.5rem)] font-bold capitalize text-white">
              Body building
            </h3>
            <p className="mt-4 text-right text-white">
              Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum
              ut diam sit dolores, dolor sit eos sea sanctus erat lorem nonumy
              sanctus takimata. Kasd amet sit sadipscing at..
            </p>
            <Button
              variant="outline"
              className="mt-6 h-[50px] rounded-none border-2 bg-transparent px-6 py-2 text-[20px] text-white md:mt-12 md:h-[66px] md:px-12 md:py-4 tablet:mt-10"
            >
              Join Now
            </Button>
            <Image
              src={Abs}
              alt="Abs icon"
              aria-hidden="true"
              className="absolute bottom-0 left-0 size-[200px] opacity-10"
            />
          </div>
        </div>
        <div className="relative h-[450px] max-w-[508px] bg-black px-12 md:max-w-[344px] tablet:max-w-[464px] lg:max-w-[554px]">
          <div className="flex h-full flex-col items-start justify-center">
            <h3 className="text-left font-oswald text-[clamp(2.319rem,5.5vw,3.5rem)] font-bold capitalize text-white">
              Muscle building
            </h3>
            <p className="mt-4 text-left text-white">
              Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum
              ut diam sit dolores, dolor sit eos sea sanctus erat lorem nonumy
              sanctus takimata. Kasd amet sit sadipscing at..
            </p>
            <Button
              variant="outline"
              className="mt-6 h-[50px] rounded-none border-2 bg-transparent px-6 py-2 text-[20px] text-white md:mt-12 md:h-[66px] md:px-12 md:py-4 tablet:mt-10"
            >
              Join Now
            </Button>
            <Image
              src={Arms}
              alt="Arm icon"
              aria-hidden="true"
              className="absolute bottom-0 right-0 size-[200px] opacity-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
