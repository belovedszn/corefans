
import faveSzn from "../../assets/images/favvvvssss.jpeg";
import vinyl from "../../assets/images/vinyls.png";

function ThirdBox() {
  return (
    <div className="flex text-white mt-25 max-lg:mt-12.5 max-lg:flex-col max-lg:items-center">
      <div className="p-8 pl-0 w-3/5 max-lg:w-full max-lg:text-center">
        <div
          className="text-4xl leading-[1.1] font-bold text-white uppercase mb-4 tracking-wider max-md:text-3xl max-sm:text-2xl"
          style={{ fontFamily: "Grotesk" }}
        >
          UNLOCK BRAND DEALS 
        </div>
        <p
          className="text-[#B1BBC8] leading-[1.7] font-normal max-md:text-lg max-sm:text-base"
          style={{ fontFamily: "Gilroy-MD" }}
        >
          Partner with brands that align with your vision to create exclusive
          merch, collectibles, tour, wait & greet, collabs, studio time and
          experiences—amplifying your music and driving revenue without risk of
          investment and talent.{" "}
          <span className="max-xl:hidden">
            Partner with brands that align with your vision to create exclusive
            merch, collectibles, tour, wait & greet, collabs, studio time and
            experiences—amplifying your music and driving revenue without risk
            of investment and talent.
          </span>
        </p>
      </div>
      <div className="p-16 flex items-start w-3/5 justify-center gap-4 bg-[#221e1e] rounded-xl inset-ring-2 inset-ring-gray-700 max-lg:w-full max-2xl:p-8 max-xl:p-4 max-lg:p-2 max-sm:flex-col max-sm:inset-ring-0 max-sm:bg-inherit max-sm:items-center">
        <div className="bg-[#313030] rounded-2xl p-3 relative flex flex-col items-center shadow-lg w-md h-sm inset-ring-2 inset-ring-gray-700 max-lg:w-xs max-md:w-2xs max-sm:w-3xs">
          <div className="absolute top-2 left-2 bg-red-600 text-white text-lg px-2 py-0.5 rounded-full  max-[480px]:text-sm">
            NEW
          </div>
          <img
            src={faveSzn}
            alt="Mixed Signals"
            className="w-full h-96 object-cover rounded-md max-sm:h-48"
          />
          <div className="mt-8 w-full flex items-end justify-between max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2">
            <div className="flex flex-col gap-2">
              <span
                className="text-white font-semibold text-2xl max-lg:text-xl max-[480px]:text-lg"
                style={{ fontFamily: "Grotesk" }}
              >
                Dutty Love
              </span>
              <span className="text-[#B1BBC8] text-xl max-lg:text-lg  max-[480px]:text-base uppercase">
                Fave
              </span>
            </div>
            <div className="text-xl bg-gray-700 text-[#B1BBC8] inline-block px-2 py-0.5 rounded mt-1 max-lg:text-lg max-[480px]:text-base">
              Neo-soul
            </div>
          </div>
        </div>

        <div className="bg-[#313030] rounded-2xl p-4 relative flex flex-col items-center shadow-lg w-sm h-md inset-ring-2 inset-ring-gray-700 max-lg:w-xs max-md:w-2xs max-sm:w-3xs">
          <img
            src={vinyl}
            alt="Vinyl's"
            className="w-full h-64 object-cover rounded-md max-sm:h-36"
          />
          <div className="flex-col flex items-start justify-start pt-4 gap-4">
            <span
              className="text-3xl font-semibold max-xl:text-2xl max-lg:text-xl max-[480px]:text-lg"
              style={{ fontFamily: "Grotesk" }}
            >
              XII.XVII.MMXX Vinyl
            </span>
            <span
              className="text-xl text-[#B1BBC8] max-lg:text-lg max-md:text-base max-[480px]:text-sm"
              style={{ fontFamily: "Gilroy-MD" }}
            >
              Pre-order this iconic and legendary album's vinyl "The Year,
              XII.XVII.MMXX" from the great Bob Gilroy, produced by Matt Vinsey,
              and designed by Ma0asis.
            </span>
            <span className="text-2xl font-semibold roboto max-lg:text-xl max-md:text-lg">$7500</span>
          </div>
          <button
            className="relative overflow-hidden text-white px-6 py-4 mt-8 w-full rounded-md font-medium text-lg group cursor-pointer"
            style={{
              background: "linear-gradient(to right, #F18B1B, #E52053)",
            }}
          >
            <span className="relative z-10">Select Exclusive</span>

            <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 blur-sm skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[300%]"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdBox;