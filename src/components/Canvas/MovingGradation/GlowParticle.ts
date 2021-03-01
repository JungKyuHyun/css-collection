import { PI2, RGB_TYPE } from './constants';

export class GlowParticle {
  x;
  y;
  radius;
  rgb;

  vx = Math.random() * 4;
  vy = Math.random() * 4;

  sinValue = Math.random();

  constructor(x: number, y: number, radius: number, rgb: RGB_TYPE) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;
  }

  animate(ctx: CanvasRenderingContext2D | null, stageWidth: number, stageHeight: number) {
    if (ctx === null) return;

    this.sinValue += 0.01;

    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.beginPath();
    const g = ctx.createRadialGradient(this.x, this.y, this.radius * 0.01, this.x, this.y, this.radius);
    g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
    g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);

    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  }
}
