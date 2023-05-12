import { useParams } from "react-router-dom";
import { useVideoContext } from "..";
import { VideoCard } from "../Components/VideoCard";

export default function Watch() {
  const { videoList } = useVideoContext();
  const { videoId } = useParams();
  if (videoList?.length < 1) return <h1>Loading</h1>;
  const video = videoList?.find(({ id }) => id === +videoId);
  if (!video) return <h1>Video Not found</h1>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "1rem"
      }}
    >
      <VideoCard {...video} showDetails />
    </div>
  );
}
