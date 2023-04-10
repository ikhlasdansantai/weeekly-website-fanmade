import Title from "../TitleComp/Title";

import wePlayAlbum from "../../assets/we-play.jpg";
import playGameAlbum from "../../assets/Weeekly_-_Play_Game_-_Awake.png";
// import unknownAlbum from "../../assets/unknown.jpg";
// import AlbumCard from "../albumCard/AlbumCard";
import wecanAlbum from "../../assets/Weeekly_wecan_2020.jpg";

import weClear from "../../assets/weclear.jpg";
import unknownShow from "../../assets/unknownShow.jpg";
import pitPatShow from "../../assets/pit-a-pat.jpg";

const VarietyShow = () => {
  const albums = [
    {
      name: "Play Game Awake",
      date: "01 JAN 2017",
      src: playGameAlbum,
    },
    {
      name: "We Play",
      date: "01 JAN 2019",
      src: wePlayAlbum,
    },
    {
      name: "We Play",
      date: "01 JAN 2019",
      src: wecanAlbum,
    },
    {
      name: "We Can",
      date: "01 JAN 2019",
      src: wecanAlbum,
    },
  ];

  return (
    <section id="variety-show" className="container pt-20 px-[1.5rem]">
      <div className="container mx-auto">
        <Title title={"VARIETY SHOW"} />
        <div className="video-cards grid lg:grid-cols-3 gap-12 pt-10">
          <div className="video-card shadow-md group cursor-pointer lg:hover:-mt-2 hover:shadow-[#fff] duration-300 transition-all">
            <figure className="flex">
              <img src={weClear} alt="" className="block max-w-full" />
            </figure>
            <div className="card-footer p-standart">
              <h2 className="text-xl text-white leading-relaxed tracking-[.5px]">WeClear</h2>
            </div>
          </div>
          <div className="video-card shadow-md group cursor-pointer lg:hover:-mt-4 hover:shadow-[#fff] duration-300 transition-all">
            <figure className="flex">
              <img src={unknownShow} alt="" className="block max-w-full" />
            </figure>
            <div className="card-footer p-standart">
              <h2 className="text-xl text-white leading-relaxed tracking-[.5px]">WeClear</h2>
            </div>
          </div>
          <div className="video-card shadow-md group cursor-pointer lg:hover:-mt-4 hover:shadow-[#fff] duration-300 transition-all">
            <figure className="flex">
              <img src={pitPatShow} alt="" className="block max-w-full" />
            </figure>
            <div className="card-footer p-standart">
              <h2 className="text-xl text-white leading-relaxed tracking-[.5px]">WeClear</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VarietyShow;
