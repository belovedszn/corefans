import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import madApologoy from "../../assets/media/Mad-Apology.mp3"; // adjust path as needed
import { useRef } from "react";
//import "../../styling/artists.css";
import nonso from "../../assets/images/nonso.jpeg";
import bloodyCiv from "../../assets/images/bloody-civ.jpeg";
import bloody from "../../assets/images/bloody.jpeg";

function FirstBox() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <section className="main">
      <div className="flex justify-center items-center flex-col">
        <div className="first p-8 text-white flex justify-center items-center flex-col gap-8 max-[480px]:gap-4 max-[480px]:p-4">
          <div
            className="write-up-header flex flex-col font-bold gap-4 text-center items-center justify-center tracking-widest lg:tracking-wide text-4xl max-lg:text-3xl max-md:text-2xl max-[480px]:text-xl"
            style={{ fontFamily: "Grotesk" }}
          >
            LAUNCH UNFORGETTABLE MUSIC
            <span className="text-[#F18B1B] "> RELEASE CAMPAIGNS </span>
          </div>
          <div className="text-center max-w-xl leading-relaxed text-lg text-white write-up max-[480px]:text-base">
            Corefans empowers artists to launch creative release campaigns with
            exclusive merch, collectibles, and experiences — driving revenue and
            amplifying your music like never before.
          </div>
          <div className="flex justify-center items-center">
            <Link
              to={``}
              className="relative flex items-center overflow-hidden text-white px-6 py-4 mt-8 w-full rounded-md font-medium text-lg group cursor-pointer max-[480px]:hidden"
              style={{
                background: "linear-gradient(to right, #F18B1B, #E52053)",
              }}
            >
              <span className="relative z-10">Get Early Access</span>
              <i className="bi bi-arrow-right-short text-2xl"></i>

              <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 blur-sm skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[300%]"></span>
            </Link>
          </div>
        </div>
        <div className="text-white py-32 flex flex-col items-center justify-center max-md:py-16 max-sm:py-8">
          <div className="flex gap-6 items-start max-lg:gap-2 max-sm:flex-col-reverse">
            <div className="flex flex-col justify-between h-full">
              <div className="bg-[#313030] rounded-2xl p-3 relative flex flex-col items-center shadow-lg w-md h-sm inset-ring-2 inset-ring-gray-700 max-lg:w-xs max-md:w-2xs max-sm:w-3xs">
                <div className="absolute top-2 left-2 bg-red-600 text-white text-lg px-2 py-0.5 rounded-full max-[480px]:text-sm">
                  NEW
                </div>
                <img
                  src={bloody}
                  alt="Mixed Signals"
                  className="w-full h-96 object-cover rounded-md max-sm:h-48"
                />
                  <div className="mt-8 w-full flex items-end justify-between max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2">
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-white font-semibold text-2xl max-lg:text-xl max-[480px]:text-lg"
                      style={{ fontFamily: "Grotesk" }}
                    >
                      Family Matters
                    </span>
                    <span className="text-[#B1BBC8] text-xl max-lg:text-lg  max-[480px]:text-base">Bloody Civilian</span>
                  </div>
                  <div className="text-xl bg-gray-700 text-[#B1BBC8] inline-block px-2 py-0.5 rounded mt-1 max-lg:text-lg max-[480px]:text-base">
                    Alte
                  </div>
                </div>
              </div>

              <div className="bg-[#111] rounded-lg mt-4 w-md h-full p-4 flex items-center justify-between shadow-inner max-lg:w-xs max-md:w-2xs max-sm:w-3xs max-[480px]:">
                <div className="flex items-center gap-3 max-lg:gap-1.5">
                  <img
                    src={bloodyCiv}
                    alt="Mixed Signals"
                    className="w-20 h-20 object-cover rounded max-md:w-15 max-md:h-15"
                  />
                  <div className="flex flex-col items-start justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold max-md:text-lg max-[480px]:text-base">
                        Mad Apology
                      </span>
                      <span className="text-lg text-gray-400 max-md:text-base max-[480px]:text-sm">
                        Bloody Civilian
                      </span>
                    </div>
                    <div className="flex gap-4 max-md:gap-2">
                      <i className="bi bi-heart text-xl max-md:text-base"></i>
                      <i className="bi bi-music-note-beamed text-xl max-md:text-base"></i>
                      <i className="bi bi-list-ul text-xl max-md:text-base"></i>
                      <i className="bi bi-box-arrow-up text-xl max-md:text-base"></i>
                    </div>
                  </div>
                </div>
                <audio ref={audioRef} src={madApologoy} />
                <div
                  className="bg-orange-500 text-lg p-4 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer max-md:text-base max-md:w-10 max-md:h-10"
                  onClick={togglePlay}
                >
                  <i
                    className={`text-white text-2xl bi ${
                      playing ? "bi-pause-fill" : "bi-play-fill max-md:text-lg"
                    }`}
                  ></i>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full max-[480px]:flex-col-reverse max-[480px]:gap-16">
              <div className="bg-[#1a1a1a] rounded-xl px-6 py-4 -mt-8 mb-4 shadow-md w-md max-lg:w-xs max-md:w-2xs max-sm:w-3xs">
                <div className="text-gray-400 text-xs">TOTAL REVENUE</div>
                <div className="text-xl font-bold">₦2,150,000.00</div>
                <div className="text-gray-400 text-xs">+0.00%</div>
                <div className="text-right text-xs text-gray-300 mt-1 ">
                  Jun ₦300,000
                </div>
              </div>

              <div className="bg-[#313030] rounded-2xl p-3 relative flex flex-col items-center shadow-lg w-md h-sm inset-ring-2 inset-ring-gray-700 max-lg:w-xs max-md:w-2xs max-sm:w-3xs">
                <div className="absolute top-2 left-2 bg-red-600 text-white text-lg px-2 py-0.5 rounded-full max-[480px]:text-sm">
                  NEW
                </div>
                <img
                  src={nonso}
                  alt="Mixed Signals"
                  className="w-full h-96 object-cover rounded-md max-sm:h-48"
                />
                <div className="mt-8 w-full flex items-end justify-between max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2">
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-white font-semibold text-2xl max-lg:text-xl max-[480px]:text-lg"
                      style={{ fontFamily: "Grotesk" }}
                    >
                      Before It Blooms
                    </span>
                    <span className="text-[#B1BBC8] text-xl max-lg:text-lg  max-[480px]:text-base">Nonso Amadi</span>
                  </div>
                  <div className="text-xl bg-gray-700 text-[#B1BBC8] inline-block px-2 py-0.5 rounded mt-1 max-lg:text-lg max-[480px]:text-base">
                    Afropop
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center items-center">
            <Link
              to={``}
              className="relative items-center overflow-hidden text-white px-6 py-4 mt-8 w-full hidden rounded-md font-medium text-lg group cursor-pointer max-[480px]:flex"
              style={{
                background: "linear-gradient(to right, #F18B1B, #E52053)",
              }}
            >
              <span className="relative z-10">Get Early Access</span>
              <i className="bi bi-arrow-right-short text-2xl"></i>

              <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 blur-sm skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[300%]"></span>
            </Link>
          </div>
      </div>
    </section>
  );
}

export default FirstBox;
