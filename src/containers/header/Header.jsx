import "./header.css";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import monday from "../../assets/members/Monday.png";
import soojin from "../../assets/members/Soojin.png";
import jaehee from "../../assets/members/Jaehee.png";
import soeun from "../../assets/members/Soeun.png";
import Jihan from "../../assets/members/Jihan.png";
import zoa from "../../assets/members/Zoa.png";
import Member from "../../components/member/Member";
import Navbar from "../../components/navbar/Navbar";

const Header = () => {
  const [selectedMember, setSelectedMember] = useState({
    src: Jihan,
    name: "Han Jih Yo",
    role: "Lead Vocalist",
    username: "Jihan",
    biodata: "Han Ji-hyo, or better known as Jihan, is a singer and dancer from South Korea. She is a member of the female vocal group, Weeekly, which is under the IST Entertainment company.",
  });

  const handleMemberSelect = (member) => {
    setSelectedMember(member);
    // window.scrollTo({ top: 0, behavior: "smooth" });
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  const MemberDatas = [
    {
      src: soojin,
      name: "Lee Soo Jin",
      role: "Leader",
      username: "Soojin",
      biodata: "Lee Soo-jin, or better known as Soojin, is a singer and dancer from South Korea. She is a member of the female vocal group, Weeekly, which is under the IST Entertainment company.",
    },
    {
      src: monday,
      name: "Monday",
      role: "Vocal Leader",
      username: "Monday",
      biodata: "Monday, or better known as Monday, is a singer and dancer from South Korea. She is a member of the female vocal group, Weeekly, which is under the IST Entertainment company.",
    },
    {
      src: soeun,
      name: "Park Soeun",
      role: "Dance Leader",
      username: "soeun",
      biodata: "Soeun, or better known as Soeun, is a singer and dancer from South Korea. She is a member of the female vocal group, Weeekly, which is under the IST Entertainment company.",
    },
    {
      src: jaehee,
      name: "Lee Jae Hee",
      role: "Sub Vocalist",
      username: "Jaehee",
      biodata: "Lee Jae-hee, or better known as Jaehee, is a singer and dancer from South Korea. She is a member of the female vocal group, Weeekly, which is under the IST Entertainment company.",
    },
    {
      src: Jihan,
      name: "Han Jih Yo",
      role: "Visual",
      username: "Jihan",
      biodata: "Han Ji-hyo, or better known as Jihan, is a singer and dancer from South Korea. She is a member of the female vocal group, Weeekly, which is under the IST Entertainment company.",
    },
    {
      src: zoa,
      name: "Jo Hye Won",
      role: "Maknae",
      username: "Zoa",
      biodata: "Zoa is the youngest member in Weeekly and is often called Zoababy by the other members. She has appeared in Stray Kids' VCR at the 2018 MMA (Melon Music Awards).",
    },
  ];

  return (
    <header id="Home">
      <Navbar />
      <div id="temp" className="container flex max-w-full mx-auto overflow-hidden">
        <div className="header-bg h-full mx-auto">
          <div className="header-contents container flex flex-col justify-center items-center min-[390px]:pt-[0rem] sm:flex-row sm:py-32 lg:w-[90rem] min-[1700px]:items-start min-[1700px]:py-[5rem]">
            <div className="container p-standart header-content-titles md:w-[70%] min-[1700px]:mt-[10rem]">
              <small className="tracking-wider text-white font-semibold">
                Weeekly's {selectedMember.username} / {selectedMember.role}
              </small>
              <h1 className="text-5xl md:text-[55px] lg:text-[96px] md:leading-[4rem] lg:leading-[7rem] text-white">{selectedMember.name}</h1>
              <p className="text-slate-100 text-sm lg:text-base  mt-4 lg:w-[60ch] leading-7">{selectedMember.biodata}.</p>
              {/* <button type="submit" className="border bg-white py-2 px-4 mt-8">
                Play Video
              </button> */}
            </div>
            <div className="header-content-img mt-auto sm:mt-0 flex w-[18rem] min-[350px]:w-[20rem] relative md:w-[30%] lg:w-[40%]">
              <img src={selectedMember.src} alt="Jihan Img" className="block w-full object-fit mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <Member MemberDatas={MemberDatas} onMemberClick={handleMemberSelect} />
    </header>
  );
};

export default Header;

/* <img src={HeaderBg} alt="Header BG" class="block object-center mx-auto bg-fixed absolute top-0 bottom-0 -z-10 min-[1700px]:py-[5rem]" /> */

// Gamifikasi / Julukan dalam menyelesaikan sesuatu
