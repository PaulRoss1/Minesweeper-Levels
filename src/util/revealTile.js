import { TILE_STATUSES } from "./constants";

export function revealTile(board, tile) {
  if (tile.status !== TILE_STATUSES.HIDDEN) {
    return board;
  }

  const newBoard = [...board];

  if (tile.mine) {
    newBoard[tile.x][tile.y].status = TILE_STATUSES.MINE;
    return newBoard;
  }

  newBoard[tile.x][tile.y].status = TILE_STATUSES.NUMBER;

  const adjacentTiles = nearbyTiles(board, tile);
  const mines = adjacentTiles.filter((t) => t.mine);
  if (mines.length === 0) {
    adjacentTiles.forEach((adjacentTile) => {
      revealTile(newBoard, adjacentTile);
    });
  } else {
    newBoard[tile.x][tile.y].number = mines.length;
  }

  return newBoard;
}

function nearbyTiles(board, { x, y }) {
  const tiles = [];

  for (let xOffset = -1; xOffset <= 1; xOffset++) {
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
      const tile = board[x + xOffset]?.[y + yOffset];
      if (tile) tiles.push(tile);
    }
  }

  return tiles;
}
