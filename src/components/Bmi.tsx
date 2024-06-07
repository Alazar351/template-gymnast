"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Img from "../../public/assets/carousel-1.jpg";

export default function Bmi() {
  return (
    <div className="relative mt-12 w-full">
      <div className="grid grid-cols-1 items-center justify-center md:h-[432px] md:grid-cols-2">
        <div className="relative hidden h-full  md:block">
          <Image
            src={Img}
            alt="background"
            aria-hidden="true"
            className="absolute -z-10 h-full object-cover brightness-50"
          />
        </div>

        <div className="inset-x-0  md:absolute">
          <div className="mx-auto flex items-center justify-center md:max-w-[720px] tablet:max-w-[960px] lg:max-w-[1140px]">
            <div className="flex w-full  md:h-[432px]">
              <div className=" hidden h-full flex-col items-center justify-center px-5 md:flex ">
                <div className=" md:w-[314px] tablet:w-[434px] lg:w-[524px] ">
                  <h4 className="w-full font-oswald text-[clamp(21px,5vw,24px)] font-light text-[#E31C25]">
                    Body Mass Index
                  </h4>
                  <p className=" text-left font-oswald text-[clamp(37px,5vw,56px)] font-bold text-white">
                    What is BMI?
                  </p>
                  <p className=" text-left text-white ">
                    Vero elitr lorem magna justo magna justo at justo est ipsum
                    sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct
                    dolor clita clita rebum kasd magna erat diam
                  </p>
                </div>
              </div>
              <div className=" flex h-full w-full flex-col items-center justify-center bg-black py-12 md:mr-[15px] ">
                <h1 className="mb-4 font-oswald text-[clamp(21px,5vw,40px)] font-medium text-white">
                  Calculate your BMI
                </h1>
                <div className="grid grid-cols-2 gap-3 px-4">
                  <Input
                    placeholder="Weight (KG)"
                    className="rounded-none border-[#ced4da] bg-[#343a40] text-[20px] text-white focus:border-[#f18e92] focus:shadow-[0px_0px_10px_0px_#F18E92]"
                  />
                  <Input
                    placeholder="Heiight (CM)"
                    className="rounded-none border-[#ced4da] bg-[#343a40] text-[20px] text-white focus:border-[#f18e92] focus:shadow-[0px_0px_10px_0px_#F18E92]"
                  />
                  <Input
                    placeholder="Age"
                    className="rounded-none border-[#ced4da] bg-[#343a40] text-[20px] text-white focus:border-[#f18e92] focus:shadow-[0px_0px_10px_0px_#F18E92]"
                  />
                  <select className="rounded-none border border-[#ced4da] bg-[#343a40] text-[20px] text-muted-foreground focus:border-[#f18e92] focus:shadow-[0px_0px_10px_0px_#F18E92]">
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <Button className="col-span-2 h-[50px] rounded-none border-2 border-[#ced4da] bg-[#343a40] text-[20px] text-white">
                    Calculate Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
