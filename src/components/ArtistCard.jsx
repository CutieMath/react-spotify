import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/20 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="artist"
        src={track?.images?.coverart}
        className="rounded-lg w-full h-56"
      />
      <p className="mt-4 font-semibold truncate text-white">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
