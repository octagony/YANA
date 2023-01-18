import React from "react";
import { AiFillGithub } from "react-icons/ai";
import useTheme from "../store/useTheme.jsx";

const Footer = () => {
  const theme = useTheme((state) => state.theme);
  return (
    <div
      className={`w-full text-center mt-5 rounded-3xl  ${
        theme ? "text-white" : "text-neutral-900"
      }`}
    >
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
