import { Point } from './Point';

export class Wave {
  stageWidth = 0;
  stageHeight = 0;

  // 이 웨이브는 화면 중간에 그려질 것이기 때문에 center 값을 정의
  centerX = 0;
  centerY = 0;

  point: Point | undefined;

  index;
  totalPoints;
  color;
  points: Array<Point> = [];
  pointGap = 0;

  constructor(index: number, totalPoints: number, color: string) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
  }

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY);
      this.points[i] = point;
    }
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx === null) return;

    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    // 첫점과 끝점은 가만히 있고, 가운데만 업데이트
    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }
}
