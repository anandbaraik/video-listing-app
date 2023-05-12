import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Videos from "./Pages/Videos";
import LikedVideos from "./Pages/LikedVideos";
import WatchLater from "./Pages/WatchLater";
import ErrorPage from "./Pages/ErrorPage";
import Watch from "./Pages/Watch";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/video/:videoId" element={<Watch />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
