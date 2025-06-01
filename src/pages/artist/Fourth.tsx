import sosa from "../../assets/images/sosa.jpeg";
import soa from "../../assets/images/unde.jpeg";

function Fourth() {
  return (
    <div className="flex gap-10 px-4 py-8 rounded-xl text-white mt-25 max-lg:mt-12.5 max-lg:flex-col-reverse max-lg:items-center">
      <div className="rounded-xl p-6 w-3/5 inset-ring-2 inset-ring-gray-700 max-lg:w-full max-sm:inset-ring-0">
        <div
          className="flex items-center justify-between border-b border-gray-700 pb-4 p-4 h-36 rounded-lg rounded-b-none max-[480px]:h-full max-lg:items-start max-[480px]:flex-col max-[480px]:gap-1"
          style={{
            background: "linear-gradient(to left, #292828, #000000)",
          }}
        >
          <div>
            <div className="flex items-center gap-4 max-[480px]:flex-col max-[480px]:items-start ">
              <div className="">
                <img
                  src={sosa}
                  alt="Sosa"
                  className="rounded-full w-20 h-20 bg-red-400 flex items-center justify-center text-black font-semibold max-sm:w-15 max-sm:h-15 "
                />
              </div>
              <div>
                <div className="font-semibold text-2xl text-white max-lg:text-xl max-sm:text-lg">
                  Sosa.ttw
                </div>
                <div className="text-[#B1BBC8] text-xl max-lg:text-lg">sosa@gmail.com</div>
                <div className="text-[#B1BBC8] text-xl mt-2 max-lg:text-lg max-md:text-base max-[480px]:hidden">09 May, 2024</div>
              </div>
            </div>
          </div>
          <div className="text-right max-[480px]:text-left">
            <div className="font-semibold text-2xl max-lg:text-xl max-sm:text-lg">₦92,500</div>
            <div className="text-green-500 text-xl max-lg:text-lg">● Paid</div>
          </div>
        </div>

        <div
          className="flex items-center justify-between border-b border-gray-700 pb-4 p-4 h-36 rounded-lg rounded-b-none max-[480px]:h-full max-lg:items-start max-[480px]:flex-col max-[480px]:gap-1 max-sm:rounded-t-none"
          style={{
            background: "linear-gradient(to left, #292828, #000000)",
          }}
        >
          <div>
            <div className="flex items-center gap-4 max-[480px]:flex-col max-[480px]:items-start ">
              <div className="">
                <img
                  src={soa}
                  alt="Soa"
                  className="rounded-full w-20 h-20 bg-red-400 flex items-center justify-center text-black font-semibold max-sm:w-15 max-sm:h-15 "
                />
              </div>
              <div>
                <div className="font-semibold text-2xl text-white max-lg:text-xl max-sm:text-lg">
                  Abracadabra
                </div>
                <div className="text-[#B1BBC8] text-xl max-lg:text-lg">abra@gmail.com</div>
                <div className="text-[#B1BBC8] text-xl mt-2 max-lg:text-lg max-md:text-base max-[480px]:hidden">09 May, 2024</div>
              </div>
            </div>
          </div>
          <div className="text-right max-[480px]:text-left">
            <div className="font-semibold text-2xl max-lg:text-xl max-sm:text-lg">₦55,300</div>
            <div className="text-green-500 text-xl max-lg:text-lg">● Paid</div>
          </div>
        </div>

        <div
          className="flex justify-between mt-8 items-center border-b border-gray-700 p-4 h-36 rounded-lg max-sm:mt-0 max-[480px]:p-2 w-full max-sm:rounded-none"
          style={{
            background: "linear-gradient(to bottom, #292828, #000000)",
          }}
        >
          <div className="text-start">
            <div className="text-[#B1BBC8] text-xl pb-2 max-md:text-lg max-sm:text-base max-[480px]:text-sm">Fans</div>
            <div className="text-white text-2xl font-extrabold max-lg:text-xl max-md:text-lg max-sm:text-base">150</div>
            <div className="text-[#B1BBC8] text-lg pt-1.5 max-md:text-base max-sm:text-sm">
              3% <i className="bi bi-arrow-up font-extrabold text-lime-500"></i>
            </div>
          </div>

          <div className="text-start">
            <div className="text-[#B1BBC8] text-xl pb-2 max-md:text-lg max-sm:text-base max-[480px]:text-sm">Streams</div>
            <div className="text-white text-2xl font-extrabold max-lg:text-xl max-md:text-lg max-sm:text-base">20k</div>
            <div className="text-[#B1BBC8] text-lg pt-1.5 max-md:text-base max-sm:text-sm">
              10%{" "}
              <i className="bi bi-arrow-up font-extrabold text-lime-500"></i>
            </div>
          </div>

          <div className="text-start">
            <div className="text-[#B1BBC8] text-xl pb-2 max-md:text-lg max-sm:text-base max-[480px]:text-sm">Projects</div>
            <div className="text-white text-2xl font-extrabold max-lg:text-xl max-md:text-lg max-sm:text-base">6</div>
            <div className="text-[#B1BBC8] text-lg pt-1.5 max-md:text-base max-sm:text-sm">
              5% <i className="bi bi-arrow-up font-extrabold text-lime-500"></i>
            </div>
          </div>

          <div className="text-start">
            <div className="text-[#B1BBC8] text-xl pb-2 max-md:text-lg max-sm:text-base max-[480px]:text-sm">Exclusives</div>
            <div className="text-white text-2xl font-extrabold max-lg:text-xl max-md:text-lg max-sm:text-base">250</div>
            <div className="text-[#B1BBC8] text-lg pt-1.5 max-md:text-base max-sm:text-sm">
              6% <i className="bi bi-arrow-up font-extrabold text-lime-500"></i>
            </div>
          </div>
        </div>

        <div className="w-full h-5 mt-4 bg-gray-800 rounded-sm overflow-hidden max-sm:mt-0 max-sm:rounded-t-none">
          <div className="bg-[#E52053]  w-[25%] h-full inline-block"></div>
          <div className="bg-[#F18B1B] w-[25%] h-full inline-block"></div>
          <div className="bg-[#AFAFAF] w-[25%] h-full inline-block"></div>
          <div className="bg-[#646464] w-[25%] h-full inline-block"></div>
        </div>
      </div>
      <div className=" w-2/5 max-lg:w-full max-lg:text-center">
        <div className="bg-[#313030] inline-block px-4 py-2 rounded-full text-xl text-[#D4D4D4] mb-4 mt-4 max-lg:hidden">
          For Artists
        </div>
        <div
          className="text-4xl font-bold leading-tight mb-4 tracking-widest max-sm:tracking-normal max-md:text-3xl max-sm:text-2xl"
          style={{ fontFamily: "Grotesk" }}
        >
          CREATE, EARN &  CONNECT
        </div>
        <p
          className="text-[#B1BBC8] text-xl leading-[1.7] max-md:text-lg max-sm:text-base"
          style={{ fontFamily: "Gilroy-MD" }}
        >
          Corefans gives artists the space to explore creativity, grow their
          income, and connect with their core fans—all while doing what they
          love. Corefans gives artists the space to explore creativity, grow
          their income, and connect with their core fans—all while doing what
          they love.
        </p>
      </div>
    </div>
  );
}

export default Fourth;
