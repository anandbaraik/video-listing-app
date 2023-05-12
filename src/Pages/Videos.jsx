import { useVideoContext } from "..";
import { VideoCard } from "../Components/VideoCard";

export default function Videos() {
  const { videoList } = useVideoContext();
  if (videoList?.length < 1) return <h1>Loading</h1>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "1rem"
      }}
    >
      {videoList?.map((video) => {
        return <VideoCard key={video.id} {...video} />;
      })}
    </div>
  );
}
