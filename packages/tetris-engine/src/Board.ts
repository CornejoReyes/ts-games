import { Piece } from './Piece';

export class Board {
  board: number[][] = [];

  constructor(public width: number, public height: number) {
    for (let j = 0; j < this.height; j += 1) {
      this.board.push([]);
      for (let i = 0; i < this.width; i += 1) {
        this.board[j].push(0);
      }
    }
  }

  public getCompletedRows(): number[] {
    const result: number[] = [];
    this.board.forEach((row, idx) => {
      if (row.every((val) => val === 1)) {
        result.push(idx);
      }
    });
    return result;
  }

  public removeAndReestablishRows(indexes: number[]) {
    if (indexes.length > 0) {
      indexes.forEach((idx) => {
        this.board.splice(idx, 1);
        const row = [];
        for (let i = 0; i < this.width; i += 1) {
          row.push(0);
        }
        this.board.unshift(row);
      });
    }
  }

  public insertPiece(piece: Piece): void {
    const { shape, position } = piece;
    shape.forEach((row, y) =>
      row.forEach((val, x) => {
        if (val === 1) {
          this.board[y + position.y][x + position.x] = 1;
        }
      })
    );
  }
}
