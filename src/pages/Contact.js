import React from "react";
import { TextField , Button} from "@mui/material";
// import themeContext from "../context/themeContext";

function Contact() {

  // const Theme = useContext(themeContext);
  // const theme = Theme.state.theme;

  return <div className="flex justify-start">
    <form action="/contact" method="post" className="p-10 sm:w-[600px] md:p-24 space-y-6">
    <h1 className="text-5xl font-bold mb-5">Contact.</h1>
    <p className="mb-10">Get in touch or shoot me an email directly on <b>ketanrtd1@gmail.com</b></p>
    <TextField color="secondary" fullWidth label="Name" id="fullWidth" className="sm:w-full" />
    <TextField fullWidth  color="secondary" label="Email" id="fullWidth" className="sm:w-full" />
    <TextField fullWidth  color="secondary" label="Message" id="fullWidth" className="sm:w-full" />
    <Button variant="contained" color="secondary">Send Message</Button>

    </form>
  </div>;
}

export default Contact;
