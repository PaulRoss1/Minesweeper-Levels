import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function HighScores() {
  const [highScores, setHighScores] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const playerName = location.state?.playerName || "";
  const level = location.state?.level || 0;

  useEffect(() => {
    let scores = JSON.parse(localStorage.getItem("highScores"));

    setHighScores(scores);
  }, []);

  const handlePlayClick = () => {
    navigate("/game", { state: { playerName: playerName } });
  };

  return (
    <div className="high-scores">
      {playerName.length > 0 && <span>game over - level {level}</span>}
      <br />
      <span>High Scores</span>
      <br />

      <ul>
        {highScores
          ?.sort((a, b) => b.level - a.level)
          .slice(0, 10)
          .map((score, index) => (
            <li key={index}>
              {index + 1}. {score.name} - {score.level}
            </li>
          ))}
      </ul>

      <button onClick={() => navigate("/")}>home</button>
      <br />

      {playerName.length > 0 && (
        <button onClick={handlePlayClick}>play again</button>
      )}
    </div>
  );
}

export default HighScores;
