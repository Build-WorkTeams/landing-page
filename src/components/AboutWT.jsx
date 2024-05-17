import CardImg1 from "../assets/desktop/file.svg";
import CardImg2 from "../assets/desktop/stocks.svg";
import CardImg3 from "../assets/desktop/users.svg";

const AboutWorkTeams = () => {
  const CardData = [
    {
      id: 1,
      title: "Break Tasks Down into simple steps",
      description:
        "Efficiently tackle tasks, reduce overwhelm, boost focus, and achieve milestones effortlessly.",
      imgURL: `${CardImg1}`,
      bgColor: "bg-Ocean-Blue",
    },
    {
      id: 2,
      title: "Automate tracking, gain insights, stay motivated.",
      description:
        "Effortlessly monitor progress, gain insights, and stay motivated with automated tracking features.",
      imgURL: `${CardImg2}`,
      bgColor: "bg-Tangerine",
    },
    {
      id: 3,
      title: "Assign partners for feedback and support.",
      description:
        "Enhance collaboration, communication, and accountability with assigned partners for feedback and support.",
      imgURL: `${CardImg3}`,
      bgColor: "bg-Battery-Charged-Blue",
    },
  ];

  return (
    <>
      <section className="mx-auto mt-[6rem] w-[90%]">
        <div className="text-center">
          <h4 className="text-[36px] font-semibold text-Ocean-Blue">
            Clear your Mind
          </h4>
          <p className="mx-auto my-4 w-[50%] text-Old-Lavender">
            We make project management easy! No need to spend hours learning
            complex software or training your team. Get started in minutes with
            WorkTeams. Sign up today!
          </p>
        </div>
        <div className="mx-auto mb-[3rem] mt-[6rem] grid w-[80%] grid-cols-3 gap-[2.5rem]">
          {CardData.map((items, index) => {
            const { id, title, description, imgURL, bgColor } = items;

            return (
              <div key={id} className="relative rounded-xl px-8 shadow-lg">
                <div
                  className={`absolute -top-2 left-1/2 flex h-[4rem] w-[4rem] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full ${bgColor}`}
                >
                  <img className="h-7 w-7" src={imgURL} alt="" />
                </div>
                <div className="mb-[3rem] mt-[5rem]">
                  <h3 className="mb-4 text-center text-[1.2rem] font-semibold text-Ocean-Blue">
                    {title}
                  </h3>
                  <p className="text-center text-Old-Lavender">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mx-auto mb-[5rem] mt-[8rem] w-[90%]">
        <div className="">
          <h3 className="text-center text-[44px] font-semibold text-Ocean-Blue">
            What is <span className="text-Tangerine">WorkTeams?</span>
          </h3>
          <p className="mx-auto my-4 w-[60%] text-center text-Old-Lavender">
            WorkTeams is a task management application, providing users with
            seamless organization, progress tracking, and accountability. Users
            benefit from simplified task breakdowns, automated progress tracking
            for insights and motivation, and the ability to assign
            accountability partners for feedback and support.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutWorkTeams;
