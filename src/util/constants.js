export const DEFAULT_TIME = 20;

export const TILE_STATUSES = {
  HIDDEN: "hidden",
  MINE: "mine",
  NUMBER: "number",
  MARKED: "marked",
};

export const BOARD_SETTINGS = {
  1: {
    boardSize: 3,
    numberOfMines: 1,
    defaultTime: 10,
    tileSize: 59,
  },
  2: {
    boardSize: 4,
    numberOfMines: 2,
    defaultTime: 11,
    tileSize: 58,
  },
  3: {
    boardSize: 5,
    numberOfMines: 4,
    defaultTime: 12,
    tileSize: 57,
  },
  4: {
    boardSize: 6,
    numberOfMines: 6,
    defaultTime: 13,
    tileSize: 56,
  },
  5: {
    boardSize: 7,
    numberOfMines: 9,
    defaultTime: 14,
    tileSize: 55,
  },
  6: {
    boardSize: 8,
    numberOfMines: 14,
    defaultTime: 15,
    tileSize: 53,
  },
  7: {
    boardSize: 9,
    numberOfMines: 19,
    defaultTime: 16,
    tileSize: 52,
  },
  8: {
    boardSize: 10,
    numberOfMines: 25,
    defaultTime: 16,
    tileSize: 51,
  },
  9: {
    boardSize: 11,
    numberOfMines: 33,
    defaultTime: 18,
    tileSize: 50,
  },
  10: {
    boardSize: 12,
    numberOfMines: 42,
    defaultTime: 19,
    tileSize: 49,
  },
  11: {
    boardSize: 13,
    numberOfMines: 53,
    defaultTime: 20,
    tileSize: 48,
  },
  12: {
    boardSize: 14,
    numberOfMines: 65,
    defaultTime: 21,
    tileSize: 47,
  },
  13: {
    boardSize: 15,
    numberOfMines: 80,
    defaultTime: 22,
    tileSize: 46,
  },
  14: {
    boardSize: 16,
    numberOfMines: 96,
    defaultTime: 23,
    tileSize: 45,
  },
  15: {
    boardSize: 17,
    numberOfMines: 115,
    defaultTime: 24,
    tileSize: 44,
  },
  16: {
    boardSize: 18,
    numberOfMines: 135,
    defaultTime: 25,
    tileSize: 43,
  },
};

export const alertColors = {
  1: "#FF0000",
  2: "#FF2B2B",
  3: "#FF6666",
};

