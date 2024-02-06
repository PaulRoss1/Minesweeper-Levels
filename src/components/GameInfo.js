import React from "react";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

function GameInfo({ level, mineCount, time, playerName, lives, newGame }) {
  const navigate = useNavigate();

  return (
    <div className="ms-game__info">
      <button onClick={() => navigate("/")}>HOME</button>

      <button onClick={() => newGame()}>RESET</button>

      <span style={{ width: "121px" }}>LEVEL: {level}</span>

      <span style={{ width: "121px" }}>MINES: {mineCount}</span>

      <Timer time={time} />

      <div>
        <span className="ms-game__lives">
          <span style={{ marginRight: "8px" }}>{playerName}</span>
          {Array.from({ length: lives }).map((_, i) => (
            // <span key={i}>❤️</span>
            <>
              <img
                src={require("../images/heart2.png")}
                alt="heart"
                key={i}
                style={{ width: "30px", height: "30px" }}
              />
            </>
          ))}
        </span>
      </div>
    </div>
  );
}

export default GameInfo;
