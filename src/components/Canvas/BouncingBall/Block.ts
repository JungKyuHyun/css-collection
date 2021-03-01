export class Block {
  width;
  height;
  x;
  y;

  // 공을 추적 하기 위한 값
  maxX;
  maxY;

  constructor(width: number, height: number, x: number, y: number) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.maxX = width + x;
    this.maxY = height + y;
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx === null) return;

    const xGap = 80;
    const yGap = 60;

    ctx.fillStyle = '#ff384e';
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();

    // 그림자 주기
    ctx.fillStyle = '#190f3a';
    ctx.beginPath();
    ctx.moveTo(this.maxX, this.maxY);
    ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
    ctx.lineTo(this.x - xGap, this.maxY + yGap);
    ctx.lineTo(this.x, this.maxY);
    ctx.fill();

    // 옆 그림자 주기
    ctx.fillStyle = '#9d0919';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.maxY);
    ctx.lineTo(this.x - xGap, this.maxY + yGap);
    ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
    ctx.fill();
  }
}
