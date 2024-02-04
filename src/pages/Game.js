import "../App.css";
import { useEffect, useState, useRef } from "react";
import { createBoard } from "../util/createBoard";
import Board from "../components/Board";
import { checkGameEnd } from "../util/checkGameEnd";
import Timer from "../components/Timer";
import {
  BOARD_SETTINGS,
  alertColors,
  backgroundColors,
} from "../util/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { calculateColorIndex } from "../util/calculateColorIndex";

function Game() {
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(5);
  const [board, setBoard] = useState([]);
  const [mineCount, setMineCount] = useState(0);
  const [time, setTime] = useState(BOARD_SETTINGS[level].defaultTime);

  const intervalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const playerName = location.state?.playerName || "Player";

  useEffect(() => {
    const newBoard = createBoard(level, setMineCount);
    setBoard(newBoard);
  }, [level, lives]);

  useEffect(() => {
    if (time === 0) {
      handleLoose();
    }
  }, [time]);

  useEffect(() => {
    let gameStatus = checkGameEnd(board);

    console.log("gameStatus", gameStatus);

    if (gameStatus === "win") {
      handleWin();
    }

    if (gameStatus === "lose") {
      handleLoose();
    }
  }, [board]);

  useEffect(() => {
    setLevel(1);

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  function handleWin() {
    console.log("running handleWin");
    setLevel(level + 1);
    setTime(BOARD_SETTINGS[level + 1].defaultTime);
  }

  function handleLoose() {
    setLives((prevLives) => prevLives - 1);
    setTime(BOARD_SETTINGS[level].defaultTime);
    if (lives === 1) {
      let scores = JSON.parse(localStorage.getItem("highScores")) || [];
      scores.push({ name: playerName, level });
      localStorage.setItem("highScores", JSON.stringify(scores));

      navigate("/high-scores", { state: { playerName, level } });
    }
  }

  function newGame() {
    setLevel(1);
    setLives(5);
    setTime(10);
  }

  let colorIndex = calculateColorIndex(mineCount, level);
  console.log("colorIndex", colorIndex);

  return (
    <div
      className="app"
      style={{
        backgroundColor: [1, 2, 3].includes(time)
          ? alertColors[time]
          : backgroundColors[level][colorIndex],

        transition: "background-color 1.5s ease",
      }}
    >
      <>
        <div className="info">
          <button onClick={() => newGame()}>Reset</button>
          <br />
          <button onClick={() => navigate("/")}>home page</button>
          <br />
          <span>{playerName}</span>
          <br />
          <div className="lives">
            {Array.from({ length: lives }).map((_, i) => (
              <span key={i}>❤️</span>
            ))}
          </div>
          <span>Level: {level}</span>
          <br />

          <span>Mines left: {mineCount}</span>
          <br />

          <Timer time={time} />
        </div>

        <br />
        <Board
          board={board}
          setBoard={setBoard}
          level={level}
          setMineCount={setMineCount}
          setTime={setTime}
          // defaultTime={BOARD_SETTINGS[level].defaultTime}
        />
      </>
    </div>
  );
}

export default Game;
