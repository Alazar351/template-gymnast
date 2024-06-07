import Image from "next/image";
import Img1 from "../../public/assets/blog-1.jpg";
import Img2 from "../../public/assets/blog-2.jpg";
import Icon1 from "../../public/icons/person.svg";
import Icon2 from "../../public/icons/folder.svg";
import Icon3 from "../../public/icons/comments.svg";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="flex flex-col items-center justify-center px-[15px] py-12">
      <div className="flex w-full flex-col items-center justify-center ">
        <h4 className="font-oswald text-[clamp(21px,5vw,24px)] font-bold text-[#E31C25]">
          Our Blog
        </h4>
        <p className="mt-2  font-oswald text-[clamp(37px,6.5vw,56px)] font-bold text-[#343a40]">
          Latest Article From Blog
        </p>
      </div>
      <div className="mt-14 flex flex-col gap-12 tablet:flex-row">
        <div className="">
          <Image
            src={Img1}
            alt=""
            width={500}
            height={500}
            className="w-full object-cover"
          />
          <div className="my-6 flex gap-4">
            <div className="flex size-20 flex-col items-center justify-center rounded-full bg-red-600 text-white">
              <p className="text-xs">01</p>
              <p className="font-bold uppercase">Jan</p>
              <p className="text-xs">2045</p>
            </div>
            <div className="flex flex-col">
              <p className="font-oswald text-[clamp(23px,4vw,28px)] font-bold tracking-tight">
                Lorem ipsum dolor sit amet
              </p>
              <div className="flex gap-2">
                <div className="flex items-center justify-center gap-[2px]">
                  <Image
                    src={Icon1}
                    alt="person icon"
                    className="size-4 opacity-60"
                  />
                  <p className="text-sm text-[#6c757d]">Admin</p>
                </div>
                <div className="flex items-center justify-center gap-[2px]">
                  <Image
                    src={Icon2}
                    alt="person icon"
                    className="size-4 opacity-60"
                  />
                  <p className="text-sm text-[#6c757d]">Web Design</p>
                </div>
                <div className="flex items-center justify-center gap-[2px]">
                  <Image
                    src={Icon3}
                    alt="person icon"
                    className="size-4 opacity-60"
                  />
                  <p className="text-sm text-[#6c757d]">15 Comments</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#666]">
            Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet
            erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit
            ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero
            dolor sed kasd accusam
          </p>
          <Link href="/Blog/first-article">
            <Button
              variant="outline"
              className="mt-6 h-[40px] w-[135px] rounded-none border-2 border-[#E31C25] bg-transparent px-4 py-[6px] text-[16px] text-[#E31C25] hover:bg-[#E31C25] hover:text-white "
            >
              Read More
              <span>
                <ChevronRight className="size-4 font-extrabold" />
              </span>
            </Button>
          </Link>
        </div>
        <div className="">
          <Image
            src={Img2}
            alt=""
            width={500}
            height={500}
            className="w-full object-cover"
          />
          <div className="my-6 flex gap-4">
            <div className="flex size-20 flex-col items-center justify-center rounded-full bg-red-600 text-white">
              <p className="text-xs">01</p>
              <p className="font-bold uppercase">Jan</p>
              <p className="text-xs">2045</p>
            </div>
            <div className="flex flex-col">
              <p className="font-oswald text-[clamp(23px,4vw,28px)] font-bold tracking-tight">
                Lorem ipsum dolor sit amet
              </p>
              <div className="flex gap-2">
                <div className="flex items-center justify-center gap-[2px]">
                  <Image
                    src={Icon1}
                    alt="person icon"
                    className="size-4 opacity-60"
                  />
                  <p className="text-sm text-[#6c757d]">Admin</p>
                </div>
                <div className="flex items-center justify-center gap-[2px]">
                  <Image
                    src={Icon2}
                    alt="person icon"
                    className="size-4 opacity-60"
                  />
                  <p className="text-sm text-[#6c757d]">Web Design</p>
                </div>
                <div className="flex items-center justify-center gap-[2px]">
                  <Image
                    src={Icon3}
                    alt="person icon"
                    className="size-4 opacity-60"
                  />
                  <p className="text-sm text-[#6c757d]">15 Comments</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#666]">
            Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet
            erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit
            ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero
            dolor sed kasd accusam
          </p>
          <Link href="/Blog/second-article">
            <Button
              variant="outline"
              className="mt-6 h-[40px] w-[135px] rounded-none border-2 border-[#E31C25] bg-transparent px-4 py-[6px] text-[16px] text-[#E31C25] hover:bg-[#E31C25] hover:text-white "
            >
              Read More
              <span>
                <ChevronRight className="size-4 font-extrabold" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
