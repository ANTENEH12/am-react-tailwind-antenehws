import React from "react";
import Page from "./Page";
import contact from "../icons/contact-us.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <Page
      name="contact me"
      title="Contact me"
      subtitle={`Please get in touch with me and i will answer your questionns.`}
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* left */}
        <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contact}
            alt="contact me"
            className="rounded-full object-cover w-80 h-80 shadow-lg shadow-thPurple"
          />
          <p className="p-12 max-w-md">To learn more about me please click my linkedin and github links below </p>

          <div className="flex gap-8">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer ">
              <FaLinkedin size={25} />
              
            </div>

            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer ">
              <FaGithub size={25} />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 rounded-xl p-4">
  <ContactForm/>
        </div>
      </div>
    </Page>
  );
};

export default Contacts;
