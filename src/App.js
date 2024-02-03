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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/high-scores" element={<HighScores />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
