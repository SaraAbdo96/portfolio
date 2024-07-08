import logo from "../../assets/images/logo.png";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} width={100} height={100} />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map((navLink) => (
            <li
              key={navLink._id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                to={navLink.link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
