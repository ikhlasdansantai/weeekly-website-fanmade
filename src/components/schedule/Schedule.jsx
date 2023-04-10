import Title from "../TitleComp/Title";

import KrossEvent from "../../assets/Krossevent.png";
import Kflex from "../../assets/KFLEX.jpg";
import contour from "../../assets/contour.jpg";
import ScheduleCard from "../ScheduleCard/ScheduleCard";

const Schedule = () => {
  const eventDatas = [
    {
      event: "KROSS",
      desc: "lorem ipsum dolor amet.",
      location: "Japan",
      date: "07.02.2022",
      src: KrossEvent,
    },
    {
      event: "K.FLEX",
      desc: "lorem ipsum dolor amet.",
      location: "German",
      date: "17.06.2023",
      src: Kflex,
    },
    {
      event: "CON-TOUR",
      desc: "lorem ipsum dolor amet.",
      location: "Australia",
      date: "17.10.2021",
      src: contour,
    },
  ];
  return (
    <div id="Schedule" className="container py-20 px-[1.5rem]">
      <div className="container lg:w-[90rem] mx-auto mt-2">
        <Title title={"SCHEDULE"} />
        <div className="schedule-cards grid lg:grid-cols-3 gap-14 mt-20">
          <ScheduleCard events={eventDatas} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
