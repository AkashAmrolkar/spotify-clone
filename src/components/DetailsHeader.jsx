import { links } from "../assets/constants";

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="relative w-full flex felx-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
    
    </div>
    <img
      alt="art"
      src={artistId ? artistData?.artists[artistId].attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart }
    />
  </div>
);

export default DetailsHeader;
