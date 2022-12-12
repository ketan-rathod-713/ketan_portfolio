import React from "react";
import { TextField , Button} from "@mui/material";

function Contact() {
  return <div>
    <form action="/contact" method="post" className="p-10 sm:w-1/2 space-y-6">
    <TextField color="secondary" fullWidth label="Name" id="fullWidth" className="sm:w-full" />
    <TextField fullWidth  color="secondary" label="Email" id="fullWidth" className="sm:w-full" />
    <TextField fullWidth  color="secondary" label="Message" id="fullWidth" className="sm:w-full" />
    <Button variant="contained" color="secondary">Send Message</Button>

    </form>
  </div>;
}

export default Contact;
