import { useVideoContext } from "..";
import { VideoCard } from "../Components/VideoCard";
export default function LikedVideos() {
  const { likedVideos } = useVideoContext();
  if (likedVideos?.length < 1) return <h1>You have not liked any video yet</h1>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "1rem"
      }}
    >
      {likedVideos?.map((video) => {
        return <VideoCard key={video.id} {...video} />;
      })}
    </div>
  );
}
