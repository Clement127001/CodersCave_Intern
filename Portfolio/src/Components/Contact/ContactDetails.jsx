import { motion } from "framer-motion";
import { container, item } from "../../../utils/constants";
const ContactDetails = () => {
  return (
    <motion.div
      className="h-[50vh] flex w-full flex-col items-center justify-center text-center"
      variants={container}
      animate="visible"
      initial="hidden"
    >
      <motion.h1
        className="text-white font-mono text-[40px] leading-[48px] tracking-tight mb-6"
        variants={item}
      >
        I am currently available for
        <br /> freelance work
      </motion.h1>
      <motion.p variants={item} className="text-white opacity-85">
        If you’re looking for a designer and developer that likes to get stuff
        done, let’s talk.
      </motion.p>

      <motion.div
        className="flex gap-4 max-sm:flex-col justify-center items-center my-8 max-sm:my-4"
        variants={item}
      >
        <button className="bg-gradient-to-r from-secondary to-primary px-6 py-3 rounded-full flex items-center text-white font-medium text-lg shadow-xl max-sm:text-[16px]">
          babiyonclement18@gmail.com
        </button>
        <button className="border-2 border-s border-secondary px-6 py-3 rounded-full text-secondary font-semibold">
          +91 6374914684
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ContactDetails;
