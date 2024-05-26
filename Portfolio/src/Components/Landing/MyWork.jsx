import ProjectDetail from "./ProjectDetail";
import { projectDetails } from "../../../utils/constants";

const MyWork = () => {
  return (
    <div
      className="flex  w-full justify-center items-center flex-col"
      id="work"
    >
      <h3 className="font-semibold text-[48px]  max-sm:text-[32px]  leading-[54px] max-sm:leading-[40px] text-white border-b-8 border-b-yellow py-4">
        My Works
      </h3>

      {projectDetails.map((project) => (
        <ProjectDetail key={project.name} details={project} />
      ))}
    </div>
  );
};

export default MyWork;
