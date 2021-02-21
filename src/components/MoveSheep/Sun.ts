type Position = { x: number; y: number };

export class Sun {
  radius = 200;
  stageWidth: number = 0;
  stageHeight: number = 0;
  x: number = 0;
  y: number = 0;

  total = 60;
  gap = 1 / this.total;
  orginPos: Array<Position> = [];
  pos: Array<Position> = [];

  fps = 30;
  fpsTime = 1000 / this.fps;
  time: number | undefined;

  constructor() {
    for (let i=0; i < this.total; i++) {
      const pos = this.getCirclePoint(this.radius, this.gap * i);
      this.orginPos[i] = pos;
      this.pos[i] = pos;
    }
  }


  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.x = this.stageWidth - this.radius -140;
    this.y = this.radius + 100;
  }

  draw(ctx: CanvasRenderingContext2D | null, t: number) {
    if(ctx === null) return;

    if(this.time === undefined) {
      this.time = t;
    }
    const now = t - this.time;
    if(now > this.fpsTime) {
      this.time = t;
      this.updatePoins();
    }

    ctx.fillStyle = '#ffb200';
    ctx.beginPath();

    let pos = this.pos[0];
    ctx.moveTo(pos.x + this.x, pos.y + this.y);
    for(let i=1; i<this.total; i++) {
      const pos = this.pos[i];
      ctx.lineTo(pos.x + this.x, pos.y + this.y);
    }
    ctx.fill();
  }

  updatePoins() {
    for (let i=1; i < this.total; i++) {
      const pos = this.orginPos[i];
      this.pos[i] = {
        x: pos.x + this.ranInt(5),
        y: pos.y + this.ranInt(5),
      }
    }
  }

  ranInt(max: number) {
    return Math.random() * max;
  }


  getCirclePoint(radius: number, t: number) {
    const theta = Math.PI * 2 * t;

    return {
      x: (Math.cos(theta) * radius),
      y: (Math.sin(theta) * radius),
    }
  }

}