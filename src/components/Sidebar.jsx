import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine, RiMusic2Fill } from "react-icons/ri";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="duration-500 ml-5 flex flex-row justify-start items-center my-10 font-bold hover:text-gray-500"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240PX] py-10 px-4 ">
        <RiMusic2Fill className="text-black h-14 w-full" />
        <NavLinks />
      </div>
      {/* dedicated mobile menu */}
      <div className="absolute md:hidden block top-6 right-3 ">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="text-black w-10 h-10 font-bold mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="text-black w-10 h-10 font-bold mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#eeaeca] backdrop-blur-lg z-10 p-6 md:hidden 
        ${mobileMenuOpen ? "left-0" : "-left-full"}`}
      >
        <RiMusic2Fill className="text-black h-14 w-full" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
