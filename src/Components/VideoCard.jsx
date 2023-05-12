import { Link } from "react-router-dom";
import { useVideoContext } from "..";

export function VideoCard(video) {
  const {
    id,
    title,
    description,
    url,
    thumbnail,
    duration,
    showDetails
  } = video;
  const {
    addToWatchList,
    addToLike,
    watchLaterList,
    likedVideos
  } = useVideoContext();
  return (
    <div
      key={id}
      style={{
        maxWidth: "18rem",
        padding: "1rem",
        margin: "0.5rem",
        border: "0.1rem solid"
      }}
    >
      <img
        src={thumbnail}
        style={{ width: "100%", height: "50%", objectFit: "contain" }}
        alt={title}
      />
      <p>Title : {title}</p>
      {showDetails ? (
        <a href={url} target="_blank" rel="noreferrer">
          Watch now
        </a>
      ) : (
        <Link to={`/video/${id}`}>Watch here</Link>
      )}
      <br />
      <br />
      {showDetails && (
        <>
          <p>Description : {description}</p>
          <p>Duration : {duration}</p>
        </>
      )}
      {likedVideos?.find((v) => v.id === id) ? (
        <button disabled={true}>Liked</button>
      ) : (
        <button onClick={() => addToLike(video)}>Like</button>
      )}
      {watchLaterList?.find((v) => v.id === id) ? (
        <button disabled={true}>Added to wacth later</button>
      ) : (
        <button onClick={() => addToWatchList(video)}>
          Add to wacth later
        </button>
      )}
    </div>
  );
}
