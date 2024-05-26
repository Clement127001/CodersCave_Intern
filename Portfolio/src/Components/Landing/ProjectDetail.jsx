import { motion } from "framer-motion";
const ProjectDetail = ({ details }) => {
  const { name, description, skills, alt, src, live, github } = details;

  return (
    <motion.section
      className="flex items-center w-[80%] gap-8 py-12 h-[70vh] max-lg:h-fit max-lg:flex-col max-lg:items-start max-lg:w-[87%]"
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <a
        target="_blank"
        href={`${live ? live : github}`}
        className="relative z-1 shadow-[0_10px_100px_25px_#28283d] rounded-xl "
      >
        <img
          src={src}
          alt={alt}
          className=" rounded-xl shadow-2xl  h-[45vh]  object-cover max-lg:h-[30vh]"
        />
        <div className=" absolute top-0 left-0 w-full h-[45vh]  max-lg:h-[30vh]  -z-1 shadow-[0_20px_25px_-5px_#000,0px_8px_10px_-6px_#000]"></div>
      </a>

      <div>
        <h4 className="font-semibold text-[40px]  max-sm:text-[32px]  leading-[52px] max-sm:leading-[40px] text-white ">
          {name}
        </h4>
        <p className="text-[#cccccc] py-6 text-md w-[400px] max-lg:w-full">
          {description}
        </p>
        <div className="mb-8 flex flex-wrap max-w-[400px] gap-y-2">
          {skills.map((item) => (
            <div className=" text-secondary mr-4 px-3 py-2 rounded-md border-solid border-2 border-secondary opacity-95 font-medium ">
              {item}
            </div>
          ))}
        </div>

        <a
          href={`${live ? live : github}`}
          className=" underline bg-gradient-to-r from-secondary to-primary px-6 py-3 rounded-full text-white font-semibold text-md  gap-4 shadow-lg"
          target="_blank"
        >
          {live ? "See Demo" : "Visit Github"}
        </a>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;
