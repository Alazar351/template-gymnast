import Image from "next/image";
import Img from "../../public/assets/about.jpg";
import Lift from "../../public/icons/barbell.png";
import Medal from "../../public/icons/medal.png";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div className="mt-12 flex flex-col gap-6 py-12 tablet:flex-row">
      <div className="mx-auto w-full tablet:max-w-[540px]">
        <Image src={Img} alt="People at the gym" className="w-full" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <div>
          <h2 className="min-w-[fit-content] font-oswald text-[clamp(2.319rem,4vw,3.5rem)] font-bold">
            10 Years Experience
          </h2>
          <p className="text-[#666]">
            Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore
            dolore takima ipsum lorem rebum
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          <div>
            <Image
              src={Lift}
              alt="Lifiting a barbell"
              className="w-[clamp(45px,5.5vw,88px)]"
            />
            <h3 className="font-oswald text-[clamp(21px,5.5vw,24px)] font-bold text-[#343a40]">
              Certified GYM Center
            </h3>
            <p className="mt-2 text-[#666]">
              Ipsum sanctu dolor ipsum dolore sit et kasd duo
            </p>
          </div>
          <div>
            <Image
              src={Medal}
              alt="Award Medal"
              className="w-[clamp(45px,5.5vw,88px)]"
            />
            <h3 className="font-oswald text-[clamp(21px,5.5vw,24px)] font-bold text-[#343a40]">
              Award Winning
            </h3>
            <p className="mt-2 text-[#666]">
              Ipsum sanctu dolor ipsum dolore sit et kasd duo
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          className="mt-6 h-[50px] border-2 border-[#E31C25] bg-transparent px-6 py-2 text-[20px] text-[#E31C25]"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
