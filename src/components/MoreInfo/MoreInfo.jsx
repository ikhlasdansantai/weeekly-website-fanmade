// import { LogoFacebook, LogoInstagram, ogoTiktok, LogoTwitter, LogoYoutube } from "react-ionicons";

import Title from "../TitleComp/Title";

const MoreInfo = () => {
  return (
    <section id="more-info" className="container py-20 px-[1.5rem]">
      <Title title={"MORE ABOUT WEEEKLY"} />
      <div className="sosial-media-wrapper grid lg:grid-cols-5">
        {/* <LogoFacebook name="Logo-facebook" color={"#fffffe"} size={60} onClick={() => alert("Hi!")} />
        <LogoTwitter name="logo-twitter" color={"#fffffe"} />
        <LogoYoutube name="logo-youtube" color={"#fffffe"} />
        <LogoInstagram name="logo-instagram" color={"#fffffe"} />
        <LogoTiktok name="logo-tiktok" color={"#fffffe"} /> */}
        <ion-icon name="accessibility-outline"></ion-icon>
      </div>
    </section>
  );
};

export default MoreInfo;
