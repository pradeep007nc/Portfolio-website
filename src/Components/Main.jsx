import React from "react";
import img from "../assets/background.jpeg";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src={img}
        alt="Pradeep's Image"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="text-[25px] md:text-[50px] font-bold md:font-bold text-gray-800">
            I'm Pradeep N C
          </h1>
          <h2 className="flex md:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Java and Angular Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Tech Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full hover:scale-110 hover:shadow-gray-300 duration-100 ease-in">
            <a href="https://github.com/pradeep007nc">
              <FaGithub
                className="cursor-pointer hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in"
                size={30}
              />
            </a>
            <a href="https://www.linkedin.com/in/pradeep-n-c-2133ba1ab">
              <FaLinkedin
                className="cursor-pointer hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in"
                size={30}
              />
            </a>
            <a href="https://twitter.com/Pradeep06517865">
              <FaTwitter
                className="cursor-pointer hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in"
                size={30}
              />
            </a>
        
            <a href="https://www.instagram.com/pradeep_007n/">
              <FaInstagram
                className="cursor-pointer hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;