export const backgroundColors = {
  1: {
    1: "#ffefec",
    2: "#ffdfd9",
    3: "#ffcfc6",
    4: "#ffbfb3",
    5: "#ffafa0",
    6: "#fe9e8d",
    7: "#fe8e7a",
    8: "#fe7e67",
    9: "#fe6e54",
    10: "#fe5e41",
  },
  2: {
    1: "#e6f6f2",
    2: "#cceee4",
    3: "#b3e5d7",
    4: "#99dcc9",
    5: "#80d4bc",
    6: "#66cbae",
    7: "#4dc2a1",
    8: "#33b993",
    9: "#1ab186",
    10: "#00a878",
  },
  3: {
    1: "#fcedf3",
    2: "#f8dbe7",
    3: "#f5cadb",
    4: "#f2b8cf",
    5: "#efa6c3",
    6: "#eb94b6",
    7: "#e882aa",
    8: "#e5719e",
    9: "#e15f92",
    10: "#de4d86",
  },
  4: {
    1: "#eafcff",
    2: "#d5f9fe",
    3: "#c0f6fe",
    4: "#abf3fe",
    5: "#96f0fe",
    6: "#81edfd",
    7: "#6ceafd",
    8: "#57e7fd",
    9: "#42e4fc",
    10: "#2de1fc",
  },
  5: {
    1: "#f2e6ea",
    2: "#e5ced4",
    3: "#d7b5bf",
    4: "#ca9ca9",
    5: "#bd8494",
    6: "#b06b7e",
    7: "#a35269",
    8: "#953953",
    9: "#88213e",
    10: "#7b0828",
  },
  6: {
    1: "#fcf9eb",
    2: "#f9f2d7",
    3: "#f6ecc3",
    4: "#f3e5af",
    5: "#f0df9b",
    6: "#ecd886",
    7: "#e9d272",
    8: "#e6cb5e",
    9: "#e3c54a",
    10: "#e0be36",
  },
  7: {
    1: "#ecebf4",
    2: "#d8d8e8",
    3: "#c5c4dd",
    4: "#b1b1d2",
    5: "#9e9dc7",
    6: "#8b89bb",
    7: "#7776b0",
    8: "#6462a5",
    9: "#504f99",
    10: "#3d3b8e",
  },
  8: {
    1: "#ffedef",
    2: "#ffdbde",
    3: "#ffc8ce",
    4: "#ffb6be",
    5: "#ffa4ae",
    6: "#ff929d",
    7: "#ff808d",
    8: "#ff6d7d",
    9: "#ff5b6c",
    10: "#ff495c",
  },
  9: {
    1: "#eff9f1",
    2: "#e0f3e2",
    3: "#d0edd4",
    4: "#c0e7c6",
    5: "#b1e1b8",
    6: "#a1dba9",
    7: "#91d59b",
    8: "#81cf8d",
    9: "#72c97e",
    10: "#62c370",
  },
  10: {
    1: "#feebf7",
    2: "#fdd6ee",
    3: "#fcc2e6",
    4: "#fbaddd",
    5: "#fa99d5",
    6: "#f885cd",
    7: "#f770c4",
    8: "#f65cbc",
    9: "#f547b3",
    10: "#f433ab",
  },
  11: {
    1: "#eaeff7",
    2: "#d5dfee",
    3: "#c0cfe6",
    4: "#abbfdd",
    5: "#97afd5",
    6: "#829ecc",
    7: "#6d8ec4",
    8: "#587ebb",
    9: "#436eb3",
    10: "#2e5eaa",
  },
  12: {
    1: "#f5e8e9",
    2: "#ebd2d2",
    3: "#e1bbbc",
    4: "#d7a5a6",
    5: "#cd8e90",
    6: "#c37779",
    7: "#b96163",
    8: "#af4a4d",
    9: "#a53436",
    10: "#9b1d20",
  },
  13: {
    1: "#fef5eb",
    2: "#fdebd7",
    3: "#fce2c3",
    4: "#fbd8af",
    5: "#face9b",
    6: "#f8c487",
    7: "#f7ba73",
    8: "#f6b15f",
    9: "#f5a74b",
    10: "#f49d37",
  },
  14: {
    1: "#f0e7ec",
    2: "#e0cfd9",
    3: "#d1b8c5",
    4: "#c1a0b2",
    5: "#b2889f",
    6: "#a2708c",
    7: "#935879",
    8: "#834165",
    9: "#742952",
    10: "#64113f",
  },
  15: {
    1: "#ede9e9",
    2: "#dad4d3",
    3: "#c8bebd",
    4: "#b5a9a7",
    5: "#a39391",
    6: "#917d7b",
    7: "#7e6865",
    8: "#6c524f",
    9: "#593d39",
    10: "#472723",
  },
};

