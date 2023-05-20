import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer class="bg-neutral-200 text-center text-white dark:bg-neutral-600">
      <div class="container pt-9">
        <div class="mb-9 flex justify-center gap-9">
          <a href="#">
            <Icon icon="icon-park-outline:instagram" className="text-black text-[1.4rem]" />
          </a>
          <a href="#">
            <Icon icon="bytesize:github" className="text-black text-[1.4rem]" />
          </a>
          <a href="#">
            <Icon icon="teenyicons:youtube-solid" className="text-black text-[1.4rem]" />
          </a>
          <a href="#">
            <Icon icon="mingcute:twitter-fill" className="text-black text-[1.4rem]" />
          </a>
        </div>
      </div>

      <p class="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        This website is created using ☕🤔💖🤠
        <p class="text-neutral-800 dark:text-neutral-400 mt-2">
          © 2023{" "}
          <a className="font-semibold" href="https://ikhlasdansantai.netlify.app/">
            ikhlasdansantai
          </a>{" "}
          . All Rights Reserved.
        </p>
      </p>
    </footer>
  );
};

export default Footer;
