import { NavLink } from "react-router-dom";
import { useVideoContext } from "..";
export default function Header() {
  const getStyle = ({ isActive }) => {
    return isActive ? "menu menu-active" : "menu";
  };
  const { watchLaterList, likedVideos } = useVideoContext();
  return (
    <div>
      <nav>
        <NavLink to="/" className={getStyle}>
          Home
        </NavLink>{" "}
        {"||"}{" "}
        <NavLink to="/videos" className={getStyle}>
          Videos
        </NavLink>{" "}
        {"||"}{" "}
        <NavLink to="/liked-videos" className={getStyle}>
          Liked Videos{" "}
          {likedVideos?.length > 0 && <span>({likedVideos?.length})</span>}
        </NavLink>{" "}
        {"||"}{" "}
        <NavLink to="/watch-later" className={getStyle}>
          Watch later{" "}
          {watchLaterList?.length > 0 && (
            <span>({watchLaterList?.length})</span>
          )}
        </NavLink>
      </nav>
    </div>
  );
}
