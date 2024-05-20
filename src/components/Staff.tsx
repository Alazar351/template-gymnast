import Image from "next/image";
import Img1 from "../../public/assets/team-1.jpg";
import Img2 from "../../public/assets/team-2.jpg";
import Img3 from "../../public/assets/team-3.jpg";
import Img4 from "../../public/assets/team-4.jpg";

export default function Staff() {
  return (
    <section className="m-12">
      <div className="flex flex-col items-center justify-center">
        <h4 className="font-oswald text-[clamp(21px,5vw,24px)] font-bold text-[#E31C25]">
          Our Trainers
        </h4>
        <p className="mt-8 font-oswald text-[clamp(37px,5vw,56px)] font-bold text-[#343a40]">
          Meet Our Expert Trainers
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 tablet:grid-cols-4">
        <div className="group">
          <div className="relative w-full">
            <Image src={Img1} alt="Trainer 1" />
            <Socials />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#111] py-[20px]">
            <p className="font-oswald text-[clamp(21px,5vw,24px)] font-medium text-[#E31C25]">
              Trainer Name
            </p>
            <p className="mt-3 text-white">Trainer</p>
          </div>
        </div>
        <div className="group">
          <div className="relative w-full">
            <Image src={Img2} alt="Trainer 1" />
            <Socials />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#111] py-[20px]">
            <p className="font-oswald text-[clamp(21px,5vw,24px)] font-medium text-[#E31C25]">
              Trainer Name
            </p>
            <p className="mt-3 text-white">Trainer</p>
          </div>
        </div>
        <div className="group">
          <div className="relative w-full">
            <Image src={Img3} alt="Trainer 1" />
            <Socials />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#111] py-[20px]">
            <p className="font-oswald text-[clamp(21px,5vw,24px)] font-medium text-[#E31C25]">
              Trainer Name
            </p>
            <p className="mt-3 text-white">Trainer</p>
          </div>
        </div>
        <div className="group">
          <div className="relative w-full">
            <Image src={Img4} alt="Trainer 1" />
            <Socials />
          </div>
          <div className="flex flex-col items-center justify-center bg-[#111] py-[20px]">
            <p className="font-oswald text-[clamp(21px,5vw,24px)] font-medium text-[#E31C25]">
              Trainer Name
            </p>
            <p className="mt-3 text-white">Trainer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Socials() {
  return (
    <div className="absolute inset-0 flex scale-y-0 items-center justify-center gap-2 bg-black/40 transition-all duration-150 ease-in-out group-hover:scale-y-100">
      <svg
        id="twitter"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 cursor-pointer rounded-full border border-white fill-white p-2 text-white  hover:bg-white hover:fill-black"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" />
      </svg>
      <svg
        id="twitter"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 cursor-pointer rounded-full border border-white fill-white p-2 text-white  hover:bg-white hover:fill-black"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" />
      </svg>
      <svg
        id="twitter"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 cursor-pointer rounded-full border border-white fill-white p-2 text-white  hover:bg-white hover:fill-black"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" />
      </svg>
      <svg
        id="twitter"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 cursor-pointer rounded-full border border-white fill-white p-2 text-white  hover:bg-white hover:fill-black"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" />
      </svg>
    </div>
  );
}
