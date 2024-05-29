const WorkCard = ({ info }) => {
  const { icon, title, desc, alt } = info;
  return (
    <div className="bg-gradient-to-br from-[#F1F2F3]  from-10% bg-opacity-70 px-4 py-10 rounded-lg relative snap-start">
      <div>
        <img className="w-[32px]" src={icon} alt={alt} />
        <h3 className="font-semibold text-xl my-2">{title}</h3>
        <p className="w-[320px] leading-5">{desc}</p>
      </div>
    </div>
  );
};

export default WorkCard;
