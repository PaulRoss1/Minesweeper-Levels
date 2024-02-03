import { TILE_STATUSES } from "./constants";

export function markTile(tile) {
  if (
    tile.status !== TILE_STATUSES.HIDDEN &&
    tile.status !== TILE_STATUSES.MARKED
  ) {
    return tile;
  }
  tile.status =
    tile.status === TILE_STATUSES.MARKED
      ? TILE_STATUSES.HIDDEN
      : TILE_STATUSES.MARKED;
  return tile;
}
