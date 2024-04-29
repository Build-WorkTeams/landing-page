import HeroImg from "../assets/desktop/heroImg.png";
import { BtnPrimary } from "./Buttons";

const HeroSection = () => {
  return (
    <>
      <section className="HERO bg-Lavender">
        <div className="mx-auto flex w-[90%] items-center py-4">
          <div className="w-[40%]">
            <h3 className="text-Ocean-Blue font-nunitoSans text-[2.5rem] font-black leading-tight">
              Turning <span className="text-Tangerine">‘me’</span> goals into{" "}
              <span className="text-Tangerine">‘we’</span> achievements
            </h3>
            <p className="mt-[1.5rem] w-[80%] text-[18px] text-[#464646]">
              Boost productivity and peace of mind with WorkTeams – the ultimate
              task manager and to-do list app.
            </p>
            <div className="mt-[2rem]">
              <BtnPrimary
                bg="bg-[#4D27BA]"
                width="w-[15rem]"
                py="py-3"
                textSize="text-[16px]"
              >
                Join for free
              </BtnPrimary>
            </div>
          </div>

          <div className="w-[60%]">
            <img className="w-full" src={HeroImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
