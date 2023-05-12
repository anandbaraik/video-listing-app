import { useVideoContext } from "..";
import { VideoCard } from "../Components/VideoCard";
export default function WatchLater() {
  const { watchLaterList } = useVideoContext();
  if (watchLaterList?.length < 1) return <h1>Add some video to watch later</h1>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "1rem"
      }}
    >
      {watchLaterList?.map((video) => {
        return <VideoCard key={video.id} {...video} />;
      })}
    </div>
  );
}