// export const backgroundColors = {
//   1: {
//     0: "#ffffff",
//     1: "#fff2f2",
//     2: "#ffe6e6",
//     3: "#ffd9d9",
//     4: "#ffcccc",
//     5: "#ffbfbf",
//     6: "#ffb2b2",
//     7: "#ffa6a6",
//     8: "#ff9999",
//     9: "#ff8c8c",
//     10: "#ff8080",
//     11: "#ff7373",
//     12: "#ff6666",
//     13: "#ff5959",
//     14: "#ff4d4d",
//     15: "#ff4040",
//     16: "#ff3333",
//     17: "#ff2626",
//     18: "#ff1a1a",
//     19: "#ff0d0d",
//     20: "#ff0000",
//     21: "#e60000",
//     22: "#cc0000",
//     23: "#b30000",
//     24: "#990000",
//     25: "#800000",
//     26: "#660000",
//     27: "#4d0000",
//     28: "#330000",
//     29: "#1a0000",
//     30: "#000000",
//     31: "#1a0000",
//     32: "#330000",
//     33: "#4d0000",
//     34: "#660000",
//     35: "#800000",
//     36: "#990000",
//     37: "#b30000",
//     38: "#cc0000",
//     39: "#e60000",
//   },
//   2: {
//     0: "#ffffff",
//     1: "#f2f2ff",
//     2: "#e6e6ff",
//     3: "#d9d9ff",
//     4: "#ccccff",
//     5: "#bfbfff",
//     6: "#b2b2ff",
//     7: "#a6a6ff",
//     8: "#9999ff",
//     9: "#8c8cff",
//     10: "#8080ff",
//     11: "#7373ff",
//     12: "#6666ff",
//     13: "#5959ff",
//     14: "#4d4dff",
//     15: "#4040ff",
//     16: "#3333ff",
//     17: "#2626ff",
//     18: "#1a1aff",
//     19: "#0d0dff",
//     20: "#0000ff",
//     21: "#0000e6",
//     22: "#0000cc",
//     23: "#0000b3",
//     24: "#000099",
//     25: "#000080",
//     26: "#000066",
//     27: "#00004d",
//     28: "#000033",
//     29: "#00001a",
//     30: "#000000",
//     31: "#1a0000",
//     32: "#330000",
//     33: "#4d0000",
//     34: "#660000",
//     35: "#800000",
//     36: "#990000",
//     37: "#b30000",
//     38: "#cc0000",
//     39: "#e60000",
//   },
//   3: {
//     0: "#ffffff",
//     1: "#fffff2",
//     2: "#ffffe6",
//     3: "#ffffd9",
//     4: "#ffffcc",
//     5: "#ffffbf",
//     6: "#ffffb2",
//     7: "#ffffa6",
//     8: "#ffff99",
//     9: "#ffff8c",
//     10: "#ffff80",
//     11: "#ffff73",
//     12: "#ffff66",
//     13: "#ffff59",
//     14: "#ffff4d",
//     15: "#ffff40",
//     16: "#ffff33",
//     17: "#ffff26",
//     18: "#ffff1a",
//     19: "#ffff0d",
//     20: "#ffff00",
//     21: "#e6e600",
//     22: "#cccc00",
//     23: "#b3b300",
//     24: "#999900",
//     25: "#808000",
//     26: "#666600",
//     27: "#4d4d00",
//     28: "#333300",
//     29: "#1a1a00",
//     30: "#000000",
//     31: "#1a1a00",
//     32: "#333300",
//     33: "#4d4d00",
//     34: "#666600",
//     35: "#808000",
//     36: "#999900",
//     37: "#b3b300",
//     38: "#cccc00",
//     39: "#e6e600",
//   },
//   4: {
//     0: "#ffffff",
//     1: "#f2fff2",
//     2: "#e6ffe6",
//     3: "#d9ffd9",
//     4: "#ccffcc",
//     5: "#bfffbf",
//     6: "#b2ffb2",
//     7: "#a6ffa6",
//     8: "#99ff99",
//     9: "#8cff8c",
//     10: "#80ff80",
//     11: "#73ff73",
//     12: "#66ff66",
//     13: "#59ff59",
//     14: "#4dff4d",
//     15: "#40ff40",
//     16: "#33ff33",
//     17: "#26ff26",
//     18: "#1aff1a",
//     19: "#0dff0d",
//     20: "#00ff00",
//     21: "#00e600",
//     22: "#00cc00",
//     23: "#00b300",
//     24: "#009900",
//     25: "#008000",
//     26: "#006600",
//     27: "#004d00",
//     28: "#003300",
//     29: "#001a00",
//     30: "#000000",
//     31: "#001a00",
//     32: "#003300",
//     33: "#004d00",
//     34: "#006600",
//     35: "#008000",
//     36: "#009900",
//     37: "#00b300",
//     38: "#00cc00",
//     39: "#00e600",
//   },
//   5: {
//     0: "#ffffff",
//     1: "#fff5eb",
//     2: "#ffebd6",
//     3: "#ffe0c2",
//     4: "#ffd6ad",
//     5: "#ffcc99",
//     6: "#ffc285",
//     7: "#ffba70",
//     8: "#ffb05c",
//     9: "#ffa647",
//     10: "#ff9c33",
//     11: "#ff921e",
//     12: "#ff881a",
//     13: "#ff7e15",
//     14: "#ff740f",
//     15: "#ff6a0a",
//     16: "#ff6000",
//     17: "#e65b00",
//     18: "#cc5500",
//     19: "#b34f00",
//     20: "#994900",
//     21: "#804300",
//     22: "#663d00",
//     23: "#4d3700",
//     24: "#333200",
//     25: "#1a2c00",
//     26: "#002600",
//     27: "#001f00",
//     28: "#001800",
//     29: "#001200",
//     30: "#000b00",
//     31: "#000500",
//     32: "#000000",
//     33: "#000500",
//     34: "#000b00",
//     35: "#001200",
//     36: "#001800",
//     37: "#001f00",
//     38: "#002600",
//     39: "#1a2c00",
//   },
//   6: {
//     0: "#ffffff",
//     1: "#f2f2ff",
//     2: "#e6e6ff",
//     3: "#d9d9ff",
//     4: "#ccccff",
//     5: "#bfbfff",
//     6: "#b2b2ff",
//     7: "#a6a6ff",
//     8: "#9999ff",
//     9: "#8c8cff",
//     10: "#8080ff",
//     11: "#7373ff",
//     12: "#6666ff",
//     13: "#5959ff",
//     14: "#4d4dff",
//     15: "#4040ff",
//     16: "#3333ff",
//     17: "#2626ff",
//     18: "#1a1aff",
//     19: "#0d0dff",
//     20: "#0000ff",
//     21: "#6600cc",
//     22: "#7f00b3",
//     23: "#990099",
//     24: "#b30080",
//     25: "#cc0066",
//     26: "#e6004d",
//     27: "#ff0033",
//     28: "#ff0026",
//     29: "#ff001a",
//     30: "#ff000d",
//     31: "#ff0000",
//     32: "#e60000",
//     33: "#cc0000",
//     34: "#b30000",
//     35: "#990000",
//     36: "#7f0000",
//     37: "#660000",
//     38: "#4c0000",
//     39: "#330000",
//   },
//   7: {
//     0: "#ffffff",
//     1: "#fff2f2",
//     2: "#ffe6e6",
//     3: "#ffd9d9",
//     4: "#ffcccc",
//     5: "#ffbfbf",
//     6: "#ffb2b2",
//     7: "#ffa6a6",
//     8: "#ff9999",
//     9: "#ff8c8c",
//     10: "#ff8080",
//     11: "#ff7373",
//     12: "#ff6666",
//     13: "#ff5959",
//     14: "#ff4d4d",
//     15: "#ff4040",
//     16: "#ff3333",
//     17: "#ff2626",
//     18: "#ff1a1a",
//     19: "#ff0d0d",
//     20: "#ff0000",
//     21: "#ff1a1a",
//     22: "#ff3333",
//     23: "#ff4d4d",
//     24: "#ff6666",
//     25: "#ff8080",
//     26: "#ff9999",
//     27: "#ffb2b2",
//     28: "#ffc8c8",
//     29: "#ffe1e1",
//     30: "#fff5f5",
//     31: "#ffffff",
//     32: "#fff5f5",
//     33: "#ffe1e1",
//     34: "#ffc8c8",
//     35: "#ffb2b2",
//     36: "#ff9999",
//     37: "#ff8080",
//     38: "#ff6666",
//     39: "#ff4d4d",
//   },
//   8: {
//     0: "#ffffff",
//     1: "#fff5eb",
//     2: "#ffebd6",
//     3: "#ffe0c2",
//     4: "#ffd6ad",
//     5: "#ffcc99",
//     6: "#ffc285",
//     7: "#ffba70",
//     8: "#ffb05c",
//     9: "#ffa647",
//     10: "#ff9c33",
//     11: "#ff921e",
//     12: "#ff881a",
//     13: "#ff7e15",
//     14: "#ff740f",
//     15: "#ff6a0a",
//     16: "#ff6000",
//     17: "#e65b00",
//     18: "#cc5500",
//     19: "#b34f00",
//     20: "#994900",
//     21: "#804300",
//     22: "#663d00",
//     23: "#4d3700",
//     24: "#333200",
//     25: "#1a2c00",
//     26: "#002600",
//     27: "#001f00",
//     28: "#001800",
//     29: "#001200",
//     30: "#000b00",
//     31: "#000500",
//     32: "#000000",
//     33: "#000500",
//     34: "#000b00",
//     35: "#001200",
//     36: "#001800",
//     37: "#001f00",
//     38: "#002600",
//     39: "#1a2c00",
//   },
//   9: {
//     0: "#ffffff",
//     1: "#f2f2f2",
//     2: "#e6e6e6",
//     3: "#d9d9d9",
//     4: "#cccccc",
//     5: "#bfbfbf",
//     6: "#b2b2b2",
//     7: "#a6a6a6",
//     8: "#999999",
//     9: "#8c8c8c",
//     10: "#808080",
//     11: "#737373",
//     12: "#666666",
//     13: "#595959",
//     14: "#4d4d4d",
//     15: "#404040",
//     16: "#333333",
//     17: "#262626",
//     18: "#1a1a1a",
//     19: "#0d0d0d",
//     20: "#000000",
//     21: "#0d0d0d",
//     22: "#1a1a1a",
//     23: "#262626",
//     24: "#333333",
//     25: "#404040",
//     26: "#4d4d4d",
//     27: "#595959",
//     28: "#666666",
//     29: "#737373",
//     30: "#808080",
//     31: "#8c8c8c",
//     32: "#999999",
//     33: "#a6a6a6",
//     34: "#b2b2b2",
//     35: "#bfbfbf",
//     36: "#cccccc",
//     37: "#d9d9d9",
//     38: "#e6e6e6",
//     39: "#f2f2f2",
//   },
// };

