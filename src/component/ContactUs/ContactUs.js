import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "../../assets/css/Contact_us.css";
export function ContactUs() {
  return (
    <div id="Contact_us">
      <div className="ContactUs">
        feel free to call me 🤳
        <br /> whenever it suits you best ❤<br /> #Stay_Home🏡 #Stay_Safe ♥
      </div>
      <div className="Contact_links">
        <ul>
          <li>
            <a href="https://www.facebook.com/abdelfatahashour7">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/abdoashour07">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/abdelfatahashour4">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <div>
          <SiGmail /> <span>abdelfatahashour4@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
