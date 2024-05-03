export const GRID_SIZE = 9;
export const BOX_SIZE = 3;

export function convertIndexToPosition(index) {
  return {
    row: Math.floor(index / GRID_SIZE),
    //   остаток от деления номера ячейки на 9:
    column: index % GRID_SIZE,
  };
}

export function convertPositionToIndex(row, column) {
  return row * GRID_SIZE + column;
}
