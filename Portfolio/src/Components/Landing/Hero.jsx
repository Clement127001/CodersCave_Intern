import { motion } from "framer-motion";
import { container, item } from "../../../utils/constants";
import downIcon from "../../assets/down.png";
const Hero = () => {
  return (
    <motion.div
      className="w-full font-sans h-[90vh] max-sm:h-[90vh] flex flex-col justify-center items-center text-center px-2"
      animate="visible"
      initial="hidden"
      variants={container}
    >
      <motion.h1
        className=" text-3xl font-light text-secondary max-sm:text-2xl py-2"
        variants={item}
      >
        Hey There I’m Clement
      </motion.h1>

      <motion.h2
        className="font-semibold text-[72px]  max-sm:text-[48px]  leading-[80px] max-sm:leading-[56px] text-white"
        variants={item}
      >
        Freelance UI Desginer
        <br /> &Web Developer{" "}
      </motion.h2>

      <motion.p
        className="max-w-[500px]  text-white opacity-75 max-sm:text-sm mt-2"
        variants={item}
      >
        I help business grow by crafting amazing web experiences. If you’re
        looking for a designer and developer that likes to get stuff done, let’s
        talk.
      </motion.p>

      <motion.a
        href="#work"
        className="bg-gradient-to-r from-secondary to-primary px-6 py-3 rounded-full flex items-center text-white font-semibold text-lg mt-8 gap-4 shadow-lg duration-300"
        variants={item}
      >
        See my work{" "}
        <span>
          <img src={downIcon} width={24} alt="go" className=" animate-bounce" />
        </span>
      </motion.a>
    </motion.div>
  );
};

export default Hero;
