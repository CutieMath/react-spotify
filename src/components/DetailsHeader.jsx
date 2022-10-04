import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="rounded-full w-full bg-gradient-to-l from-transparent to-[#c2b4da] sm:h-48 h-48">
        <div className="absolute inset-0 flex items-center">
          <img
            alt="art"
            src={
              artistId
                ? artist?.artwork?.url
                    .replace("{w}", "500")
                    .replace("{h}", "500")
                : songData?.images?.coverart
            }
            className="sm:w-28 w-28 sm:h-28 h-28 rounded-full object-cover ml-10"
          />

          <div className="ml-5">
            <p className="font-bold sm:text-xl text-xl text-white">
              {artistId ? artist?.name : songData?.title}
            </p>
            {!artistId && (
              <Link to={`/artists/${songData?.artists[0].adamid}`}>
                <p className="text-base text-gray-100 mt-2">
                  {songData?.subtitle}
                </p>
              </Link>
            )}
            <p className="text-base text-gray-100 mt-2">
              {artistId ? artist?.genreNames : songData?.genres?.primary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
