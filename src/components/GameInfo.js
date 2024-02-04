import React from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

function GameInfo({ level, mineCount, time, playerName, lives, newGame }) {
  const navigate = useNavigate();

  return (
    <div className="info">
      <button onClick={() => navigate("/")}>HOME</button>

      <button onClick={() => newGame()}>RESET</button>

      <span>LEVEL: {level}</span>

      <span>MINES: {mineCount}</span>

      <Timer time={time} />

      <div>
        {playerName}{" "}
        <span className="lives">
          {Array.from({ length: lives }).map((_, i) => (
            <span key={i}>❤️</span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default GameInfo;