////////////////////////////////////////////////////////////////////////

// BACKGROUND COLORS

// export const redBackgroundColors = {
//   0: "#ffffff",
//   1: "#fff2f2",
//   2: "#ffe6e6",
//   3: "#ffd9d9",
//   4: "#ffcccc",
//   5: "#ffbfbf",
//   6: "#ffb2b2",
//   7: "#ffa6a6",
//   8: "#ff9999",
//   9: "#ff8c8c",
//   10: "#ff8080",
//   11: "#ff7373",
//   12: "#ff6666",
//   13: "#ff5959",
//   14: "#ff4d4d",
//   15: "#ff4040",
//   16: "#ff3333",
//   17: "#ff2626",
//   18: "#ff1a1a",
//   19: "#ff0d0d",
//   20: "#ff0000",
//   21: "#e60000",
//   22: "#cc0000",
//   23: "#b30000",
//   24: "#990000",
//   25: "#800000",
//   26: "#660000",
//   27: "#4d0000",
//   28: "#330000",
//   29: "#1a0000",
//   30: "#000000",
//   31: "#1a0000",
//   32: "#330000",
//   33: "#4d0000",
//   34: "#660000",
//   35: "#800000",
//   36: "#990000",
//   37: "#b30000",
//   38: "#cc0000",
//   39: "#e60000",
// };

