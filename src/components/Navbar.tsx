import User from "./icons/User";
import BoxIcon from "./icons/BoxIcon";
import DiaryIcon from "./icons/DiaryIcon";
import HamburguerMenu from "./navbar/HamburguerMenu";
import { useState } from "react";
import MobileNavMenu from "./navbar/MobileNavMenu";

const Navbar = () => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  return (
    <div className="h-20 sticky top-0 bg-light z-50">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div>
            <p className="text-danger font-bold">cristodca</p>
          </div>

          <div className="block lg:hidden">
            <HamburguerMenu
              mobileNavbarOpen={mobileNavbarOpen}
              toggleFunction={() => {
                setMobileNavbarOpen((prevState) => !prevState);
              }}
            />
          </div>

          <nav className="hidden lg:block">
            <ul className="flex gap-2">
              <li>
                <a href="/#experience" className="button button-link-primary">
                  <div className="w-6 h-6">
                    <User />
                  </div>
                  Experiencia
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="button button-link-primary">
                  <div className="w-6 h-6">
                    <BoxIcon />
                  </div>
                  Portafolio
                </a>
              </li>
              <li>
                <a href="/#blog" className="button button-link-primary">
                  <div className="w-6 h-6">
                    <DiaryIcon />
                  </div>
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="absolute lg:hidden">
            <MobileNavMenu mobileNavbarOpen={mobileNavbarOpen} closeFunction={() => setMobileNavbarOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
