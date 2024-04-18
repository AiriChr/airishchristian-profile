import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full lg:h-screen border-t-2 border-gray-400"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-cyan-200">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 ">
          {/*left */}
          <div className="col-span-3 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">AC Tabay</h2>
                <p>Network/Cybersecurity Engineer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-10">
                    <a href="" target="_blank" rel="noreferrer noopener">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-10">
                    <a href="https://www.linkedin.com/in/airishchristian">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-10">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-10">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-10">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
