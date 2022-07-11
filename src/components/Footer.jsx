import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full text-center mt-5  rounded-3xl">
      <a href="https://github.com/octagony" target='_blank' rel="noreferrer">
        <AiFillGithub className="mx-auto" size={35} />
      </a>
      <p>Octagony / {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
