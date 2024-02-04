import { BOARD_SETTINGS } from "./constants";

export function calculateColorIndex(mineCount, level) {
  let percentageOfMinesLeft =
    (mineCount / BOARD_SETTINGS[level].numberOfMines) * 100;

  let colorIndex;
  if (mineCount === BOARD_SETTINGS[level].numberOfMines) {
    colorIndex = 10;
  } else if (90 <= percentageOfMinesLeft && percentageOfMinesLeft < 100) {
    colorIndex = 1;
  } else {
    colorIndex = Math.max(Math.floor(percentageOfMinesLeft / 10), 1);
  }

  return colorIndex;
}
