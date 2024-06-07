import Image from "next/image";
import { Button } from "./ui/button";
import Abs from "../../public/icons/six-pack.png";
import Arms from "../../public/icons/bodybuilding.png";

export default function HeroBanner() {
  return (
    <div className="mt-[90px] flex flex-col items-center justify-center md:flex-row">
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
  );
}
