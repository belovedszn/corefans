import React from "react";
import { Link } from "react-router-dom";
import "../../styling/artists.css";
import nonso from "../../assets/images/nonso.jpeg";
import bloodyCiv from "../../assets/images/bloody-civ.jpeg";
import bloody from "../../assets/images/bloody.jpeg";

function FirstBox() {
  return (
    <div className="first-container px-[100px] flex justify-center items-center flex-col">
      <div className="first p-8 text-white flex justify-center items-center flex-col gap-8">
        <div
          className="write-up-header flex flex-col font-bold gap-4 text-5xl items-center justify-center tracking-widest"
          style={{ fontFamily: "MyFont" }}
        >
          LAUNCH UNFORGETTABLE MUSIC
          <span className="text-[#F18B1B]"> RELEASE CAMPAIGNS </span>
        </div>
        <div className="text-center max-w-xl leading-relaxed text-lg text-white">
          Corefans empowers artists to launch creative release campaigns with
          exclusive merch, collectibles, and experiences — driving revenue and
          amplifying your music like never before.
        </div>
        <div className="flex justify-center items-center">
          <Link to={``} className="w-full h-full bg-orange-500 p-4 rounded-lg">
            Get Early Access <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </div>
      <div className="second grid grid-cols-2 gap-6 mt-12">
        <div className="flex flex-col gap-4">
          <div className="image-box w-sm bg-[#313030] rounded-lg">
            <div className="slide-img h-96 relative p-4">
              <img
                className="h-full w-full rounded-lg object-cover"
                src={bloody}
              />
              <span className="type absolute text-white top-[30px] left-[40px] pr-2 pl-2 bg-red-500 rounded-xl text-lg">
                NEW
              </span>
            </div>
            <div className="detail-box flex justify-between items-center bg-[#313030] w-full">
              <div className="type">
                <span className="title text-white text-2xl">Mad Apology</span>
                <span className="text-white text-lg">Bloody Civilian</span>
              </div>
              <span className="p-2 bg-[#26292C] text-[#B1BBC8] rounded-lg">
                Alte
              </span>
            </div>
          </div>

          <div className="text-white bg-[#1B1A1A] rounded-lg p-4 w-xl">
            <div className="p-4 bg-black rounded-lg flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-36 h-36 relative">
                  <img
                    className="w-full object-cover h-full rounded-lg"
                    src={bloodyCiv}
                  />
                </div>
                <div className="flex-col flex gap-8 pl-4">
                  <div className="flex-col flex">
                    <span className="text-2xl">Mad Apology</span>
                    <span className="text-xl">Bloody Civilian</span>
                  </div>
                  <div className="flex gap-4">
                    <i className="bi bi-heart text-2xl"></i>
                    <i className="bi bi-music-note-beamed text-2xl"></i>
                    <i className="bi bi-list-ul text-2xl"></i>
                    <i className="bi bi-box-arrow-up text-2xl"></i>
                  </div>
                </div>
              </div>
              <div className="play bg-orange-500 rounded-full p-4">
                <i className="bi bi-play-fill text-white text-3xl"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-white bg-[#1B1A1A] rounded-lg p-4 w-xl">
            <div className="p-4 bg-black rounded-lg flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-36 h-36 relative">
                  <img
                    className="w-full object-cover h-full rounded-lg"
                    src={bloodyCiv}
                  />
                </div>
                <div className="flex-col flex gap-8 pl-4">
                  <div className="flex-col flex">
                    <span className="text-2xl">Mad Apology</span>
                    <span className="text-xl">Bloody Civilian</span>
                  </div>
                  <div className="flex gap-4">
                    <i className="bi bi-heart text-2xl"></i>
                    <i className="bi bi-music-note-beamed text-2xl"></i>
                    <i className="bi bi-list-ul text-2xl"></i>
                    <i className="bi bi-box-arrow-up text-2xl"></i>
                  </div>
                </div>
              </div>
              <div className="play bg-orange-500 rounded-full p-4">
                <i className="bi bi-play-fill text-white text-3xl"></i>
              </div>
            </div>
          </div>

          <div className="image-box w-sm bg-[#313030] rounded-lg">
            <div className="slide-img h-96 relative p-4">
              <img
                className="h-full w-full rounded-lg object-cover"
                src={nonso}
              />
              <span className="type absolute text-white top-[30px] left-[40px] pr-2 pl-2 bg-red-500 rounded-xl text-lg">
                NEW
              </span>
            </div>
            <div className="detail-box flex justify-between items-center bg-[#313030] w-full">
              <div className="type">
                <span className="title text-white text-2xl">
                  When It Blooms
                </span>
                <span className="text-white text-lg">Nonso Amadi</span>
              </div>
              <span className="p-2 bg-[#26292C] text-[#B1BBC8] rounded-lg">
                Afro-Pop
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstBox;
