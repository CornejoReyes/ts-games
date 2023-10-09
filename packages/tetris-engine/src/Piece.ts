import { Shape } from './Shape';

export type Position = {
  x: number;
  y: number;
};

export class Piece {
  public shape: Shape;
  public position: Position;

  constructor(shape: Shape, position: Position) {
    this.position = position;
    this.shape = shape;
  }

  public moveLeft(): void {
    this.position.x -= 1;
  }

  public moveRight(): void {
    this.position.x += 1;
  }

  public moveDown(): void {
    this.position.y += 1;
  }

  public rotateRight(): void {
    const rotated = [];
    for (let j = 0; j < this.shape[0].length; j++) {
      const col = [];
      for (let i = this.shape.length - 1; i >= 0; i--) {
        col.push(this.shape[i][j]);
      }
      rotated.push(col);
    }
    this.shape = rotated;
  }

  public rotateLeft(): void {
    const rotated = [];
    for (let j = this.shape[0].length - 1; j >= 0; j--) {
      const col = [];
      for (let i = 0; i < this.shape.length; i++) {
        col.push(this.shape[i][j]);
      }
      rotated.push(col);
    }
    this.shape = rotated;
  }
}
