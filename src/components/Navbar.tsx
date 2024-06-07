"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 992px");
  const pathname = usePathname();

  const toggle = () => {
    setOpen(!open);
  };

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-[#E31C25]"
      : "text-white hover:text-[#E31C25]";
  };

  return (
    <div className="left-0 right-0 top-0 z-50 tablet:absolute tablet:p-4">
      <div className="flex h-[90px] items-center justify-between bg-black tablet:bg-transparent">
        <Link
          href="/"
          className="p-4 font-oswald text-[clamp(2.25rem,3.5vw,3.5rem)] font-bold uppercase text-white tablet:p-0"
        >
          Gymnast
        </Link>
        {isDesktop ? (
          <div className="h-[88px] w-[682px]">
            <div className=" gap flex items-center justify-center bg-[#111] text-base font-bold text-white">
              <Link href="/" className={`px-[23px] py-6 ${getLinkClass("/")}`}>
                Home
              </Link>
              <Link
                href="/About"
                className={`px-[23px] py-6 ${getLinkClass("/About")}`}
              >
                About us
              </Link>
              <Link
                href="/Features"
                className={`px-[23px] py-6 ${getLinkClass("/Features")}`}
              >
                Our Features
              </Link>
              <Link
                href="/Classes"
                className={`px-[23px] py-6 ${getLinkClass("/Classes")}`}
              >
                Classes
              </Link>
              <Link
                href="/Blog"
                className={`px-[23px] py-6 ${getLinkClass("/Blog")}`}
              >
                Blog
              </Link>
              <Link
                href="/Contact"
                className={`px-[23px] py-6 ${getLinkClass("/Contact")}`}
              >
                Contact
              </Link>
            </div>
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
              <div className="absolute left-0 top-0 z-50 mt-[90px] min-h-52 w-full">
                <div className=" flex  flex-col justify-start bg-black p-6 text-base font-bold text-white">
                  <Link
                    href="/"
                    className={`px-2 py-[15px] ${getLinkClass("/")}`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/About"
                    className={`px-2 py-[15px] ${getLinkClass("/About")}`}
                  >
                    About us
                  </Link>
                  <Link
                    href="/Features"
                    className={`px-2 py-[15px] ${getLinkClass("/Features")}`}
                  >
                    Our Features
                  </Link>
                  <Link
                    href="/Classes"
                    className={`px-2 py-[15px] ${getLinkClass("/Classes")}`}
                  >
                    Classes
                  </Link>
                  <Link
                    href="/Blog"
                    className={`px-2 py-[15px] ${getLinkClass("/Blog")}`}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/Contact"
                    className={`px-2 py-[15px] ${getLinkClass("/Contact")}`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
