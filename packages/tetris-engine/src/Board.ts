export class Board {
  board: number[][];

  constructor(private width: number, private height: number) {
    this.board = new Array(this.width).fill(new Array(this.height).fill(0));
  }
}