// export const blueBackgroundColors = {
//   0: "#ffffff",
//   1: "#f2f2ff",
//   2: "#e6e6ff",
//   3: "#d9d9ff",
//   4: "#ccccff",
//   5: "#bfbfff",
//   6: "#b2b2ff",
//   7: "#a6a6ff",
//   8: "#9999ff",
//   9: "#8c8cff",
//   10: "#8080ff",
//   11: "#7373ff",
//   12: "#6666ff",
//   13: "#5959ff",
//   14: "#4d4dff",
//   15: "#4040ff",
//   16: "#3333ff",
//   17: "#2626ff",
//   18: "#1a1aff",
//   19: "#0d0dff",
//   20: "#0000ff",
//   21: "#0000e6",
//   22: "#0000cc",
//   23: "#0000b3",
//   24: "#000099",
//   25: "#000080",
//   26: "#000066",
//   27: "#00004d",
//   28: "#000033",
//   29: "#00001a",
//   30: "#000000",
//   31: "#1a0000",
//   32: "#330000",
//   33: "#4d0000",
//   34: "#660000",
//   35: "#800000",
//   36: "#990000",
//   37: "#b30000",
//   38: "#cc0000",
//   39: "#e60000",
// };

// export const yellowBackgroundColors = {
//   0: "#ffffff",
//   1: "#fffff2",
//   2: "#ffffe6",
//   3: "#ffffd9",
//   4: "#ffffcc",
//   5: "#ffffbf",
//   6: "#ffffb2",
//   7: "#ffffa6",
//   8: "#ffff99",
//   9: "#ffff8c",
//   10: "#ffff80",
//   11: "#ffff73",
//   12: "#ffff66",
//   13: "#ffff59",
//   14: "#ffff4d",
//   15: "#ffff40",
//   16: "#ffff33",
//   17: "#ffff26",
//   18: "#ffff1a",
//   19: "#ffff0d",
//   20: "#ffff00",
//   21: "#e6e600",
//   22: "#cccc00",
//   23: "#b3b300",
//   24: "#999900",
//   25: "#808000",
//   26: "#666600",
//   27: "#4d4d00",
//   28: "#333300",
//   29: "#1a1a00",
//   30: "#000000",
//   31: "#1a1a00",
//   32: "#333300",
//   33: "#4d4d00",
//   34: "#666600",
//   35: "#808000",
//   36: "#999900",
//   37: "#b3b300",
//   38: "#cccc00",
//   39: "#e6e600",
// };

