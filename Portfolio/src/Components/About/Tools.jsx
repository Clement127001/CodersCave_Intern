import { useState } from "react";
import { motion } from "framer-motion";
import { tabs, tools, development } from "../../../utils/constants";

const ToolsItems = ({ item }) => {
  const items = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <motion.div
      variants={items}
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
      key={item.name}
      className="bg-white rounded-xl py-2 px-6 flex flex-col items-center gap-2 w-[80px] h-fit"
    >
      <img src={item.src} alt={item.name} width={56} />
      <h4 className="font-semibold line-clamp-1">{item.name}</h4>
    </motion.div>
  );
};

const Tools = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="bg-[#fff] px-4 py-2 flex gap-4 rounded-full mt-12 w-fit">
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
            className={`${
              activeTab === item.id ? "text-[#fff]" : ""
            } transition relative rounded-full px-4 py-2 font-semibold  z-10 text-[#000]`}
          >
            {activeTab === item.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-5 bg-gradient-to-r from-secondary to-primary mix-blend-lighten shadow-md"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {item.label}
          </button>
        ))}
      </div>

      <motion.div
        variants={container}
        animate="visible"
        initial="hidden"
        className="flex max-sm:w-[50vh] overflow-scroll mt-8 gap-4 no-scrollbar h-[100px] py-2 cursor-pointer"
      >
        {activeTab === "tools"
          ? tools.map((item) => <ToolsItems item={item} />)
          : development.map((item) => <ToolsItems item={item} />)}
      </motion.div>
    </div>
  );
};

export default Tools;
