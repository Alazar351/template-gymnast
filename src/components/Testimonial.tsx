import Image from "next/image";
import SwiperComponent from "./SwiperComponent";
import BackgroundImg from "../../public/assets/carousel-2.jpg";

export default function Testimonial() {
  return (
    <div className="relative w-full overflow-clip">
      <div className="absolute inset-0 hidden grid-cols-2  md:grid">
        <div></div>
        <Image
          src={BackgroundImg}
          alt=""
          width={500}
          height={500}
          className=" -z-20 h-full w-full object-cover brightness-50"
        />
      </div>
      <div className="mx-auto flex items-center justify-center md:max-w-[720px] tablet:max-w-[960px] lg:max-w-[1140px]">
        <div className=" ml-[15px] flex h-[450px] w-full items-center justify-center bg-black">
          <SwiperComponent />
        </div>
        <div>
          <div className="mx-[15px] hidden md:block md:w-[314px] tablet:w-[434px] lg:w-[524px] ">
            <h4 className="w-full font-oswald text-[clamp(21px,5vw,24px)] font-light text-[#E31C25]">
              Testimonial
            </h4>
            <p className=" text-left font-oswald text-[clamp(37px,4vw,56px)] font-bold text-white">
              What Our Clients Say?
            </p>
            <p className="mt-6 text-left text-white ">
              Vero elitr lorem magna justo magna justo at justo est ipsum sed
              clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor
              clita clita rebum kasd magna erat diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
