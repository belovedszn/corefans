import React from "react";
import { Link } from "react-router-dom";
import "../styling/footer.css";
import logo from "../assets/images/corefans-logo.png"

function Footer() {
  return (
    <footer className="w-full text-white bottom-0 z-50 bg-[#131414] border-b border-black/20 h-fit py-16">
      <div className="main">
        <div className="logo-and-socials flex items-center justify-between pb-8">
           <div className="pr-10 flex items-center justify-between gap-0 w-full h-full">
            <Link to="/" className="logo text-orange-500 text-3xl font-bold"
            style={{
                boxShadow: "linear-gradient(to right, #F18B1B, #E52053)",
              }}>
              <img src={logo} alt="Corefans Logo" className="w-full h-32"/>
            </Link>
          </div>

          <div className="flex gap-4 text-white text-2xl">
            <span>
              <i className="bi bi-facebook"></i>
            </span>
            <span>
              {" "}
              <i className="bi bi-linkedin"></i>
            </span>
            <span>
              {" "}
              <i className="bi bi-github"></i>
            </span>
            <span>
              {" "}
              <i className="bi bi-instagram"></i>
            </span>
            <span>
              {" "}
              <i className="bi bi-twitter"></i>
            </span>
          </div>
        </div>

        <div
          className="text-xl flex items-center gap-4 pb-8"
          style={{ fontFamily: "Gilroy-Reg" }}
        >
          <span>
            <Link to={`/for-artists`}>Artists</Link>
          </span>
          <span>
            <Link to={`/for-fans`}>Fans</Link>
          </span>
          <span>
            <Link to={`/for-partners`}>Partners</Link>
          </span>
        </div>

        <div
          className="last-box text-white flex items-center justify-between text-xl"
          style={{ fontFamily: "Gilroy-Reg" }}
        >
          <div className="copyrights">
            <span>© 2024 Corefans. <span className="rights-reserved">All rights reserved. </span></span>
          </div>
          <div className="others flex gap-4">
            <span>
              <Link to={`/terms`}>Terms</Link>
            </span>
            <span>
              <Link to={`/privacy-policy`}>Privacy</Link>
            </span>
            <span>
              <Link to={`/contact-us`}>Contact</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
