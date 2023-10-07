export const enum ShapeType {
  O = 'O',
  I = 'I',
  J = 'J',
  Z = 'Z',
  T = 'T',
  L = 'L',
  S = 'S',
}

export type Shape = number[][];

const O: Shape = [
  [1, 1],
  [1, 1],
];

const I: Shape = [[1, 1, 1, 1]];

const J: Shape = [
  [0, 1],
  [0, 1],
  [1, 1],
];

const L: Shape = [
  [1, 0],
  [1, 0],
  [1, 1],
];

const S: Shape = [
  [0, 1, 1],
  [1, 1, 0],
];

const Z: Shape = [
  [1, 1, 0],
  [0, 1, 1],
];

const T: Shape = [
  [1, 1, 1],
  [0, 1, 0],
];

export function createShape(type: ShapeType): Shape {
  switch (type) {
    case ShapeType.O:
      return Array.from(O);
    case ShapeType.I:
      return Array.from(I);
    case ShapeType.J:
      return Array.from(J);
    case ShapeType.L:
      return Array.from(L);
    case ShapeType.S:
      return Array.from(S);
    case ShapeType.Z:
      return Array.from(Z);
    case ShapeType.T:
      return Array.from(T);
  }
}
