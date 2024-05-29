import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";
import { links, socialLinks } from "../../utils/constants";

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 375px 25px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },

    closed: {
      clipPath: "circle(30px at 375px 25px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 60,
      },
    },
  };

  const linksVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariant = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const navLinkClickHandler = () => {
    setNav(false);
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center bg-white text-[#001524] sm:hidden"
      animate={nav ? "open" : "closed"}
    >
      <motion.div
        className=" z-20 fixed top-0 right-0 bottom-0 w-[400px]  bg-white"
        variants={variants}
      >
        <motion.ul
          className="absolute w-full h-full flex flex-col gap-6 justify-center items-center"
          variants={linksVariants}
        >
          {links.map((item) => (
            <motion.li key={item.id} variants={linkVariant}>
              <NavLink
                to={item.src}
                className="font-sans text-3xl "
                onClick={navLinkClickHandler}
              >
                {item.to}
              </NavLink>
            </motion.li>
          ))}

          <motion.li className="flex gap-2 mt-4" variants={linkVariant}>
            {socialLinks.map((item) => (
              <a href={item.source} key={item.id} target="_blank">
                <img
                  width={48}
                  height={48}
                  className="object-cover cursor-pointer"
                  src={item.src}
                  alt={item.alt}
                  key={item.alt}
                />
              </a>
            ))}
          </motion.li>
        </motion.ul>
      </motion.div>
      <ToggleButton setToggle={setNav} />
    </motion.div>
  );
};

export default Sidebar;
