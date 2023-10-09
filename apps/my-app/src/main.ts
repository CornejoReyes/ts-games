/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Board, Collider, GameManager } from '@ts-games/tetris-engine';

const canvas = document.querySelector('canvas')!;
const ctx = canvas.getContext('2d')!;

const BLOCK_SIZE = 20;
const WIDTH = 15;
const HEIGHT = 30;

canvas.width = BLOCK_SIZE * WIDTH;
canvas.height = BLOCK_SIZE * HEIGHT;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

const board = new Board(WIDTH, HEIGHT);
const collider = new Collider();
const gameManager = new GameManager(board, collider);

const gravity = createGravity(onGravity);

setUpGameControls();
window.requestAnimationFrame(update);

function update(time = 0) {
  gravity(time);
  draw();
  gameManager.updateBoardState();
  window.requestAnimationFrame(update);
}

function draw() {
  ctx.fillStyle = '#424242';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  board.board.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        ctx.fillStyle = '#ACB';
        ctx.fillRect(x, y, 1, 1);
      }
    });
  });
  gameManager.currentPiece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(
          x + gameManager.currentPiece.position.x,
          y + gameManager.currentPiece.position.y,
          1,
          1
        );
      }
    });
  });
}

function setUpGameControls() {
  window.addEventListener('keydown', (event) => {
    console.log(event);
    switch (event.key) {
      case 'a':
        gameManager.movePieceLeft();
        break;
      case 's':
        gameManager.movePieceDown();
        break;
      case 'd':
        gameManager.movePieceRight();
        break;
      case 'q':
        gameManager.currentPiece.rotateLeft();
        break;
      case 'e':
        gameManager.currentPiece.rotateRight();
        break;
      default:
        break;
    }
  });
}

function onGravity() {
  gameManager.movePieceDown();
}

function createGravity(callback: () => void) {
  let count = 0;
  let lastSnap = 0;

  function gravity(time: number) {
    const d = time - lastSnap;
    lastSnap = time;
    count += d;
    if (count > 250) {
      callback();
      count = 0;
    }
  }
  return gravity;
}
