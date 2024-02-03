import { TILE_STATUSES, BOARD_SETTINGS } from "./constants";

export function createBoard(level, setMineCount) {
  const newBoard = [];
  const boardSize = BOARD_SETTINGS[level].boardSize;
  const numberOfMines = BOARD_SETTINGS[level].numberOfMines;
  const minePositions = getMinePositions(boardSize, numberOfMines);
  setMineCount(numberOfMines);

  for (let x = 0; x < boardSize; x++) {
    const row = [];
    for (let y = 0; y < boardSize; y++) {
      const element = document.createElement("div");
      element.dataset.status = TILE_STATUSES.HIDDEN;

      const tile = {
        element,
        x,
        y,
        number: "",
        mine: minePositions.some((position) =>
          positionMatch({ x, y }, position)
        ),
        get status() {
          return this.element.dataset.status;
        },
        set status(value) {
          this.element.dataset.status = value;
        },
      };

      row.push(tile);
    }
    newBoard.push(row);
  }

  return newBoard;
}

function getMinePositions(boardSize, numberOfMines) {
  const positions = [];

  while (positions.length < numberOfMines) {
    const position = {
      x: randomNumber(boardSize),
      y: randomNumber(boardSize),
    };

    if (!positions.some((p) => positionMatch(p, position))) {
      positions.push(position);
    }
  }

  return positions;
}

function positionMatch(a, b) {
  return a.x === b.x && a.y === b.y;
}

function randomNumber(size) {
  return Math.floor(Math.random() * size);
}
