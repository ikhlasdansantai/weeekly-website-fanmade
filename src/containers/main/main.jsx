import MoreInfo from "../../components/MoreInfo/MoreInfo";
import About from "../../components/about/About";
import Discography from "../../components/discography/discography";
import Schedule from "../../components/schedule/Schedule";
// import Member from "../../components/member/Member";
import VarietyShow from "../../components/varietyShow/VarietyShow";
import Vote from "../../components/vote/Vote";

const Main = () => {
  return (
    <section id="main" className="bg-primary w-full overflow-hidden">
      <About />
      <Discography />
      <VarietyShow />
      <Schedule />
      <Vote />
      {/* <MoreInfo /> */}
    </section>
  );
};

export default Main;
