import { motion, useScroll, useTransform } from "framer-motion";
import down from "../assets/down.png";

const Top = () => {
  const { scrollY } = useScroll();
  const iconOpacity = useTransform(scrollY, [200, 300, 400], [0, 0.5, 1]);
  return (
    <a href="#nav">
      <motion.img
        className={`fixed bottom-8 right-4 rotate-180 w-9`}
        style={{ opacity: iconOpacity }}
        src={down}
        alt="to top"
      />
    </a>
  );
};

export default Top;
