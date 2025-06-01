
import chella from "../../assets/images/chella.jpeg";
import soundcloud from "../../assets/svg/soundcloud.svg";
import audiomack from "../../assets/svg/audiomack.svg";

function Fifth() {
  return (
    <div className="flex justify-center items-center mt-25 flex-col-reverse">
      <div className="flex items-center bg-[#1A1A1A] rounded-xl text-white w-full py-8 px-4 shadow-lg inset-ring-2 inset-ring-gray-700 max-md:flex-col max-md:items-start max-md:py-4 max-md:px-2 max-md:gap-4">
        <img
          src={chella}
          alt="Chella"
          className="w-md rounded-md object-cover max-xl:w-3xs max-lg:w-25"
        />

        <div className="ml-6 flex flex-col justify-center max-md:ml-0">
          <div
            className="text-3xl font-semibold mb-8 tracking-widest max-lg:text-2xl max-md:text-xl max-sm:text-lg"
            style={{ fontFamily: "Grotesk" }}
          >
            Chella - Darling (Single)
          </div>

          <div className="flex items-center gap-8 max-md:gap-4">
            <div className="flex items-center p-1 rounded-md gap-1 cursor-pointer">
              <i className="bi bi-spotify text-green-500 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base"></i>
              <span className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm" style={{ fontFamily: "Spotify-MD" }}>
                Spotify
              </span>
            </div>

            <img
              src={audiomack}
              alt="Audiomack"
              className="h-14 cursor-pointer"
            />

            <img
              src={soundcloud}
              alt="SoundCloud"
              className="h-14 cursor-pointer"
            />

            <div className="flex items-center gap-1 text-white cursor-pointer">
              <i className="bi bi-youtube text-2xl text-red-500 max-lg:text-xl max-md:text-lg max-sm:text-base"></i>
              <span className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm" style={{ fontFamily: "Youtube-MD" }}>
                YouTube
              </span>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <i className="bi bi-apple text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base"></i>
              <span className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm" style={{ fontFamily: "Apple" }}>
                Music
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center flex-col">
        <div className="bg-[#313030] inline-block px-6 py-3 rounded-full text-2xl text-[#D4D4D4] mb-4 mt-4 max-md:hidden">
          For Partners
        </div>
        <div
          className="text-5xl font-bold leading-tight mb-4 tracking-widest text-white"
          style={{ fontFamily: "Grotesk" }}
        >
          Corefans For Partners
        </div>
        <p
          className="text-[#B1BBC8] text-xl leading-[1.7] pb-8"
          style={{ fontFamily: "Gilroy-MD" }}
        >
          The smarter way to collaborate with artists on exclusive merch,
          collectibles, and experiences—humanizing your brand, expanding your
          reach, and driving new revenue. The smarter way to collaborate with
          artists on exclusive merch, collectibles, and experiences—humanizing
          your brand, expanding your reach, and driving new revenue.
        </p>
      </div>
    </div>
  );
}

export default Fifth;
