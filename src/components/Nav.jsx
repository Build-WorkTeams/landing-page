import Logo from "../assets/desktop/Logo.svg";
import { BtnPrimary, BtnTransparent } from "./Buttons";

const Nav = () => {
  const navLinks = ["Home", "Team", "Our Features"];

  return (
    <header className="bg-bg-secondary">
      <nav className="mx-auto flex w-[90%] items-center justify-between py-6">
        <img className="h-9" src={Logo} alt="" />

        <div className="flex items-center lg:gap-[12rem]">
          <ul className="flex items-center gap-16">
            {navLinks.map((item, index) => (
              <li key={index} className="cursor-pointer text-[#252641]">
                {item}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <BtnTransparent bg="transparent" width="w-[9rem]" py="py-2">
              Sign Up
            </BtnTransparent>
            <BtnPrimary bg="bg-[#4D27BA]" width="w-[9rem]" py="py-2">
              Login
            </BtnPrimary>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
