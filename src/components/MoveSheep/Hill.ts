export type DotType = { x1: number, y1: number, x2: number, y2: number, x3: number, y3: number }
export type DotsType = Array<DotType>

export class Hill {
  color: string;
  speed: number;
  total: number;
  stageWidth: number = 0;
  stageHeight: number = 0;
  points: Array<{ x: number, y: number}> = [];
  gap: number = 0;

  constructor(color: string, speed: number, total: number) {
    this.color = color;
    this.speed = speed;
    this.total = total;
  }

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.gap = Math.ceil(this.stageWidth / (this.total -2));

    for(let i =0; i < this.total; i++) {
      this.points[i] = {
        x: i*this.gap,
        y: this.getY(),
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if(ctx === null) return;

    ctx.fillStyle = this.color;
    ctx.beginPath();

    let cur = this.points[0];
    let prev = cur;

    let dots: DotsType = [];

    if(cur.x > -this.gap) {
      this.points.unshift({
        x: -(this.gap * 2),
        y: this.getY()
      })
    } else if(cur.x > this.stageWidth + this.gap) {
      this.points.splice(-1);
    }

    ctx.moveTo(cur.x, cur.y);

    let prevCx = cur.x;
    let prevCy = cur.y;

    this.points.forEach((hill) => {
      hill.x += this.speed
      const cx = (prev.x + hill.x) / 2;
      const cy = (prev.y + hill.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, cx,cy);

      dots.push({
        x1: prevCx,
        y1: prevCy,
        x2: prev.x,
        y2: prev.y,
        x3: cx, 
        y3: cy
      })

      prev = hill;
      prevCx = cx;
      prevCy = cy;
    });

    ctx.lineTo(prev.x, prev.y);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight)
    ctx.fill();

    return dots;
  }

  getY() {
    const min = this.stageHeight / 8;
    const max = this.stageHeight - min;
    return min + Math.random() * max;
  }
}