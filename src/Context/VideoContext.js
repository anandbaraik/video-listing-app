import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../API/fakeFetch";
const VideoContext = createContext({
  videoList: [],
  watchLaterList: [],
  likedVideos: [],
  addToWatchList: () => {},
  addToLike: () => {}
});

export const VideoContextProvider = ({ children }) => {
  const URL = "https://example.com/api/videos";
  const [videoList, setVideoList] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);

  const addToWatchList = (Video) => {
    setWatchLaterList((list) => [...list, { ...Video }]);
  };
  const addToLike = (Video) => {
    setLikedVideos((list) => [...list, { ...Video }]);
  };

  const getVideos = async () => {
    try {
      const {
        data: { videos }
      } = await fakeFetch(URL);
      if (videos) {
        setVideoList(videos);
      }
    } catch ({ status, message }) {
      console.error(`${status} :  ${message}`);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <VideoContext.Provider
      value={{
        videoList,
        watchLaterList,
        likedVideos,
        addToWatchList,
        addToLike
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  return useContext(VideoContext);
};
