export class Point {
  x;
  y;
  fixedY;
  speed = 0.01;
  cur;

  // 얼마나 움직일 것인가에 대한 프로퍼티
  max = Math.random() * 100 + 150;

  constructor(index: number, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.cur = index;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
