import { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/header.css";
import logo from "../assets/images/corefans-logo.png"

function Header() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="navbar w-full fixed top-0 z-50 bg-[#131414] border-b border-black/20 px-25 h-25 flex justify-between items-center">
        <div className="flex items-center left">
          <div className="pr-10 flex items-center justify-between gap-0 w-full h-full">
            <Link to="/" className="logo text-orange-500 text-2xl font-bold"
            style={{
                boxShadow: "linear-gradient(to right, #F18B1B, #E52053)",
              }}>
              <img src={logo} alt="Corefans Logo" className="h-20 md:h-24 lg:h-28 xl:h-32 w-auto max-w-full object-contain"/>
            </Link>
            <span className="mobile beta">Beta</span>
          </div>

          <div className={`nav-links ${nav ? "active" : ""}`}>
            <span>
              <Link to="/for-artists" className="cursor-pointer">
                 Artists
              </Link>
            </span>
            <span>
              <Link to="/for-fans" className="cursor-pointer">
                 Fans
              </Link>
            </span>
            <span>cd
              <Link to="/contact-us" className="cursor-pointer">
                Contact
              </Link>
            </span>
            <span className="mobile">
              <Link to="/sign-in">Sign In</Link>
            </span>
            <span className="mobile">
              <Link to="/get-started">Get Started</Link>
            </span>
          </div>
        </div>

        <div className="right hidden md:flex items-center gap-5 text-white text-xl">
          <Link to="/sign-in">Sign In</Link>
          <Link
            to="/get-started"
            className="get-started-btn bg-orange-500 px-4 py-2 rounded-md cursor-pointer font-bold"
          >
            Get Started
          </Link>
        </div>

        <div
          className={`hamburger ${nav ? "open" : ""}`}
          onClick={() => setNav(!nav)}
        >
          <span className="bar bg-orange-500"></span>
          <span className="bar bg-orange-500"></span>
          <span className="bar bg-orange-500"></span>
        </div>
      </nav>
    </>
  );
}

export default Header;
