import { Block } from './Block';

export class Ball {
  radius;
  x;
  y;
  vx;
  vy;

  constructor(stageWidth: number, stageHeight: number, radius: number, speed: number) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = this.radius + Math.random() * (stageWidth - diameter);
    this.y = this.radius + Math.random() * (stageHeight - diameter);
  }

  draw(ctx: CanvasRenderingContext2D | null, stageWidth: number, stageHeight: number, block: Block) {
    if (ctx === null) return;

    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);

    this.bounceBlock(block);

    ctx.fillStyle = '#fdd700';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  private bounceWindow(stageWidth: number, stageHeight: number) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }

  private bounceBlock(block: Block) {
    const minX = block.x - this.radius;
    const maxX = block.maxX + this.radius;
    const minY = block.y - this.radius;
    const maxY = block.maxY + this.radius;

    if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
      const x1 = Math.abs(minX - this.x);
      const x2 = Math.abs(this.x - maxX);
      const y1 = Math.abs(minY - this.y);
      const y2 = Math.abs(minX - this.x);
      const min1 = Math.min(x1, x2);
      const min2 = Math.min(y1, y2);
      const min = Math.min(min1, min2);

      if (min === min1) {
        this.vx *= -1;
        this.x += this.vx;
      } else if (min === min2) {
        this.vy *= -1;
        this.y += this.vy;
      }
    }
  }
}
