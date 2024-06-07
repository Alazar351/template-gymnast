export default function Intro() {
  return (
    <div>
      <div className="mb-14 flex flex-col items-center justify-center">
        <p className="mb-2 font-oswald text-[clamp(21px,2vw,24px)] font-semibold text-[#e31c25]">
          Get In Touch
        </p>
        <p className="font-oswald text-[clamp(37px,6vw,56px)] font-medium ">
          Email Us For Any Query
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4  md:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="size-[40px]"
          >
            <path
              fill="red"
              d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
            />
          </svg>
          <p className="mt-4 font-oswald text-[clamp(21px,2vw,24px)] font-semibold">
            Address
          </p>
          <p className="mt-2 text-[#666]">123 Street, New York, USA</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="size-[40px]"
          >
            <path
              fill="red"
              d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
            />
          </svg>
          <p className="mt-4 font-oswald text-[clamp(21px,2vw,24px)] font-semibold">
            Phone
          </p>
          <p className="mt-2 text-[#666]">+012 345 6789</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="text-[40px]"
          >
            <path
              fill="red"
              d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
            />
          </svg>
          <p className="mt-4 font-oswald text-[clamp(21px,2vw,24px)] font-semibold">
            Email
          </p>
          <p className="mt-2 text-[#666]">info@example.com</p>
        </div>
      </div>
    </div>
  );
}
