function ExperianceCard() {
  return (
    <div className="flex flex-col flex-start pt-3  pl-3">
      <div className="flex-start flex items-center pt-3">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500"></div>
        May 2023 - Sept 2023
      </div>
      <h4 className="mb-1.5 text-xl font-semibold">
        ABStore Full-stack Developer
      </h4>
      <ul className="list-outside list-disc px-4 space-y-2 pb-8 text-justify font-[100]">
        <li>
          worked on a complete rewrite of an eCommerce platform
          (ABElectronics.com)
        </li>
        <li>built payment integrations with Stripe ,Chapa</li>
        <li>Technologies used: React, TypeScript,Node, Mongodb</li>
      </ul>
    </div>
  );
}
export default ExperianceCard;
