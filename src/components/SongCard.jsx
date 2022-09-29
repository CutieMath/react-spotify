import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const handlePauseClick = () => {};
  const handlePlayClick = () => {};
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/20 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute rounded inset-0 justify-center items-center bg-black bg-opacity-40 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-gray-800 truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-600">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
