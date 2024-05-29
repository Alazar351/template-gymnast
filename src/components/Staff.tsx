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
        <div className="group tablet:w-[210px] lg:w-[255px]">
          <div className="relative w-full overflow-clip">
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
        <div className="group tablet:w-[210px] lg:w-[255px]">
          <div className="relative w-full overflow-clip">
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
        <div className="group tablet:w-[210px] lg:w-[255px]">
          <div className="relative w-full overflow-clip">
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
        <div className="group tablet:w-[210px] lg:w-[255px]">
          <div className="relative w-full overflow-clip">
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
    <div className="absolute inset-0 flex translate-y-[100%] items-center justify-center gap-2 bg-black/40 transition-all duration-500 ease-in-out group-hover:translate-y-0">
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
        id="facebook"
        width="5"
        height="10"
        viewBox="0 0 10 20"
        className="size-10 cursor-pointer rounded-full border border-white fill-white p-2 text-white  hover:bg-white hover:fill-black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.11163 3.29509H9.92331V0.139742C9.61075 0.0967442 8.53581 0 7.28393 0C4.67183 0 2.88248 1.643 2.88248 4.66274V7.44186H0V10.9693H2.88248V19.845H6.41654V10.9701H9.18243L9.6215 7.44269H6.41571V5.01251C6.41654 3.99297 6.69106 3.29509 8.11163 3.29509Z" />
      </svg>
      <svg
        id="linkedin"
        className="size-10 cursor-pointer rounded-full border border-white fill-white p-2 text-white  hover:bg-white hover:fill-black"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <path d="M8 19H5V9h3zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085c-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678c1.025 0 1.854.285 2.487 1.001c.637.717.954 1.679.954 3.03z" />
        <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" />
      </svg>
      <svg
        id="instagram"
        width="23"
        height="22"
        viewBox="0 0 23 22"
        className="size-10 cursor-pointer rounded-full border border-white fill-white p-2 text-white  hover:bg-white hover:fill-black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.79834 0H16.0483C19.8447 0 22.9233 3.07862 22.9233 6.875V15.125C22.9233 18.9214 19.8447 22 16.0483 22H7.79834C4.00196 22 0.92334 18.9214 0.92334 15.125V6.875C0.92334 3.07862 4.00196 0 7.79834 0ZM16.0483 19.9375C18.7021 19.9375 20.8608 17.7787 20.8608 15.125V6.875C20.8608 4.22125 18.7021 2.0625 16.0483 2.0625H7.79834C5.14459 2.0625 2.98584 4.22125 2.98584 6.875V15.125C2.98584 17.7787 5.14459 19.9375 7.79834 19.9375H16.0483Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.42334 11C6.42334 7.96263 8.88596 5.5 11.9233 5.5C14.9607 5.5 17.4233 7.96263 17.4233 11C17.4233 14.0374 14.9607 16.5 11.9233 16.5C8.88596 16.5 6.42334 14.0374 6.42334 11ZM8.48584 11C8.48584 12.8948 10.0286 14.4375 11.9233 14.4375C13.8181 14.4375 15.3608 12.8948 15.3608 11C15.3608 9.10388 13.8181 7.5625 11.9233 7.5625C10.0286 7.5625 8.48584 9.10388 8.48584 11Z"
        />
        <circle cx="17.8359" cy="5.08761" r="0.732875" />
      </svg>
    </div>
  );
}
