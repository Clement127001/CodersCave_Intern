import WorkCard from "./WorkCard";
import { work1 } from "../../../utils/constants";

const WorkDetail = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-[90%]">
      <h2 className="font-semibold text-[48px]  max-sm:text-[32px]  leading-[54px] max-sm:leading-[40px] text-white border-b-[5px] border-b-yellow py-2 ">
        Work Details
      </h2>

      <div className="flex flex-nowrap overflow-x-scroll gap-10 max-sm:gap-8 h-fit w-full pb-4 snap-x">
        {work1.map((item) => (
          <WorkCard key={item.title} info={item} />
        ))}
      </div>
    </div>
  );
};

export default WorkDetail;
