import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle className="text-white" onClick={handlePause} size={35} />
  ) : (
    <FaPlayCircle className="text-white" onClick={handlePlay} size={35} />
  );

export default PlayPause;
