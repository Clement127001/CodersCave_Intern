import { NavLink, Link } from "react-router-dom";
import { socialLinks, links } from "../../utils/constants";
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav
      className=" py-4 px-2 max-lg:px-4  flex justify-center max-lg:justify-start max-lg:pt-4"
      id="nav"
    >
      <div className="flex justify-between items-center w-[900px] max-lg:w-[85%] ">
        <Link to="/">
          <img src={logo} alt="home" width={32} height={32} />
        </Link>

        <div className="flex gap-4 items-center  max-sm:hidden">
          <div className="flex gap-4">
            {links.map((item) => (
              <NavLink
                to={item.src}
                className="font-sans text-[1.25rem] text-white hover:scale-110  duration-300"
                key={item.id}
              >
                {item.to}
              </NavLink>
            ))}
          </div>

          <span className="h-8 w-[2px] bg-opacity-50 rounded-md"></span>
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
      </div>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
