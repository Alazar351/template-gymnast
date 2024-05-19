import Image from "next/image";
import Date from "../../public/icons/training.png";
import Treadmill from "../../public/icons/treadmill.png";
import Barbell from "../../public/icons/gym.png";

export default function Banner() {
  return (
    <section className="mt-12 flex flex-col tablet:flex-row">
      <div className="flex h-[300px] items-center justify-center gap-4 bg-black px-12">
        <Image
          src={Date}
          alt="Training calendar"
          className="w-[clamp(31px,7vw,72px)]"
        />
        <div>
          <h2 className="font-oswald text-[clamp(25px,5vw,32px)] font-medium text-white">
            Progression
          </h2>
          <p className="mt-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            suscipit orci velit id libero
          </p>
        </div>
      </div>
      <div className="flex h-[300px] items-center justify-center gap-4 bg-red-600 px-12">
        <Image
          src={Barbell}
          alt="Barbell"
          className="w-[clamp(31px,7vw,72px)]"
        />
        <div>
          <h2 className="font-oswald text-[clamp(25px,5vw,32px)] font-medium text-white">
            Workout
          </h2>
          <p className="mt-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            suscipit orci velit id libero
          </p>
        </div>
      </div>
      <div className="flex h-[300px] items-center justify-center gap-4 bg-black px-12">
        <Image
          src={Treadmill}
          alt="Treadmill"
          className="w-[clamp(31px,7vw,72px)]"
        />
        <div>
          <h2 className="font-oswald text-[clamp(25px,5vw,32px)] font-medium text-white">
            Nutrition
          </h2>
          <p className="mt-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            suscipit orci velit id libero
          </p>
        </div>
      </div>
    </section>
  );
}
