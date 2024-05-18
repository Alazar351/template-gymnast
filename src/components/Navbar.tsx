"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 992px");

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="tablet:p-4">
      <div className="flex h-[90px] items-center justify-between bg-black tablet:bg-transparent">
        <Link
          href="/"
          className="p-4 font-oswald text-[clamp(36px,3.5vw,56px)] font-bold uppercase text-white tablet:p-0 tablet:text-black"
        >
          Gymnast
        </Link>
        {isDesktop ? (
          <div className="h-[88px] w-[682px]">
            <ul className=" gap flex items-center justify-center bg-[#111] text-base font-bold text-white">
              <Link
                href="/"
                className="px-[23px] py-6 text-[#E31C25] hover:text-[#E31C25]"
              >
                Home
              </Link>
              <Link href="/" className="px-[23px] py-6 hover:text-[#E31C25]">
                About us
              </Link>
              <Link href="/" className="px-[23px] py-6 hover:text-[#E31C25]">
                Our Features
              </Link>
              <Link href="/" className="px-[23px] py-6 hover:text-[#E31C25]">
                Classes
              </Link>
              <Link
                href="/"
                className="flex px-[23px] py-6 hover:text-[#E31C25]"
              >
                Blog
              </Link>
              <Link href="/" className="px-[23px] py-6 hover:text-[#E31C25]">
                Contact
              </Link>
            </ul>
          </div>
        ) : (
          <nav>
            {open ? (
              <X
                onClick={toggle}
                className="mr-4 h-10 w-14 cursor-pointer border border-[#FFFFFF80]  text-[#FFFFFF80]"
              />
            ) : (
              <Menu
                onClick={toggle}
                className="mr-4 h-10 w-14 cursor-pointer border border-[#FFFFFF80]  text-[#FFFFFF80]"
              />
            )}
            {open && (
              <div className="absolute left-0 top-0 mt-[90px] min-h-52 w-full">
                <ul className=" flex  flex-col justify-start bg-black p-6 text-base font-bold text-white">
                  <Link
                    href="/"
                    className="px-2 py-[15px] text-[#E31C25] hover:text-[#E31C25]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/"
                    className="px-2 py-[15px] hover:text-[#E31C25]"
                  >
                    About us
                  </Link>
                  <Link
                    href="/"
                    className="px-2 py-[15px] hover:text-[#E31C25]"
                  >
                    Our Features
                  </Link>
                  <Link
                    href="/"
                    className="px-2 py-[15px] hover:text-[#E31C25]"
                  >
                    Classes
                  </Link>
                  <Link
                    href="/"
                    className="flex px-2 py-[15px] hover:text-[#E31C25]"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/"
                    className="px-2 py-[15px] hover:text-[#E31C25]"
                  >
                    Contact
                  </Link>
                </ul>
              </div>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
