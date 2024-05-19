import Image from "next/image";
import Img1 from "../../public/assets/feature-1.jpg";
import Img2 from "../../public/assets/feature-2.jpg";
import Img3 from "../../public/assets/feature-3.jpg";
import Img4 from "../../public/assets/feature-4.jpg";
import Icon1 from "../../public/icons/white-barbell.png";
import Icon2 from "../../public/icons/white-training.png";
import Icon3 from "../../public/icons/white-trends.png";
import Icon4 from "../../public/icons/white-support.png";

export default function Features() {
  return (
    <section className="mt-12 py-12">
      <div className="flex flex-col items-center justify-center">
        <h4 className="font-oswald text-[clamp(21px,5vw,24px)] font-bold text-[#E31C25]">
          Why Choose Us?
        </h4>
        <p className="mt-8 font-oswald text-[clamp(37px,5vw,56px)] font-bold text-[#343a40]">
          Benifits of Joining Our GYM
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className="flex flex-col  md:w-[360px] md:flex-row tablet:w-[480px] lg:w-[570px]">
          <div className="relative p-4 md:my-auto tablet:my-0 tablet:min-w-[210px] lg:min-w-[238px] ">
            <Image src={Img1} alt="Feature 1" />
            <div className="absolute right-0 top-0 size-[70px] bg-red-600">
              <Image src={Icon1} alt="Icon 1" className="p-4" />
            </div>
          </div>
          <div className="mt-4 px-[15px] md:mt-0 md:max-w-[210px] tablet:max-w-[280px] lg:max-w-[333px] ">
            <h4 className="w-full font-oswald text-[clamp(21px,5vw,24px)] font-bold text-[#343a40]">
              Video Instruction
            </h4>
            <p className="mt-2 w-full text-[#666]">
              Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
              lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
              erat tempor
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:w-[360px] md:flex-row tablet:w-[480px] lg:w-[570px]">
          <div className="relative p-4 md:my-auto tablet:my-0 tablet:min-w-[210px] lg:min-w-[238px] ">
            <Image src={Img2} alt="Feature 2" />
            <div className="absolute right-0 top-0 size-[70px] bg-red-600">
              <Image src={Icon2} alt="Icon 2" className="p-4" />
            </div>
          </div>
          <div className="mt-4 px-[15px] md:mt-0 md:max-w-[210px] tablet:max-w-[280px] lg:max-w-[333px] ">
            <h4 className="w-full font-oswald text-[clamp(21px,5vw,24px)] font-bold text-[#343a40]">
              Training Calendar
            </h4>
            <p className="mt-2 w-full text-[#666]">
              Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
              lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
              erat tempor
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:w-[360px] md:flex-row tablet:w-[480px] lg:w-[570px]">
          <div className="relative p-4 md:my-auto tablet:my-0 tablet:min-w-[210px] lg:min-w-[238px] ">
            <Image src={Img3} alt="Feature 3" />
            <div className="absolute right-0 top-0 size-[70px] bg-red-600">
              <Image src={Icon3} alt="Icon 3" className="p-4" />
            </div>
          </div>
          <div className="mt-4 px-[15px] md:mt-0 md:max-w-[210px] tablet:max-w-[280px] lg:max-w-[333px] ">
            <h4 className="w-full font-oswald text-[clamp(21px,5vw,24px)] font-bold text-[#343a40]">
              Free Apps & WiFi
            </h4>
            <p className="mt-2 w-full text-[#666]">
              Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
              lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
              erat tempor
            </p>
          </div>
        </div>
        <div className="flex flex-col  md:w-[360px] md:flex-row tablet:w-[480px] lg:w-[570px]">
          <div className="relative p-4 md:my-auto tablet:my-0 tablet:min-w-[210px] lg:min-w-[238px] ">
            <Image src={Img4} alt="Feature 4" />
            <div className="absolute right-0 top-0 size-[70px] bg-red-600">
              <Image src={Icon4} alt="Icon 4" className="p-4" />
            </div>
          </div>
          <div className="mt-4 px-[15px] md:mt-0 md:max-w-[210px] tablet:max-w-[280px] lg:max-w-[333px] ">
            <h4 className="w-full font-oswald text-[clamp(21px,5vw,24px)] font-bold text-[#343a40]">
              Community Support
            </h4>
            <p className="mt-2 w-full text-[#666]">
              Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
              lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
              erat tempor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
