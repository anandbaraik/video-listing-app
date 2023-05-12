import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { VideoContextProvider, useVideoContext } from "./Context/VideoContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { useVideoContext };

root.render(
  <StrictMode>
    <Router>
      <VideoContextProvider>
        <App />
      </VideoContextProvider>
    </Router>
  </StrictMode>
);
