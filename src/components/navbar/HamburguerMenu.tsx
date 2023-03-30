const HamburguerMenu = ({ mobileNavbarOpen, toggleFunction }: any) => {  
  return (
    <div
      className="w-9 h-9 flex flex-col items-end justify-center gap-2 relative z-[100] hover:cursor-pointer"
      onClick={() => {
        toggleFunction()
      }}
    >
      <div
        className={`h-1 bg-primary transition-all duration-300 ${
          mobileNavbarOpen ? "w-9 -rotate-45 translate-y-3" : "w-9"
        }`}
      ></div>
      <div
        className={`h-1 w-3 bg-primary transition-all duration-300 dark:bg-light ${
          mobileNavbarOpen && "opacity-0"
        }`}
      ></div>
      <div
        className={`h-1 bg-primary transition-all duration-300 ${
          mobileNavbarOpen ? "w-9 rotate-45 -translate-y-3" : "w-6"
        }`}
      ></div>
    </div>
  );
};

export default HamburguerMenu;
