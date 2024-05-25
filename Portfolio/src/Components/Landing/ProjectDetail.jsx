const ProjectDetail = ({ details }) => {
  const { name, description, skills, alt, src, live, github } = details;

  console.log(name);

  return (
    <div className="flex  items-center w-[80%] gap-8 py-12">
      <a
        target="_blank"
        href={`${live ? live : github}`}
        className="max-w-[50%]"
      >
        <img src={src} alt={alt} className=" rounded-lg shadow-2xl" />
      </a>

      <div>
        <h4 className="font-semibold text-[40px]  max-sm:text-[32px]  leading-[52px] max-sm:leading-[40px] text-white ">
          {name}
        </h4>
        <p className="text-[#cccccc] py-6 text-md">{description}</p>
        <div className="mb-8">
          {skills.map((item) => (
            <span className=" text-secondary mr-4 px-3 py-2 rounded-md border-solid border-2 border-secondary opacity-95 font-medium ">
              {item}
            </span>
          ))}
        </div>

        <a
          href={`${live ? live : github}`}
          className=" underline bg-gradient-to-r from-secondary to-primary px-6 py-3 rounded-full text-white font-semibold text-md  gap-4 shadow-lg "
          target="_blank"
        >
          {live ? "See Demo" : "Visit Github"}
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
