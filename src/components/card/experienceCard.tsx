import { IworkExpreience } from "../../data/types";
import AnimatedWrapper from "../../utils/animatedWarpper";

interface ExperienceCardProps {
  experience: IworkExpreience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, position, startDate, endDate, bulletPoints } = experience;

  return (
    <AnimatedWrapper>
      <div className="flex flex-col flex-start pt-3 text-neutral-950 shadow-sm font-[300]">
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500"></div>
          <time className="text-sm pb-2" dateTime={`${startDate}/${endDate}`}>
            {`${startDate} - ${endDate}`}
          </time>
        </div>

        <div className="ml-3">
          <h4 className="mb-1.5 text-xl font-semibold">
            {company} - {position}
          </h4>

          <ul className="list-outside list-disc px-4 space-y-2 pb-8 text-justify font-[100]">
            {bulletPoints.map((point: string, i: number) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default ExperienceCard;