// export const greenBackgroundColors = {
//   0: "#ffffff",
//   1: "#f2fff2",
//   2: "#e6ffe6",
//   3: "#d9ffd9",
//   4: "#ccffcc",
//   5: "#bfffbf",
//   6: "#b2ffb2",
//   7: "#a6ffa6",
//   8: "#99ff99",
//   9: "#8cff8c",
//   10: "#80ff80",
//   11: "#73ff73",
//   12: "#66ff66",
//   13: "#59ff59",
//   14: "#4dff4d",
//   15: "#40ff40",
//   16: "#33ff33",
//   17: "#26ff26",
//   18: "#1aff1a",
//   19: "#0dff0d",
//   20: "#00ff00",
//   21: "#00e600",
//   22: "#00cc00",
//   23: "#00b300",
//   24: "#009900",
//   25: "#008000",
//   26: "#006600",
//   27: "#004d00",
//   28: "#003300",
//   29: "#001a00",
//   30: "#000000",
//   31: "#001a00",
//   32: "#003300",
//   33: "#004d00",
//   34: "#006600",
//   35: "#008000",
//   36: "#009900",
//   37: "#00b300",
//   38: "#00cc00",
//   39: "#00e600",
// };

// export const orangeBackgroundColors = {
//   0: "#ffffff",
//   1: "#fff5eb",
//   2: "#ffebd6",
//   3: "#ffe0c2",
//   4: "#ffd6ad",
//   5: "#ffcc99",
//   6: "#ffc285",
//   7: "#ffba70",
//   8: "#ffb05c",
//   9: "#ffa647",
//   10: "#ff9c33",
//   11: "#ff921e",
//   12: "#ff881a",
//   13: "#ff7e15",
//   14: "#ff740f",
//   15: "#ff6a0a",
//   16: "#ff6000",
//   17: "#e65b00",
//   18: "#cc5500",
//   19: "#b34f00",
//   20: "#994900",
//   21: "#804300",
//   22: "#663d00",
//   23: "#4d3700",
//   24: "#333200",
//   25: "#1a2c00",
//   26: "#002600",
//   27: "#001f00",
//   28: "#001800",
//   29: "#001200",
//   30: "#000b00",
//   31: "#000500",
//   32: "#000000",
//   33: "#000500",
//   34: "#000b00",
//   35: "#001200",
//   36: "#001800",
//   37: "#001f00",
//   38: "#002600",
//   39: "#1a2c00",
// };

