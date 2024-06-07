import Image from "next/image";
import Img1 from "../../../../../public/assets/carousel-1.jpg";
import Img2 from "../../../../../public/assets/blog-1.jpg";
import Img3 from "../../../../../public/assets/blog-2.jpg";
import Img4 from "../../../../../public/assets/user.jpg";
import Icon1 from "../../../../../public/icons/person.svg";
import Icon2 from "../../../../../public/icons/folder.svg";
import Icon3 from "../../../../../public/icons/comments.svg";
export default function Details() {
  return (
    <section className="mx-auto mt-12  min-w-[483px] max-w-[540px] px-[15px] py-12 md:max-w-[720px] tablet:max-w-[960px] lg:max-w-[1140px]">
      <div className="flex flex-col items-start justify-center">
        <Image
          src={Img1}
          alt="Guy lifting weights"
          width={700}
          height={700}
          className="w-full"
        />
        <div className="my-6 flex items-center justify-center gap-4">
          <div className="flex size-[100px] flex-col items-center justify-center rounded-full bg-red-600 text-white">
            <p className="">01</p>
            <p className="font-bold uppercase">Jan</p>
            <p className="">2045</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-oswald text-[clamp(29px,4vw,40px)] font-bold tracking-tight">
              Lorem ipsum dolor sit amet
            </p>
            <div className="flex gap-2">
              <div className="flex items-center justify-center gap-[2px]">
                <Image
                  src={Icon1}
                  alt="person icon"
                  className="size-4 opacity-60"
                />
                <p className=" text-[#6c757d]">Admin</p>
              </div>
              <div className="flex items-center justify-center gap-[2px]">
                <Image
                  src={Icon2}
                  alt="person icon"
                  className="size-4 opacity-60"
                />
                <p className=" text-[#6c757d]">Web Design</p>
              </div>
              <div className="flex items-center justify-center gap-[2px]">
                <Image
                  src={Icon3}
                  alt="person icon"
                  className="size-4 opacity-60"
                />
                <p className=" text-[#6c757d]">15 Comments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[#666]">
            Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum
            sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et
            lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd
            accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit
            gubergren dolores et, consetetur justo invidunt at et aliquyam ut et
            vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit
            stet no diam kasd vero, eos tempor gubergren clita est consetetur
            dolores et dolor. Sadipscing lorem kasd labore ea sanctus sanctus,
            dolores invidunt et consetetur et duo. Tempor dolores accusam sit
            vero sit, sed labore duo vero et at, et amet et justo gubergren.
            Labore aliquyam voluptua dolor nonumy lorem. Sanctus sed sadipscing
            rebum ipsum dolor et ea no. Ipsum elitr sea erat.
          </p>
          <p className="text-[#666]">
            Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
            aliquyam dolores vero stet consetetur elitr takimata rebum sanctus.
            Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem
            kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos
            et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit
            vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
            justo dolore sit invidunt, sed duo dolor et amet no et. Ut takimata
            tempor kasd amet kasd ut. No et ipsum amet tempor et. Sed nonumy sed
            vero ut, sed aliquyam accusam clita dolores tempor est. Ea et
            takimata consetetur et amet sanctus. Duo no diam ipsum diam dolores,
            eirmod diam dolores clita sed erat magna. Dolore ut amet ea magna.
            Sea et dolore sit labore at amet eos. Dolor voluptua sit rebum sit
            ut nonumy. Dolor amet amet sit sadipscing, lorem.
          </p>
        </div>
        <div className="mt-4 w-full">
          <h2 className=" font-oswald text-[25px] font-bold text-[#343a40]">
            Est dolor lorem et ea
          </h2>
          <div className="mx-auto mt-4">
            <Image
              src={Img2}
              alt=""
              className="float-left mb-3 mr-6 h-[170px] w-[255px] md:h-[230px] md:w-[345px] tablet:h-[310px] tablet:w-[465px] lg:h-[370px] lg:w-[555px]"
            />
            <p className="">
              Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
              voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
              kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
              Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
              labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
              kasd, takimata ea nonumy elitr sadipscing gubergren erat.
              Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
              voluptua diam dolores at sadipscing stet. Clita dolor amet dolor
              ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor
              dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed
              et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et.
              Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo
              est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos
              labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam
              takimata sea kasd dolores diam, amet et est accusam labore eirmod
              vero et voluptua. Amet labore clita duo et no. Rebum voluptua
              magna eos magna, justo gubergren labore sit voluptua eos. Dolores
              et no stet magna et gubergren amet dolor sit, lorem dolore est
              vero et. Justo erat magna ipsum magna sea. Magna amet est sit sed
              sadipscing. At takimata dolores ut dolore takimata stet nonumy
              ipsum, gubergren vero ea consetetur aliquyam kasd est magna justo,
              dolore justo at dolore et aliquyam nonumy lorem gubergren. Amet
              duo invidunt kasd labore aliquyam. Vero dolores lorem elitr justo
              ut, accusam erat sed dolor at accusam takimata ipsum sea diam.
              Ipsum voluptua lorem sed amet, amet sea sit et at nonumy labore
              takimata, justo ipsum voluptua stet takimata. Ea lorem elitr
              aliquyam gubergren sit magna sanctus, sed sed dolore ipsum justo
              dolor et amet invidunt erat. Sadipscing sanctus stet.
            </p>
          </div>
        </div>
        <div className="mt-4 w-full">
          <h2 className=" font-oswald text-[25px] font-bold text-[#343a40]">
            Est dolor lorem et ea
          </h2>
          <div className="mx-auto mt-4">
            <Image
              src={Img3}
              alt=""
              className="float-right mb-3 ml-6 h-[170px] w-[255px] md:h-[230px] md:w-[345px] tablet:h-[310px] tablet:w-[465px] lg:h-[370px] lg:w-[555px]"
            />
            <p className="">
              Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
              voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
              kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
              Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
              labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
              kasd, takimata ea nonumy elitr sadipscing gubergren erat.
              Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
              voluptua diam dolores at sadipscing stet. Clita dolor amet dolor
              ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor
              dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed
              et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et.
              Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo
              est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos
              labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam
              takimata sea kasd dolores diam, amet et est accusam labore eirmod
              vero et voluptua. Amet labore clita duo et no. Rebum voluptua
              magna eos magna, justo gubergren labore sit voluptua eos. Dolores
              et no stet magna et gubergren amet dolor sit, lorem dolore est
              vero et. Justo erat magna ipsum magna sea. Magna amet est sit sed
              sadipscing. At takimata dolores ut dolore takimata stet nonumy
              ipsum, gubergren vero ea consetetur aliquyam kasd est magna justo,
              dolore justo at dolore et aliquyam nonumy lorem gubergren. Amet
              duo invidunt kasd labore aliquyam. Vero dolores lorem elitr justo
              ut, accusam erat sed dolor at accusam takimata ipsum sea diam.
              Ipsum voluptua lorem sed amet, amet sea sit et at nonumy labore
              takimata, justo ipsum voluptua stet takimata. Ea lorem elitr
              aliquyam gubergren sit magna sanctus, sed sed dolore ipsum justo
              dolor et amet invidunt erat. Sadipscing sanctus stet.
            </p>
          </div>
        </div>
        <div className="my-4 py-6">
          <div className="flex flex-1 gap-4 bg-black p-12">
            <Image
              src={Img4}
              alt="user"
              width={200}
              height={200}
              className=" size-[150px] rounded-full border-[16px] border-[#343A40]"
            />
            <div className="flex flex-1 flex-col">
              <p className="font-oswald text-[clamp(21px,4vw,24px)] text-[#e31c25] ">
                John Doe
              </p>
              <p className="mt-4 text-white">
                Consetetur elitr erat vero sanctus labore dolor ipsum et diam,
                tempor dolores eos dolor consetetur lorem ipsum, ipsum accusam
                ipsum sit no ut est. Gubergren ea ipsum erat consetetur magna
                kasd amet est, voluptua magna elitr ea sit justo sed sanctus.
                Accusam duo duo sit sit. Ut eos ipsum sed takimata sed dolor
                justo, elitr no labore amet et et sanctus. Duo invidunt magna
                diam no clita, ea eos vero sanctus est aliquyam et, dolores
                gubergren eirmod sea invidunt no kasd. Amet ut sadipscing eirmod
                et dolore. Sed lorem stet aliquyam ipsum eos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
