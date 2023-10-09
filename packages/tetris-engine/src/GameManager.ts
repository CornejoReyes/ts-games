import { Board } from './Board';
import { Collider } from './Collider';
import { Piece } from './Piece';
import { ShapeType, createShape } from './Shape';

export class GameManager {
  public currentPiece: Piece;

  constructor(private board: Board, private collider: Collider) {
    this.currentPiece = this.generateRandomPiece();
  }

  public generateRandomPiece(): Piece {
    const availableShapes = [
      ShapeType.I,
      ShapeType.J,
      ShapeType.L,
      ShapeType.O,
      ShapeType.S,
      ShapeType.T,
      ShapeType.Z,
    ];
    const shape = createShape(
      availableShapes[Math.floor(Math.random() * availableShapes.length)]
    );
    return new Piece(shape, {
      x: Math.floor(Math.random() * (this.board.width / 2 - 2)) + 2,
      y: 0,
    });
  }

  public updateCurrentPiece(): void {
    this.currentPiece = this.generateRandomPiece();
  }

  public movePieceLeft(): void {
    if (
      !this.collider.isColliding(
        this.currentPiece.shape,
        { ...this.currentPiece.position, x: this.currentPiece.position.x - 1 },
        this.board
      )
    ) {
      this.currentPiece.moveLeft();
    }
  }

  public movePieceRight(): void {
    if (
      !this.collider.isColliding(
        this.currentPiece.shape,
        { ...this.currentPiece.position, x: this.currentPiece.position.x + 1 },
        this.board
      )
    ) {
      this.currentPiece.moveRight();
    }
  }

  public movePieceDown(): void {
    if (
      !this.collider.isColliding(
        this.currentPiece.shape,
        { ...this.currentPiece.position, y: this.currentPiece.position.y + 1 },
        this.board
      )
    ) {
      this.currentPiece.moveDown();
      return;
    }
    this.mergePiece();
  }

  public updateBoardState() {
    const completedRows = this.board.getCompletedRows();
    this.board.removeAndReestablishRows(completedRows);
  }

  private mergePiece() {
    this.board.insertPiece(this.currentPiece);
    this.updateCurrentPiece();
  }
}
