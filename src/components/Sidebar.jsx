import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine, RiMusic2Fill } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = () => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink className="ml-5 flex flex-row justify-start items-center my-8 text-white font-bold hover:text-black">
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240PX] py-10 px-4 bg-[#eeaeca]">
        <RiMusic2Fill className="text-white h-14 w-full" />
        <NavLinks />
      </div>
    </>
  );
};

export default Sidebar;
