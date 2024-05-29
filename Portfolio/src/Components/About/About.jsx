import Detail from "./Detail";
import WorkDetail from "./WorkDetails";
import Tools from "./Tools";
import CTA from "../CTA";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Detail />
      <WorkDetail />
      <Tools />
      <CTA />
    </div>
  );
};

export default About;
