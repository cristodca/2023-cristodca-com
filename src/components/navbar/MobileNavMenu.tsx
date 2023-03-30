import User from "./../icons/User";
import BoxIcon from "./../icons/BoxIcon";
import DiaryIcon from "./../icons/DiaryIcon";

interface Props {
  mobileNavbarOpen: boolean;
  closeFunction: any
}

const MobileNavMenu = ({ mobileNavbarOpen, closeFunction }: Props) => {
  return (
    <nav
      className={`fixed top-0 bottom-0 h-screen w-full right-0 flex items-center bg-glass transition-all duration-150 ${
        mobileNavbarOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
    >
      <ul className="flex flex-col w-full lg:gap-2">
        <li>
          <a
            href="/#experience"
            className="button button-link-primary flex justify-start flex-row-reverse"
            onClick={() => closeFunction()}
          >
            <div className="w-6 h-6">
              <User />
            </div>
            Experiencia
          </a>
        </li>
        <li>
          <a
            href="/#portfolio"
            className="button button-link-primary flex justify-start flex-row-reverse"
            onClick={() => closeFunction()}
          >
            <div className="w-6 h-6">
              <BoxIcon />
            </div>
            Portafolio
          </a>
        </li>
        <li>
          <a
            href="/#blog"
            className="button button-link-primary flex justify-start flex-row-reverse"
            onClick={() => closeFunction()}
          >
            <div className="w-6 h-6">
              <DiaryIcon />
            </div>
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
