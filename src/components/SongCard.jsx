import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i }) => {
  const activeSong = "Test";
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute rounded inset-0 justify-center items-center bg-white bg-opacity-40 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-white bg-opacity-70"
              : "hidden"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SongCard;
