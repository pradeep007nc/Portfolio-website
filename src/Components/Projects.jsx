import React from "react";
import ProjectItem from "./ProjectItem";
import hibernate from "../assets/hibernate.png";
import ecommerce from "../assets/Ecommerce.png";
import jwtauth from "../assets/jwt-auth.png";
import movie from "../assets/movie.jpg";
import portfolio from "../assets/portfolio.png"
import tictactoe from "../assets/TicTacToe.png"

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1440px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b53]">
        Projects
      </h1>
      <p className="text-center text-xl pt-4 pb-6">Checkout my Projects!</p>
      <div className="grid md:grid-cols-2 gap-12">
        <ProjectItem
          img={ecommerce}
          title={"Ecommerce - Spring and Angualar"}
          link={"https://github.com/pradeep007nc/SmartCommerce"}
        />
        <ProjectItem
          img={movie}
          title={"Movie Backend Spring"}
          link={"https://github.com/pradeep007nc/Java-projects/tree/main/MovieBackend"}
        />
        <ProjectItem
          img={hibernate}
          title={"Hibernate - Java Spring, sql"}
          link={"https://github.com/pradeep007nc/Java-projects/tree/main/hibernateCommandline"}
        />
        <ProjectItem
          img={jwtauth}
          title={"JWT Authentication - Java Spring"}
          link={"https://github.com/pradeep007nc/Java-projects/tree/main/jwt-authentication"}
        />
        <ProjectItem
          img={tictactoe}
          title={"Tic Tac Toe - Java applet"}
          link={"https://github.com/pradeep007nc/Tic-Tac-Toe-Game"}
        />
        <ProjectItem
          img={portfolio}
          title={"Personal Portfolio - React"}
          link={"https://github.com/pradeep007nc/Portfolio-website"}
        />
      </div>
    </div>
  );
};

export default Projects;