
import React from "react";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#222222] text-white mt-11">
      <footer className="py-10 px-4 md:px-8 border-b-2 border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-xl font-bold">ALUKAS & CO</h2>
            <p>Gold & Diamonds</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">About Alukas</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Core Values</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press Releases</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Our Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">Shopping App</a>
              </li>
              <li>
                <a href="#">Be An Affiliate</a>
              </li>
              <li>
                <a href="#">Advertise Your Product</a>
              </li>
              <li>
                <a href="#">Media Enquiries</a>
              </li>
              <li>
                <a href="#">Other Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Store Details</h2>
            <div className="flex items-center space-x-2">
              <FaHeadphonesSimple className="text-2xl" />
              <div>
                <p>Need Any Help?</p>
                <p>(+800) 1234 56</p>
              </div>
            </div>
            <p className="mt-4">
              Address: 502 New Design Str, Melbourne, Australia
            </p>
            <p>Email: alukas@domain.com</p>
          </div>
        </div>
      </footer>
      <div className="flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-8 space-y-4 md:space-y-0">
        <div>
          <p>
            Copyright © Alukas all rights reserved. Powered by Blueskytechco.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#">
            <IoLogoTiktok className="text-2xl" />
          </a>
          <a href="#">
            <FaYoutube className="text-2xl" />
          </a>
          <a href="#">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#">
            <FaFacebookF className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
