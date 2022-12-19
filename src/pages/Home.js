import React from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import Main from "../components/Main";

function Home() {
  
  
  return <div className=" w-full">
  <Main>
    <h1 className="text-4xl sm:text-5xl md:text-6xl mb-10 sm:text-left font-bold sm:pr-20">I'm Ketan Rathod</h1>
    <p className="text-sm sm:text-xl my-5 leading-10">Prefinal Year <Badge>Computer Engineering</Badge> Student and Future <Badge>Full Stack Developer</Badge> Passinate in technology, practicing minimalist, and love to listen music in search of flow.</p>
    <p className="text-sm sm:text-xl my-5 leading-10">Working with my hands to make magic happen on the internet. View my Projects, Articles, Resumé, Contact Me, or send me an email at <Badge> ketanrtd1@gmail.com</Badge></p>
    <button className="text-xl hover:underline mr-5">
    <Link to="/about" className="text-sm sm:text-xl">See More About Me</Link>
    </button>
    <ion-icon className="text-3xl animate transition-all duration-500" name="arrow-forward-outline"></ion-icon> 

    <div>

    </div>
    </Main>
  </div>;
}

export default Home;
