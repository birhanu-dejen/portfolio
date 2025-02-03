import { workExperience } from "../../data/workExperiance"; // Corrected the import

const { company, position, startDate, endDate, bulletPoints } =
  workExperience[0];

function ExperianceCard() {
  return (
    <div className="flex flex-col flex-start pt-3 text-neutral-950 shadow-sm font-[300px]">
      <div className="flex-start flex items-center pt-3">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500"></div>
        <p className="text-sm">{`${startDate} - ${endDate}`}</p>
      </div>
      <div className="ml-3">
        <h4 className="mb-1.5 text-xl font-semibold">
          {company} -{position} {/* Added space for better formatting */}
        </h4>
        <ul className="list-outside list-disc px-4 space-y-2 pb-8 text-justify font-[100]">
          {bulletPoints.map((point: string, i: number) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperianceCard;
