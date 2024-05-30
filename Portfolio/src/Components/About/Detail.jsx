import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { container, item } from "../../../utils/constants";

const Detail = () => {
  return (
    <motion.div
      className="h-[50vh] max-sm:h-[60vh]  px-4 text-center flex flex-col items-center justify-center"
      animate="visible"
      initial="hidden"
      variants={container}
    >
      <motion.h1
        className="text-[40px] text-secondary font-mono"
        variants={item}
      >
        I’m Clement
      </motion.h1>
      <motion.p
        className="w-[600px] max-sm:w-[80%] text-white opacity-70 mb-4 text-[16px] max-sm:text-sm"
        variants={item}
      >
        A web developer and UI/UX designer with a passion for creating
        beautiful, functional, and user-centered digital experiences. With 1
        years of experience in the field. I am always looking for new and
        innovative ways to bring my clients' visions to life.
      </motion.p>

      <motion.div variants={item}>
        <Link
          to="/"
          className="bg-gradient-to-r from-secondary to-primary px-6 py-3 rounded-full flex items-center text-white font-medium text-lg mt-4 shadow-xl  max-sm:text-[16px]"
        >
          See My Works
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Detail;

// - Passion Fuels Purpose!

// - I believe that design is about more than just making things look pretty – it's about solving problems and
// creating intuitive, enjoyable experiences for users.

// - Whether I'm working on a website, mobile app, or
// other digital product, I bring my commitment to design excellence and user-centered thinking to
// every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
