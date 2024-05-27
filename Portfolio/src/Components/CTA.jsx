import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col items-center justify-center text-center px-4 ">
      <h3 className="text-white text-[40px] leading-[48px] font-semibold mb-2 max-sm:text-[32px] max-sm:leading-[40px]">
        I’m currently available for freelancing work.
      </h3>
      <p className="text-white opacity-75 mb-4 max-sm:text-sm max-sm:mb-2 max-w-[330px]">
        If you ar looking for a designer and developer that likes to get stuff
        done.Let’s talk.
      </p>

      <div className="flex gap-4 text-lg max-sm:text-[14px] max-sm:flex-col max-sm:gap-0">
        <h4 className="text-secondary">babiyonclement18@gmail.com</h4>
        <h4 className="text-white">+91 6374914684</h4>
      </div>

      <Link
        className="bg-gradient-to-r from-secondary to-primary px-6 py-3 rounded-full flex items-center text-white font-medium text-lg mt-8 shadow-xl max-sm:mt-4 max-sm:text-[16px]"
        to="/contact"
      >
        Got a Project In Mind? Let’s Talk!
      </Link>
    </div>
  );
};
export default CTA;
