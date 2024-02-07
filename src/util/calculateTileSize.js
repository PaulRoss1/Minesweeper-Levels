import { BOARD_SETTINGS } from "./constants";

export const calculateTileSize = (level) => {
  const tileSize =
    window.innerWidth <= 400
      ? `${BOARD_SETTINGS[level].tileSize - 27}px`
      : window.innerWidth <= 576
      ? `${BOARD_SETTINGS[level].tileSize * 0.5}px`
      : window.innerWidth <= 768
      ? `${BOARD_SETTINGS[level].tileSize * 0.75}px`
      : window.innerWidth <= 992
      ? `${BOARD_SETTINGS[level].tileSize * 0.8}px`
      : `${BOARD_SETTINGS[level].tileSize}px`;

  return tileSize;
};
