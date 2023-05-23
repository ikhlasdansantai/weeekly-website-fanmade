import Title from "../TitleComp/Title";
import wePlayAlbum from "../../assets/we-play.png";
import playGameAlbum from "../../assets/Weeekly_-_Play_Game_-_Awake.png";
import wecanAlbum from "../../assets/Weeekly_wecan_2020.png";
import AlbumCard from "../albumCard/AlbumCard";

const Discography = () => {
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
      name: "We Can",
      date: "01 JAN 2019",
      src: wecanAlbum,
    },
    {
      name: "We Play",
      date: "01 JAN 2019",
      src: wePlayAlbum,
    },
  ];
  return (
    <div id="Albums" className="container py-20 px-[1.5rem]">
      <div className="container min-[1700px]:w-[90rem] mx-auto mt-2">
        <Title title={"DISCOGRAPHY"} />
        <div className="w-full cards mt-10 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:justify-between justify-stretch">
          <AlbumCard albumDatas={albums} />
        </div>
      </div>
    </div>
  );
};

export default Discography;
