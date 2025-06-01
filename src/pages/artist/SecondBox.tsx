
import soundcloud from "../../assets/svg/soundcloud.svg";
import tidal from "../../assets/svg/tidal.svg";
import audiomack from "../../assets/svg/audiomack.svg";

function SecondBox() {
  return (
    <div className="flex items-center justify-between animate-slide whitespace-nowrap">
      <span className="flex items-center justify-center gap-2">
        <i className="bi bi-spotify text-[48px] text-orange-500"></i>
        <span
          style={{ fontFamily: "Spotify-MD" }}
          className="text-2xl text-orange-500"
        >
          Spotify
        </span>
      </span>

      <span className="flex items-center justify-center gap-2">
        <i className="bi bi-apple text-[48px] text-orange-500"></i>
        <span
          style={{ fontFamily: "Apple" }}
          className="text-2xl text-orange-500"
        >
          Music
        </span>
      </span>

      <span className="flex items-center justify-center flex-col">
        <img src={soundcloud} className="w-22" />
        <span
          style={{ fontFamily: "Spotify-MD" }}
          className="text-md text-orange-500"
        ></span>
      </span>

      <span className="flex items-center justify-center gap-2">
        <img src={tidal} alt="" />
        <span
          style={{ fontFamily: "Spotify-MD" }}
          className="text-2xl text-orange-500 uppercase text-lin"
        >
          T i d a l
        </span>
      </span>

      <span className="flex items-center justify-center gap-2">
        <img src={audiomack} alt="" />
        <span
          style={{ fontFamily: "Spotify-MD" }}
          className="text-2xl text-orange-500"
        ></span>
      </span>

      <div
        className="flex items-center justify-center"
        style={{ fontFamily: "Youtube-MD" }}
      >
        <span className="text-3xl text-orange-500 pr-1">You</span>
        <span className="text-3xl p-1 rounded-xl bg-orange-500">Tube</span>
      </div>
    </div>
  );
}

export default SecondBox;
