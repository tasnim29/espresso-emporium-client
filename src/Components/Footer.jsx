import React from "react";
import logo from "../assets/Group 1.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FcAddressBook } from "react-icons/fc";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <img className="w-46 h-16" src={logo} alt="" />
          <p className="link link-hover">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-5  mb-8">
            <a className="text-white">
              <FaFacebook size={24} />
            </a>
            <a className="link link-hover">
              <FaInstagramSquare size={24} />
            </a>
            <a className="link link-hover">
              <FaYoutube size={24} />
            </a>
            <a className="link link-hover">
              <FaXTwitter size={24} />
            </a>
          </div>
          <h1 className="text-2xl mb-3">Get in Touch</h1>
          <div className="space-y-5">
            <h1 className="flex text-xl item-center">
              <span>
                <FaPhoneAlt />
              </span>{" "}
              01302947269
            </h1>
            <h1 className="flex text-xl item-center">
              <span>
                <MdEmail />
              </span>{" "}
              tasnim@gmail.com
            </h1>
            <h1 className="flex text-xl item-center">
              <span>
                <FcAddressBook />
              </span>{" "}
              72, Wall street, King Road, Dhaka
            </h1>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Connect with Us</h6>
          <form className="fieldset   rounded-box w-xs  p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input text-black"
              placeholder="Name"
            />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Message</label>
            <textarea
              className="bg-white text-black w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              name="message"
              id="message"
              placeholder="Type your message..."
              cols="10"
              rows="5"
            />
            <button className="bg-white text-black px-5 py-2 w-2/5 rounded-2xl cursor-pointer">
              Send Message
            </button>
          </form>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
