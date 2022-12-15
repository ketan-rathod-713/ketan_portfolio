import React, {useContext} from "react";
import themeContext from "../context/themeContext";

function Contact() {

  const Theme = useContext(themeContext);
  const theme = Theme.state.theme;

  return <div className={`${theme==='dark' ? 'bg-gray-800 text-white':'bg-white'} flex justify-start`}>
    <form action="/contact" method="post" className="p-10 w-full sm:w-[600px] md:p-24 space-y-6">
    <h1 className="text-5xl font-bold mb-5">Contact.</h1>
    <p className="mb-10">Get in touch or shoot me an email directly on <b>ketanrtd1@gmail.com</b></p>
    <input className={`px-5 py-3 text-xl w-full border border-gray-700 ${theme==='dark' ? 'bg-gray-700 text-white':''}`} placeholder="Email" type="text" name="email" id="" />
    <input className={`px-5 py-3 text-xl w-full sm:w-[] border border-gray-700 ${theme==='dark' ? 'bg-gray-700 text-white':''}`}  placeholder="Name" type="text" name="email" id="" />
    <textarea className={`px-5 py-3 text-xl w-full sm:w-[] border border-gray-700 ${theme==='dark' ? 'bg-gray-700 text-white':''}`}  placeholder="Message" type="text" name="email" id="" />
    <button className={`px-5 py-3 text-xl border border-r-8 border-gray-700 ${theme==='dark' ? 'bg-white text-black font-bold':''}`} >Send a message</button>
    </form>
    
  </div>;
}

export default Contact;
