import About from "../../components/about/About";
import Discography from "../../components/discography/discography";
import Schedule from "../../components/schedule/Schedule";
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
    </section>
  );
};

export default Main;
