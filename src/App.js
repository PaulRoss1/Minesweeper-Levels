import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Game from "./pages/Game";
import HighScores from "./pages/HighScores";
import NotFound from "./pages/NotFound";
import HomepPage from "./pages/HomePage";
import { backgroundColors } from "./util/constants";
import { AudioPlayer } from "./pages/AudioPlayer";
import { useState } from "react";

function App() {
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // let randomIndex = Math.floor(Math.random() * 14) + 1;

  return (
    <div
      className="ms-app"
      style={{
        // backgroundColor: backgroundColors[randomIndex][10],
        backgroundColor: backgroundColors[7][10],

        transition: "background-color 1.5s ease",
      }}
    >
      <Router>
        <AudioPlayer
          musicEnabled={musicEnabled}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomepPage
                setMusicEnabled={setMusicEnabled}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            }
          />
          <Route path="/game" element={<Game isPlaying={isPlaying} />} />
          <Route path="/high-scores" element={<HighScores />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
