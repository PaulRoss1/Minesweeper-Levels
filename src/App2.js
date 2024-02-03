// import "./App.css";
// import { useEffect, useState, useRef } from "react";
// import { createBoard } from "./util/createBoard";
// import Board from "./components/Board";
// import { checkGameEnd } from "./util/checkGameEnd";
// import Timer from "./components/Timer";

// function App() {
//   const [level, setLevel] = useState(1);
//   const [lives, setLives] = useState(3);
//   const [board, setBoard] = useState([]);
//   const [mineCount, setMineCount] = useState(0);
//   const [time, setTime] = useState(10);

//   const intervalRef = useRef(null); // Reference to the interval

//   useEffect(() => {
//     const newBoard = createBoard(level, setMineCount);
//     setBoard(newBoard);
//   }, [level, lives]);

//   useEffect(() => {
//     if (time === 0) {
//       handleLoose();
//     }
//   }, [time]);

//   useEffect(() => {
//     let gameStatus = checkGameEnd(board);

//     if (gameStatus === "win") {
//       handleWin();
//     }

//     if (gameStatus === "lose") {
//       handleLoose();
//     }
//   }, [board]);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
//     }, 1000);

//     return () => clearInterval(intervalRef.current);
//   }, []); // Run only once on component mount

//   function handleWin() {
//     setLevel(level + 1);
//     setTime(10);
//   }

//   function handleLoose() {
//     setLives((prevLives) => prevLives - 1);
//     setTime(10); // Reset timer to 10 when player loses a life
//     if (lives === 1) {
//       newGame();
//     }
//   }

//   function newGame() {
//     setLevel(1);
//     setLives(3);
//     setTime(10);
//   }

//   return (
//     <div className="App">
//       <>
//         <span>Level: {level}</span>
//         <br />
//         <span>Lives: {lives}</span>
//         <br />
//         <span>Mines: {mineCount}</span>
//         <br />
//         <button onClick={() => newGame()}>New Game</button>
//         <br />
//         <div className="time">
//           <span>⏰</span>
//           {time}
//         </div>
//         <br />
//         <Board
//           board={board}
//           setBoard={setBoard}
//           level={level}
//           setMineCount={setMineCount}
//         />
//       </>
//     </div>
//   );
// }

// export default App;
