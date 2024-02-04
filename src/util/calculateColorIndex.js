import { BOARD_SETTINGS } from "./constants";

export function calculateColorIndex(mineCount, level) {
  let percentageOfMinesLeft =
    (mineCount / BOARD_SETTINGS[level].numberOfMines) * 100;

  let colorIndex = Math.max(Math.floor(percentageOfMinesLeft / 10), 1);

  return colorIndex;
}
