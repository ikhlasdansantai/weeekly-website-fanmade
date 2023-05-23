import { Icon } from "@iconify/react";

const Footer = () => {
  const links = [
    {
      link: "https://www.instagram.com/_Weeekly/",
      iconClass: "icon-park-outline:instagram",
      hoverClass: "hover:text-red-500",
      label: "Follow us on Instagram",
    },
    {
      link: "https://www.youtube.com/c/Weeekly",
      iconClass: "teenyicons:youtube-solid",
      hoverClass: "hover:text-[#FF0000]",
      label: "Follow us on Youtube",
    },
    {
      link: "https://twitter.com/_Weeekly",
      iconClass: "mingcute:twitter-fill",
      hoverClass: "hover:text-[#1DA1F2]",
      label: "Follow us on Twitter",
    },
    {
      link: "https://www.facebook.com/WeeeklyOfficial",
      iconClass: "uil:facebook",
      hoverClass: "hover:text-[#1877F2]",
      label: "Follow us on Facebook",
    },
    {
      link: "https://www.tiktok.com/@weeekly",
      iconClass: "ic:round-tiktok",
      hoverClass: "hover:text-[#FF0000]",
      label: "Follow us on Tiktok",
    },
  ];

  return (
    <footer className="bg-[#fff] text-center text-white mb-[4.5rem] sm:mb-0">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center gap-9">
          {links.map((link, index) => {
            return (
              <a key={index} href={link.link}>
                <Icon icon={link.iconClass} aria-label={link.label} className={`text-black text-[1.4rem] ${link.hoverClass}`} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="bg-[#999] p-4 text-center text-white">
        This website is created using ☕🤔💖🤠
        <p className="text-white">
          © 2023{" "}
          <span className="font-semibold hover:text-[#ddd]">
            <a href="https://github.com/ikhlasdansantai" aria-label="Follow Me On Github">
              ikhlasdansantai
            </a>
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
