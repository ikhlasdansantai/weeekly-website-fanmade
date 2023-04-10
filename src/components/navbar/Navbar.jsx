// import Logo from "./assets/Weeekly_logo.png";
import "./navbar.css";
import Logo from "../../assets/Weeekly_logo.png";
import { useState, useRef } from "react";

const Navbar = () => {
  const ulMenus = ["Home", "About", "Projects", "Events", "Store"];

  const [isChecked, setIsChecked] = useState(false);
  const myRef = useRef(null);

  const handleChange = (event) => {
    if (event.target.checked === true) {
      myRef.current.classList.add("active");
    } else {
      myRef.current.classList.remove("active");
      setIsChecked(false);
    }
  };

  return (
    <nav className="py-[1.5rem] px-[1.5rem] fixed bottom-0 left-0 right-0  w-full bg-black mx-auto md:bg-transparent md:top-0 z-[9999999999999]">
      <section className="nav-wrappers flex justify-between items-center mx-auto lg:w-[90rem] relative z-50">
        <img src={Logo} alt="weeekly Logo" className="block w-[7rem]" />

        <ul className="desktop hidden justify-between items-center ml-auto md:flex w-[22rem] ">
          {ulMenus.map((ulMenu, index) => (
            <li key={index}>
              <a href={`#${ulMenu}`} className="font-semibold">
                {ulMenu}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile md:hidden">
          <div className="fries-menu flex flex-col justify-between w-[30px] h-[25px] relative">
            <input id="checkbox" type="checkbox" className="scale-125 opacity-0 absolute top-0 bottom-0 left-0 right-0 z-10" onChange={(e) => handleChange(e)} />
            <span className="block w-full h-[3px] bg-black rounded-sm"></span>
            <span className="block w-[65%] ml-auto h-[3px] bg-black rounded-sm"></span>
            <span className="block w-full h-[3px] bg-black rounded-sm"></span>
          </div>
        </div>
      </section>
      <ul id="nav-mobile" ref={myRef} className={(isChecked, "bg-white")}>
        {ulMenus.map((ulMenu, index) => (
          <li key={index}>
            <a href={`#${ulMenu}`} className="font-semibold">
              {ulMenu}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

// Thanks To
// https://stackoverflow.com/questions/63052586/react-swiperjs-autoplay-not-making-the-swiper-to-auto-swipe
