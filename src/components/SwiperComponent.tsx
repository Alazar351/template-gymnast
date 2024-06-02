"use client";
import Img1 from "../../public/assets/testimonial-1.jpg";
import Img2 from "../../public/assets/testimonial-2.jpg";
import Img3 from "../../public/assets/testimonial-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function SwiperComponent() {
  const swiperPaginationStyles = {
    "--swiper-pagination-color": "white",
    "--swiper-pagination-left": "auto",
    "--swiper-pagination-right": "8px",
    "--swiper-pagination-bottom": "0px",
    "--swiper-pagination-top": "auto",
    "--swiper-pagination-bullet-size": "8px",
    "--swiper-pagination-bullet-width": "32px",
    "--swiper-pagination-bullet-height": "4px",
    "--swiper-pagination-bullet-inactive-color": "#888888",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-opacity": "1",
    "--swiper-pagination-bullet-horizontal-gap": "4px",
    "--swiper-pagination-bullet-vertical-gap": "6px",
    "--swiper-pagination-bullet-border-radius": "0px",
    "--swiper-pagination-fraction-color": "inherit",
    "--swiper-pagination-progressbar-bg-color": "rgba(0, 0, 0, 0.25)",
    "--swiper-pagination-progressbar-size": "4px",
  };
  return (
    <>
      <Swiper
        //   @ts-ignore
        style={swiperPaginationStyles}
        spaceBetween={0}
        speed={1500}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-[274px] w-[446px] md:h-[322px] md:w-[282px] tablet:h-[280px] tablet:w-[397px]"
      >
        <SwiperSlide className=" ">
          <div className="flex items-center justify-start gap-6">
            <Image
              src={Img1}
              width={100}
              height={100}
              alt="testimonial"
              className="size-20 rounded-full border-8 border-[#343A40]"
            />
            <div>
              <p className="font-oswald text-[clamp(21px,5vw,24px)] font-normal text-[#E31C25]">
                Client Name
              </p>
              <p className="mt-2 text-white">Profession</p>
            </div>
          </div>
          <div className="relative mt-6 border border-[#dee2e6] bg-[#343A40] p-6 text-white">
            <p>
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
              elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus
              clita
            </p>
            <div className="absolute -top-[9px] left-[32px] z-10 size-4 rotate-45 border border-b-0 border-r-0 border-[#dee2e6] bg-[#343A40]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className="flex items-center justify-start gap-6">
            <Image
              src={Img2}
              width={100}
              height={100}
              alt="testimonial"
              className="size-20 rounded-full border-8 border-[#343A40]"
            />
            <div>
              <p className="font-oswald text-[clamp(21px,5vw,24px)] font-normal text-[#E31C25]">
                Client Name
              </p>
              <p className="mt-2 text-white">Profession</p>
            </div>
          </div>
          <div className="relative mt-6 border border-[#dee2e6] bg-[#343A40] p-6 text-white">
            <p>
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
              elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus
              clita
            </p>
            <div className="absolute -top-[9px] left-[32px] z-10 size-4 rotate-45 border border-b-0 border-r-0 border-[#dee2e6] bg-[#343A40]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className="flex items-center justify-start gap-6">
            <Image
              src={Img3}
              width={100}
              height={100}
              alt="testimonial"
              className="size-20 rounded-full border-8 border-[#343A40]"
            />
            <div>
              <p className="font-oswald text-[clamp(21px,5vw,24px)] font-normal text-[#E31C25]">
                Client Name
              </p>
              <p className="mt-2 text-white">Profession</p>
            </div>
          </div>
          <div className="relative mt-6 border border-[#dee2e6] bg-[#343A40] p-6 text-white">
            <p>
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
              elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus
              clita
            </p>
            <div className="absolute -top-[9px] left-[32px] z-10 size-4 rotate-45 border border-b-0 border-r-0 border-[#dee2e6] bg-[#343A40]"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
