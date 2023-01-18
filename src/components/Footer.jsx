import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-neutral-700 dark:text-gray-200 text-center mt-10">
      <a
        className="inline-block"
        href="https://github.com/octagony"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="mx-auto" size={40} />
      </a>
      <p>Octagony / {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
