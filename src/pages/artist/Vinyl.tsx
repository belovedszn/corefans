import React from "react";
import albumImage from "../../assets/images/favvvvssss.jpeg"; // Update this path
import vinyl from "../../assets/images/vinyl.jpg"; // Update this path

const AlbumDisplay = () => {
  return (
     <div className="relative w-64 h-64">
      {/* Vinyl record behind */}
      <img
        src={albumImage}
        alt="Vinyl"
        className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-56 z-0"
      />
      {/* Album cover on top */}
      <img
        src={vinyl}
        alt="Album Cover"
        className="absolute left-0 top-0 w-64 h-64 object-cover z-10 rounded"
      />
    </div>
  );
};

export default AlbumDisplay;
