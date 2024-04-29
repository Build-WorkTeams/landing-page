import Logo from "../assets/Desktop/Logo.svg";
import { BtnPrimary, BtnTransparent } from "./Buttons";

const Nav = () => {
  const navLinks = ["Home", "Team", "Our Features"];

  return (
    <header className="bg-bg-secondary">
      <nav className="w-[90%] mx-auto flex items-center py-4 justify-between">
        <img className="h-9" src={Logo} alt="" />

        <div className="flex items-center">
          <ul className="flex items-center">
            {navLinks.map((item, index) => (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <BtnTransparent bg="transparent" width="w-[9rem]" py="py-2">
            Sign Up
          </BtnTransparent>
          <BtnPrimary bg="bg-[#4D27BA]" width="w-[9rem]" py="py-2">
            Login
          </BtnPrimary>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
