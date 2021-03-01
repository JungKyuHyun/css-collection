const COLORS = [
  '#4b45ab',
  '#554fb8',
  '#605ac7',
  '#2a91a8',
  '#2e9ab2',
  '#32a5bf',
  '#81b144',
  '#85b944',
  '#8fc549',
  '#e0af27',
  '#eeba2a',
  '#fec72e',
  '#bf342d',
  '#ca3931',
  '#d7423a',
];

export class Polygon {
  x;
  y;
  radius;
  sides;

  rotate = 0;
  PI2 = Math.PI * 2;

  constructor(x: number, y: number, radius: number, sides: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
  }

  animate(ctx: CanvasRenderingContext2D | null, moveX: number) {
    if (ctx === null) return;

    ctx.save();
    // ctx.fillStyle = '#000';
    // ctx.beginPath();

    const angle = this.PI2 / this.sides;
    const angle2 = this.PI2 / 4;

    ctx.translate(this.x, this.y);

    this.rotate += moveX * 0.008;
    ctx.rotate(this.rotate);

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);

      // i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

      // ctx.beginPath();
      // ctx.arc(x, y, 30, 0, this.PI2, false);
      // ctx.fill();

      ctx.save();
      ctx.fillStyle = COLORS[i];
      ctx.translate(x, y);
      ctx.rotate((((360 / this.sides) * i + 45) * Math.PI) / 180);
      ctx.beginPath();
      for (let j = 0; j < 4; j++) {
        const x2 = 140 * Math.cos(angle2 * j);
        const y2 = 140 * Math.sin(angle2 * j);
        j === 0 ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
      }
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }

    // ctx.fill();
    // ctx.closePath();
    ctx.restore();
  }
}
