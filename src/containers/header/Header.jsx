// import Main from "../main/main";
// import MemberProfile from "../../components/member-profile/member-profile";
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
// import Navbar from "../../components/navbar/Navbar";

const Header = () => {
  const [selectedMember, setSelectedMember] = useState({
    name: "Han Jih Yo",
    username: "Jihan",
    src: Jihan,
    biodata: "Han Ji-hyo atau lebih dikenal sebagai Jihan, adalah seorang penyanyi, dan penari asal Korea Selatan. Ia merupakan anggota dari grup vokal wanita, Weeekly yang berasal dari perusahaan IST Entertainment.",
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
      username: "Soojin",
      biodata: "Lee Soo-jin atau lebih dikenal sebagai Soojin, adalah seorang penyanyi, dan penari asal Korea Selatan. Ia merupakan anggota dari grup vokal wanita, Weeekly yang berasal dari perusahaan IST Entertainment",
    },
    {
      src: monday,
      name: "Monday",
      username: "Monday",
      biodata: "Monday atau lebih dikenal sebagai Monday, adalah seorang penyanyi, dan penari asal Korea Selatan. Ia merupakan anggota dari grup vokal wanita, Weeekly yang berasal dari perusahaan IST Entertainment",
    },
    {
      src: soeun,
      name: "Park Soeun",
      username: "soeun",
      biodata: "soeun atau lebih dikenal sebagai soeun, adalah seorang penyanyi, dan penari asal Korea Selatan. Ia merupakan anggota dari grup vokal wanita, Weeekly yang berasal dari perusahaan IST Entertainment",
    },
    {
      src: jaehee,
      name: "Lee Jae Hee",
      username: "Jaehee",
      biodata: "Lee Jae-hee atau lebih dikenal sebagai Jaehee, adalah seorang penyanyi, dan penari asal Korea Selatan. Ia merupakan anggota dari grup vokal wanita, Weeekly yang berasal dari perusahaan IST Entertainment",
    },
    {
      src: Jihan,
      name: "Han Jih Yo",
      username: "Jihan",
      biodata: "Han Ji-hyo atau lebih dikenal sebagai Jihan, adalah seorang penyanyi, dan penari asal Korea Selatan. Ia merupakan anggota dari grup vokal wanita, Weeekly yang berasal dari perusahaan IST Entertainment.",
    },
    {
      src: zoa,
      name: "Jo Hye Won",
      username: "Zoa",
      biodata: "Zoa merupakan member termuda dalam Weeekly dan sering dipanggil dengan sebutan Zoababy oleh para member. Ia pernah tampil dalam VCR Stray Kids di MMA 2018 .",
    },
  ];

  return (
    <header id="header">
      <div id="temp" className="container flex max-w-full mx-auto overflow-hidden">
        <div className="header-bg h-full mx-auto -z-30">
          <div className="header-contents container flex flex-col justify-center items-center min-[390px]:pt-[3rem] sm:flex-row sm:py-32 lg:w-[90rem] min-[1700px]:items-start min-[1700px]:py-[5rem]">
            <div className="container p-standart header-content-titles md:w-[70%] min-[1700px]:mt-[10rem]">
              <small className="tracking-wider text-white font-semibold">Weeekly's {selectedMember.username}</small>
              <h1 className="text-5xl md:text-[55px] lg:text-[96px] md:leading-[4rem] lg:leading-[7rem] text-white">{selectedMember.name}</h1>
              <p className="text-slate-100 text-sm lg:text-base  mt-4 lg:w-[60ch] leading-7">{selectedMember.biodata}.</p>
              <button type="submit" className="border bg-white py-2 px-4 mt-8">
                Play Video
              </button>
            </div>
            <div className="header-content-img mt-auto sm:mt-0 flex w-[18rem] min-[350px]:w-[20rem] relative md1111111111:w-[30%] lg:w-[40%]">
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
