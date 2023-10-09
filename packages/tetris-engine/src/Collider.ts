import { Board } from './Board';
import { Position } from './Piece';
import { Shape } from './Shape';

export class Collider {
  isColliding(shape: Shape, position: Position, board: Board) {
    return shape.some((row, y) =>
      row.some(
        (val, x) =>
          val !== 0 && board.board[y + position.y]?.[x + position.x] !== 0
      )
    );
  }
}
