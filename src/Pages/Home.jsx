import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>Welcome to video library</h1>
      <h3>
        To browse all videos, click the below button or go to the videos page.
      </h3>
      <Link to="/videos">Explore videos</Link>
    </div>
  );
}
