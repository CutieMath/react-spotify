import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistid);

  if (isFetchingArtistDetails)
    return <Loader title="Searching for artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistid} artistData={artistData} />
      <p className="p-4"></p>
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistid}
        activeSong={activeSong}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default ArtistDetails;
