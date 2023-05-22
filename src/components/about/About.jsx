import weeeklyPict from "../../assets/weeekly-photoshoot.png";
import Title from "../TitleComp/Title";

const About = () => {
  return (
    <div id="About" className="container pt-10 px-[1.5rem]">
      <div className="container lg:w-[90rem] mx-auto mt-2">
        <Title title={"ABOUT US"} />
        <div className="about-contents flex flex-col lg:flex-row items-center gap-12 mt-10 lg:mt-20">
          <figure className="flex lg:w-2/5 ">
            <img src={weeeklyPict} alt="" className="mx-auto w-full block" />
          </figure>
          <p className="text-textLight text-justify lg:w-2/4 text-base lg:text-lg lg:leading-[2] leading-loose">
            WEEEKLY (위클리) (previously known as PlayM Girls and FAVE Girls) is a South Korean girl group consisting of six members under IST Entertainment (previously Play M Entertainment). The members include Lee Soojin, Monday, Park
            Soeun, Lee Jaehee, Jihan, and Zoa. They made their debut on June 30, 2020, with their debut album titled "We Are," which features the lead single "Tag Me (@Me)".
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

/* WEEEKLY (위클리) (sebelumnya dikenal sebagai PlayM Girls dan FAVE Girls) adalah grup perempuan asal Korea Selatan yang terdiri dari enam anggota di bawah IST Entertainment (sebelumnya Play M Entertainment), yang terdiri dari Lee
Soojin, Monday, Park Soeun, Lee Jaehee, Jihan, dan Zoa. Mereka debut pada 30 Juni 2020 dengan album debut mereka "We Are", yang menampilkan lagu judul Tag Me (@Me). */