// export const purpleBackgroundColors = {
//   0: "#ffffff",
//   1: "#f2f2ff",
//   2: "#e6e6ff",
//   3: "#d9d9ff",
//   4: "#ccccff",
//   5: "#bfbfff",
//   6: "#b2b2ff",
//   7: "#a6a6ff",
//   8: "#9999ff",
//   9: "#8c8cff",
//   10: "#8080ff",
//   11: "#7373ff",
//   12: "#6666ff",
//   13: "#5959ff",
//   14: "#4d4dff",
//   15: "#4040ff",
//   16: "#3333ff",
//   17: "#2626ff",
//   18: "#1a1aff",
//   19: "#0d0dff",
//   20: "#0000ff",
//   21: "#6600cc",
//   22: "#7f00b3",
//   23: "#990099",
//   24: "#b30080",
//   25: "#cc0066",
//   26: "#e6004d",
//   27: "#ff0033",
//   28: "#ff0026",
//   29: "#ff001a",
//   30: "#ff000d",
//   31: "#ff0000",
//   32: "#e60000",
//   33: "#cc0000",
//   34: "#b30000",
//   35: "#990000",
//   36: "#7f0000",
//   37: "#660000",
//   38: "#4c0000",
//   39: "#330000",
// };

// export const pinkBackgroundColors = {
//   0: "#ffffff",
//   1: "#fff2f2",
//   2: "#ffe6e6",
//   3: "#ffd9d9",
//   4: "#ffcccc",
//   5: "#ffbfbf",
//   6: "#ffb2b2",
//   7: "#ffa6a6",
//   8: "#ff9999",
//   9: "#ff8c8c",
//   10: "#ff8080",
//   11: "#ff7373",
//   12: "#ff6666",
//   13: "#ff5959",
//   14: "#ff4d4d",
//   15: "#ff4040",
//   16: "#ff3333",
//   17: "#ff2626",
//   18: "#ff1a1a",
//   19: "#ff0d0d",
//   20: "#ff0000",
//   21: "#ff1a1a",
//   22: "#ff3333",
//   23: "#ff4d4d",
//   24: "#ff6666",
//   25: "#ff8080",
//   26: "#ff9999",
//   27: "#ffb2b2",
//   28: "#ffc8c8",
//   29: "#ffe1e1",
//   30: "#fff5f5",
//   31: "#ffffff",
//   32: "#fff5f5",
//   33: "#ffe1e1",
//   34: "#ffc8c8",
//   35: "#ffb2b2",
//   36: "#ff9999",
//   37: "#ff8080",
//   38: "#ff6666",
//   39: "#ff4d4d",
// };

// export const grayBackgroundColors = {
//   0: "#ffffff",
//   1: "#f2f2f2",
//   2: "#e6e6e6",
//   3: "#d9d9d9",
//   4: "#cccccc",
//   5: "#bfbfbf",
//   6: "#b2b2b2",
//   7: "#a6a6a6",
//   8: "#999999",
//   9: "#8c8c8c",
//   10: "#808080",
//   11: "#737373",
//   12: "#666666",
//   13: "#595959",
//   14: "#4d4d4d",
//   15: "#404040",
//   16: "#333333",
//   17: "#262626",
//   18: "#1a1a1a",
//   19: "#0d0d0d",
//   20: "#000000",
//   21: "#0d0d0d",
//   22: "#1a1a1a",
//   23: "#262626",
//   24: "#333333",
//   25: "#404040",
//   26: "#4d4d4d",
//   27: "#595959",
//   28: "#666666",
//   29: "#737373",
//   30: "#808080",
//   31: "#8c8c8c",
//   32: "#999999",
//   33: "#a6a6a6",
//   34: "#b2b2b2",
//   35: "#bfbfbf",
//   36: "#cccccc",
//   37: "#d9d9d9",
//   38: "#e6e6e6",
//   39: "#f2f2f2",
// };
