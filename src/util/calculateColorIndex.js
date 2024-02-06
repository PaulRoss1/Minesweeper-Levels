export const calculateColorIndex = (board) => {
  function countTiles(board) {
    let totalTiles = 0;
    let totalUncoveredOrFlaggedTiles = 0;

    // Iterate through each row of the board
    board.forEach((row) => {
      // Add the number of cells in the row to the totalTiles count
      totalTiles += row.length;

      // Iterate through each cell in the row
      row.forEach((cell) => {
        // Check if the cell is either uncovered or flagged
        if (cell.status === "number" || cell.status === "marked") {
          totalUncoveredOrFlaggedTiles++;
        }
      });
    });

    return {
      totalTiles: totalTiles,
      totalUncoveredOrFlaggedTiles: totalUncoveredOrFlaggedTiles,
    };
  }

  function calculatePercentage(counts) {
    // Calculate the percentage of tiles left
    const percentageLeft =
      100 - (counts.totalUncoveredOrFlaggedTiles / counts.totalTiles) * 100;
    // Scale the percentage to a number between 1 and 10
    const scaledPercentage = Math.ceil(percentageLeft / 10);
    return scaledPercentage;
  }

  const counts = countTiles(board);
  const scaledPercentage = calculatePercentage(counts);
  return scaledPercentage;
};

// import { BOARD_SETTINGS } from "./constants";

// export function calculateColorIndex(mineCount, level) {
//   let percentageOfMinesLeft =
//     (mineCount / BOARD_SETTINGS[level].numberOfMines) * 100;

//   let colorIndex = Math.max(Math.floor(percentageOfMinesLeft / 10), 1);

//   return colorIndex;
// }
