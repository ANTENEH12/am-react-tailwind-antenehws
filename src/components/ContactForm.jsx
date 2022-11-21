import React from "react";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="p-4 text-left ">
      <form action="https://getform.io/f/721b8a87-a77c-4725-b54d-e4f0723e8ae0" method="POST">
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize">name</label>
            <input
              type="text"
              name="name"
              className="border-2 text-black rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize">Phone</label>
            <input
              type="text"
              name="Phone"
              className="border-2 text-black rounded-lg p-3 flex focus:outline-none"
            />
            </div>
            <div className="flex flex-col col-span-2">
            <label className="capitalize">e-mail</label>
            <input
              type="email"
              name="e-mal"
              className="border-2 text-black rounded-lg p-3 flex focus:outline-none"
            />
            </div>
            <div className="flex flex-col col-span-2">
            <label className="capitalize">Message</label>
            <textarea
              name="message"
              rows='10'
              className="border-2 text-black rounded-lg p-3 flex focus:outline-none"
            />
            </div>
          
        </div>
        <div className="flex items-center justify-center">
                <Button
                 className="ml-4 mt-4 shadow-thPurple capitalize"
                 title="send message"/>
            </div>
      </form>
    </div>
  );
};

export default ContactForm;
