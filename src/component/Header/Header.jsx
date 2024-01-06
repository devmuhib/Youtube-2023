import React, { useRef, useEffect } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = headerRef.current.clientHeight;
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center custom-header"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              M
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Mesharet Ivan Lorica
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
          </div>
          <div className="menu" onClick={toggleMenu} ref={menuRef}>
            <ul className="flex items-center gap-10">
              <li>
                <button
                  className="text-smallTextColor font-[600]"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="text-smallTextColor font-[600]"
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="text-smallTextColor font-[600]"
                  onClick={() => scrollToSection("portfolio")}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  className="text-smallTextColor font-[600]"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i className="ri-send-plane-line"></i> Let's Talk{" "}
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
