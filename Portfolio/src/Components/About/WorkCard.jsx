const WorkCard = ({ info }) => {
  const { icon, title, desc, alt } = info;
  return (
    <div className="relative py-10 rounded-lg">
      <div className="z-10 relative  px-8">
        <img className="w-[32px]" src={icon} alt={alt} />
        <h3 className="font-semibold text-xl my-2">{title}</h3>
        <p className="w-[320px] leading-5">{desc}</p>
      </div>

      <div className="absolute top-0 bottom-0 w-full h-full bg-gradient-to-br rounded-lg from-white "></div>
    </div>
  );
};

export default WorkCard;
