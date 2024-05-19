import { socialLinks } from "../../utils/constants";
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav className="pt-4 px-2  flex justify-center max-lg:justify-start">
      <div className="flex justify-between items-center w-[900px] max-lg:w-[90%]">
        <img src={logo} alt="home" width={32} height={32} />

        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <a href={item.source} key={item.id} target="_blank">
              <img
                width={40}
                height={40}
                className="object-cover cursor-pointer"
                src={item.src}
                alt={item.alt}
                key={item.alt}
              />
            </a>
          ))}
        </div>
      </div>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
