import { generateSudoku, findEmptyCell } from './sudokuGenerator.js';

export class Sudoku {
  constructor() {
    this.grid = generateSudoku();
  }

  hasEmptyCells() {
    return Boolean(findEmptyCell(this.grid));
  }
}
