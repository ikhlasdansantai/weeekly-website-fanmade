import Jihan from "../../assets/jihan-final.png";
const MemberProfile = () => {
  return (
    <div className="container flex max-w-full mx-auto overflow-hidden h-[100vh] min-[1700px]:min-h-[40rem] lg:py-40">
      <div className="header-bg mx-auto -z-30 absolute top-0 bottom-0">
        <div className="header-contents container flex flex-col sm:flex-row justify-center items-center lg:w-[90rem] lg:mt-10 h-[100vh] md:pt-[5rem]  min-[1700px]:items-start border">
          <div className="container p-standart header-content-titles sm:w-[50%] min-[1700px]:mt-[10rem]">
            <small className="tracking-wider text-white font-semibold">Weeekly's Jihan</small>
            <h1 className="text-5xl lg:text-[96px] md:leading-[7rem] text-white">Han Jih Yo</h1>
            <p className="text-slate-100 text-sm mt-2 lg:w-[50ch]">
              Han Ji-hyo atau lebih dikenal sebagai Jihan, adalah seorang penyanyi, dan penari asal Korea Selatan. Ia merupakan anggota dari grup vokal wanita, Weeekly yang berasal dari perusahaan IST Entertainment.
            </p>
            <button type="submit" className="border bg-white py-2 px-4 mt-8">
              Play Video
            </button>
          </div>
          <div className="header-content-img mt-auto sm:mt-0 flex w-[18rem] min-[350px]:w-[20rem] relative sm:w-[50%] lg:w-[40%]">
            <img src={Jihan} alt="Jihan Img" class="block w-full object-fit mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
