import "../App.scss";
import { useEffect, useState, useRef } from "react";
import { createBoard } from "../util/createBoard";
import Board from "../components/Board";
import { checkGameEnd } from "../util/checkGameEnd";
import {
  BOARD_SETTINGS,
  alertColors,
  backgroundColors,
} from "../util/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { calculateColorIndex } from "../util/calculateColorIndex";
import GameInfo from "../components/GameInfo";
import flagSvg from "../images/flag.svg";

function Game({ isPlaying }) {
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(5);
  const [board, setBoard] = useState([]);
  const [mineCount, setMineCount] = useState(0);
  const [time, setTime] = useState(BOARD_SETTINGS[level].defaultTime);
  const [flagMode, setFlagMode] = useState(false);

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
    isPlaying && new Audio(require("../music/success.mp3")).play();

    console.log("running handleWin");
    setLevel(level + 1);
    setTime(BOARD_SETTINGS[level + 1].defaultTime);
  }

  function handleLoose() {
    isPlaying && new Audio(require("../music/loose.wav")).play();

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

  let colorIndex = calculateColorIndex(board);

  return (
    <div
      className="ms-game"
      style={{
        backgroundColor: [1, 2, 3, 4].includes(time)
          ? alertColors[time]
          : backgroundColors[level][colorIndex],

        transition: "background-color 1.5s ease",
      }}
    >
      <button
        className={`ms-game__flag-button ${
          flagMode && "ms-game__flag-button-active"
        }`}
        onClick={() => setFlagMode(!flagMode)}
      >
        <img
          src={flagSvg}
          alt="flag"
          style={{ width: "30px", height: "30px" }}
        />
      </button>
      <div className="gradient"></div>
      <GameInfo
        level={level}
        mineCount={mineCount}
        time={time}
        playerName={playerName}
        lives={lives}
        newGame={newGame}
      />

      <br />
      <Board
        board={board}
        setBoard={setBoard}
        level={level}
        setMineCount={setMineCount}
        setTime={setTime}
        flagMode={flagMode}
      />
    </div>
  );
}

export default Game;
