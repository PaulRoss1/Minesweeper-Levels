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
    <div className="ms-high-scores">
      <div className="gradient"></div>

      {playerName.length > 0 && (
        <>
          <span className="ms-high-scores__over">GAME OVER</span>
          <br />
          <span className="ms-high-scores__over-level">LEVEL {level}</span>
        </>
      )}
      <br />
      {highScores === null ? (
        <span className="ms-high-scores__no-scores">NO HIGH SCORES YET</span>
      ) : (
        <>
          <div className="ms-high-scores__scoreboard">
            <span className="ms-high-scores__scoreboard-title">
              HIGH SCORES
            </span>
            <br />
            <br />

            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {highScores
                  ?.sort((a, b) => b.level - a.level)
                  .slice(0, 10)
                  .map((score, index) => (
                    <tr key={index}>
                      <td>{index + 1}.</td>
                      <td>{score.name}</td>
                      <td>{score.level}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <div className="ms-high-scores__buttons">
        <button onClick={() => navigate("/")}>HOME</button>

        {playerName.length > 0 && (
          <button onClick={handlePlayClick}>PLAY AGAIN</button>
        )}
      </div>
    </div>
  );
}

export default HighScores;
