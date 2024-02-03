import "./App.css";
import { useEffect, useState, useRef } from "react";
import { createBoard } from "./util/createBoard";
import Board from "./components/Board";
import { checkGameEnd } from "./util/checkGameEnd";
import Timer from "./components/Timer";
// import { DEFAULT_TIME } from "./util/constants";
import {
  BOARD_SETTINGS,
  alertColors,
  backgroundColors,
} from "./util/constants";

function App() {
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(5);
  const [board, setBoard] = useState([]);
  const [mineCount, setMineCount] = useState(0);
  // const [defaultTime, setDefaultTime] = useState(10);
  const [time, setTime] = useState(BOARD_SETTINGS[level].defaultTime);

  const intervalRef = useRef(null);

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
      newGame();
    }
  }

  function newGame() {
    setLevel(1);
    setLives(5);
    setTime(10);
  }

  return (
    <div
      className="app"
      style={{
        backgroundColor: [1, 2, 3].includes(time)
          ? alertColors[time]
          : backgroundColors[level][mineCount],
      }}
    >
      <>
        <div className="info">
          <button onClick={() => newGame()}>New Game</button>
          <br />
          <span>Level: {level}</span>
          <br />
          <span>Lives: {lives}</span>
          <br />
          <span>Mines: {mineCount}</span>
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

export default App;
