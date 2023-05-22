import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const Member = ({ MemberDatas, onMemberClick }) => {
  const handleClick = (member) => {
    onMemberClick(member);
  };

  return (
    <section id="member" className="bg-primary p-standart py-20 mt-[-3px]">
      <h2 className="text-3xl text-center text- mb-8 text-[#ffe]">MEMBER'S PROFILE</h2>
      <Swiper
        speed={1000}
        spaceBetween={30}
        grabCursor={true}
        slidesPerView={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1500: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        navigation={true}
        modules={[Autoplay]}
        loop
        className="mySwiperflex bg-primary min-[1700px]:w-[90rem] mx-auto overflow-hidden"
      >
        {MemberDatas.map((memberData, index) => {
          return (
            <SwiperSlide onClick={() => handleClick(memberData)} key={index}>
              <div className="member-card border-4 border-white">
                <div className="member-img">
                  <img src={memberData.src} alt={`${memberData.name} pict`} className="block" />
                </div>
                <h2 className="member-name text-black text-center font-semibold bg-white ">{memberData.username}</h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Member;
