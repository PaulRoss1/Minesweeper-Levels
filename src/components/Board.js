import React, { Fragment } from "react";
import { revealTile } from "../util/revealTile";
import { BOARD_SETTINGS } from "../util/constants";
import { TILE_STATUSES } from "../util/constants";
import { markTile } from "../util/markTile";
import { calculateTileSize } from "../util/calculateTileSize";

function Board({ board, setBoard, level, setMineCount, setTime, flagMode }) {
  const handleTileClick = (e, tile) => {
    if (flagMode) {
      handleTileRightClick(e, tile);
      return;
    }
    tile.status === TILE_STATUSES.HIDDEN &&
      setTime(BOARD_SETTINGS[level].defaultTime);

    console.log("running handleTileClick");
    const updatedBoard = revealTile(board, tile);

    setBoard(updatedBoard);
  };

  const handleTileRightClick = (e, tile) => {
    e.preventDefault();
    const updatedTile = markTile(tile);

    if (
      updatedTile.status === TILE_STATUSES.MARKED &&
      tile.status !== TILE_STATUSES.NUMBER
    ) {
      setMineCount((prevMinesLeft) => prevMinesLeft - 1);
    } else if (tile.status !== TILE_STATUSES.NUMBER) {
      setMineCount((prevMinesLeft) => prevMinesLeft + 1);
    }

    const newBoard = [...board];
    newBoard[tile.x][tile.y].status = updatedTile.status;
    setBoard(newBoard);
  };

  return (
    <div
      className="ms-game__board"
      style={{
        "--grid-size": BOARD_SETTINGS[level].boardSize,
        "--tile-size": calculateTileSize(level),
      }}
    >
      {board.map((row, rowIndex) => (
        <Fragment key={rowIndex}>
          {row.map((tile, colIndex) => (
            <div
              className="ms-game__tile"
              key={colIndex}
              data-status={tile.status}
              onClick={(e) => handleTileClick(e, tile)}
              onContextMenu={(e) => handleTileRightClick(e, tile)}
            >
              {tile.number}
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default Board;
