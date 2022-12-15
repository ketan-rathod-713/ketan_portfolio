import React from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";

function Home() {
  
  
  return <div className="py-20 px-10 md:p-40 pr-16 w-full">
    <h1 className="text-5xl md:text-6xl mb-10 text-left font-bold pr-20">I'm Ketan Rathod</h1>
    <p className=" text-xl my-5 leading-10">Prefinal Year <Badge>Computer Engineering</Badge> Student and Future <Badge>Full Stack Developer</Badge> Passinate in technology, practicing minimalist, and love to listen music in search of flow.</p>
    <p className="text-xl my-5 leading-10">Working with my hands to make magic happen on the internet. View my Projects, Articles, Resumé, Contact Me, or send me an email at <Badge> ketanrtd1@gmail.com</Badge></p>
    <button className="text-xl hover:underline mr-5">
    <Link to="/about">See More About Me</Link>
    </button>
    <ion-icon className="text-3xl animate transition-all duration-500" name="arrow-forward-outline"></ion-icon> 

    <div>

    </div>
  </div>;
}

export default Home;
