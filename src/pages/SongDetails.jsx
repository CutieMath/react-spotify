import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetials } =
    useGetSongDetailsQuery({ songid });
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10 mt-5">
        <h2 className="text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p key={i} className="text-gray-800 text-base my-2">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-800 text-base">Ah ohhh No lyrics found x</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
