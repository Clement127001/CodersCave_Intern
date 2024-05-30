import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { qna } from "../../../utils/constants";
const QNA = () => {
  const [activeQn, setActiveQn] = useState(qna[0].id);

  const toggleAccordianHandler = (e) => {
    setActiveQn((prev) => {
      const currId = e.target.getAttribute("data-id");

      return currId === prev ? null : e.target.getAttribute("data-id");
    });
  };
  return (
    <div
      className="flex flex-col items-center justify-center px-2 mb-10"
      layout
    >
      <h3 className="mb-6 text-white text-[32px] leading-[40px] font-extralight max-sm:text-[24px] max-sm:leading-[32px] place-self-start">
        Before sending me a message, here are some <br />
        things you should know
      </h3>

      <div
        className=" w-[800px] max-sm:w-[90%]"
        onClick={toggleAccordianHandler}
      >
        {qna.map((item) => (
          <div
            key={item.id}
            className="py-2 px-4  border-b-[#ccc] border-b-[0.5px] last:border-none h-fit"
          >
            <h4
              className={`flex justify-between text-white cursor-pointer pb-2`}
              data-id={item.id}
            >
              {item.question}
              {activeQn === item.id ? (
                <span className="font-semibold">-</span>
              ) : (
                <span className="font-semibold">+</span>
              )}
            </h4>
            <AnimatePresence>
              {activeQn === item.id && (
                <div>
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-opacity-75 "
                  >
                    {item.answer}
                  </motion.p>
                </div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QNA;
