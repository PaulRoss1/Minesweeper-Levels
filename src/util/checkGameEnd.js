import { TILE_STATUSES } from "./constants";
// import { markTile } from "./markTile.js";
// import { revealTile } from "./revealTile.js";

export function checkGameEnd(board) {
  console.log("check game end");

  const win = checkWin(board);
  const lose = checkLose(board);

  if (win) {
    return "win";
  }
  if (lose) {
    return "lose";
  }
  return "playing";

  //   lose && return
  //   console.log("lose", lose);
  //   if (win || lose) {
  //     setGameStatus("ended");
  //     setMinesLeft(0);
  //   }
  //   if (win) {
  //     console.log("WIN");
  //   }
  //   if (lose) {
  //     board.forEach((row) => {
  //       row.forEach((tile) => {
  //         if (tile.status === TILE_STATUSES.MARKED) markTile(tile);
  //         if (tile.mine) revealTile(board, tile);
  //       });
  //     });
  //   }
}

export function checkWin(board) {
  return board.every((row) => {
    return row.every((tile) => {
      return tile.status === TILE_STATUSES.NUMBER || tile.mine;
    });
  });
}

export function checkLose(board) {
  return board.some((row) => {
    return row.some((tile) => {
      return tile.status === TILE_STATUSES.MINE;
    });
  });
}
