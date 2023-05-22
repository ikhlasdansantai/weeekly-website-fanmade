import Title from "../TitleComp/Title";

import weClear from "../../assets/weclear.jpg";
import weClearEp2 from "../../assets/weclear-ep2.jpg";
import pitPatShow from "../../assets/pit-a-pat.jpg";

const VarietyShow = () => {
  const varietyShow = [
    {
      name: "Pit A Pat",
      src: pitPatShow,
      link: "https://www.youtube.com/watch?v=DPreRRBoRbc",
    },
    {
      name: "weClear",
      src: weClear,
      link: "https://www.youtube.com/watch?v=dC4OVecjNmo",
    },
    {
      name: "We Clear Ep.2",
      src: weClearEp2,
      link: "https://www.youtube.com/watch?v=1EX0zQTK93o",
    },
  ];

  return (
    <section id="Shows" className="container pt-20 px-[1.5rem]">
      <div className="container mx-auto">
        <Title title={"VARIETY SHOW"} />
        <div className="video-cards grid lg:grid-cols-3 gap-12 pt-10">
          {varietyShow.map((show, index) => {
            return (
              <a key={index} href={show.link}>
                <div className="video-card shadow-md group cursor-pointer lg:hover:-mt-2 hover:shadow-[#fff] duration-300 transition-all">
                  <figure className="flex">
                    <img src={show.src} alt={`${show.src} pict`} className="block max-w-full" />
                  </figure>
                  <div className="card-footer p-standart">
                    <h2 className="text-xl text-white leading-relaxed tracking-[.5px]">{show.name}</h2>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VarietyShow;
