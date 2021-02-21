import { DotsType, DotType } from "./Hill";

export  class Sheep {
  img:HTMLImageElement;
  stageWidth: number;
  width = 0;

  totalFrame = 8;
  curFrame = 0;

  imgWidth = 360;
  imgHeight = 300;

  sheepWidth = 180;
  sheepHeight = 150;

  sheepWidthHalf = this.sheepWidth / 2;
  x: number;
  y = 0;
  speed = Math.random() * 2 + 1;

  fps = 24;
  fpsTime = 1000 / this.fps;
  time = 0;


  constructor(img: HTMLImageElement, stageWidth: number) {
    this.img = img;
    this.stageWidth = stageWidth;
    this.x = stageWidth + this.sheepWidth;
  }

  draw(ctx: CanvasRenderingContext2D | null, t: number, dots: DotsType) {
    if(ctx === null) return;
    
    if(!this.time) {
      this.time = t;
    }

    const now = t - this.time;
    if(now > this.fpsTime) {
      this.time = t;
      this.curFrame += 1;
      if(this.curFrame === this.totalFrame) {
        this.curFrame = 0;
      }
    }

    this.animate(ctx, dots);
  }

  animate(ctx: CanvasRenderingContext2D | null, dots: DotsType) {
    if(ctx === null) return;

    this.x -= this.speed;
    const closest = this.getY(this.x, dots);
    this.y = closest.y || 30;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(closest.rotation);
    ctx.drawImage(
      this.img, 
      this.imgWidth * this.curFrame, 
      0, 
      this.imgWidth, 
      this.imgHeight, 
      -this.sheepWidthHalf, 
      -this.sheepHeight + 20, 
      this.sheepWidth, 
      this.sheepHeight
    );
    ctx.restore();
  }

  getY(x: number, dots: DotsType) {
    let result = { y: 0, rotation: 0 }

    dots.forEach(dot => {
      if(x >= dot.x1 && x <= dot.x3) {
        result = this.getY2(x, dot);
        return;
      }
    })
    
    return result;
  }

  getY2(x: number, dot: DotType) {
    const total = 200;
    let pt = this.getPointOnQuad(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, 0);
    let prevX = pt.x;

    for(let i=1; i < total; i++) {
      const t = i / total;
      pt = this.getPointOnQuad(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, t);

      if(x >= prevX && x <= pt.x) {
        return pt;
      }
      prevX = pt.x;
    }
    // console.log(pt)
    return pt;
  }

  getQuadValue(p0: number, p1: number, p2: number, t: number) {
    // https://en.wikipedia.org/wiki/B%C3%A9zier_curve
    return (1-t) * (1-t) * p0 + 2 * (1-t) * t * p1 + t * t * p2;
  }

  getPointOnQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, t: number) {
    const tx = this.quadTangent(x1, x2, x3, t);
    const ty = this.quadTangent(y1, y2, y3, t);
    const rotation = -Math.atan2(tx, ty) + (90 * Math.PI / 180);
    
    return {
      x: this.getQuadValue(x1, x2, x3, t),
      y: this.getQuadValue(y1, y2, y3, t),
      rotation: rotation,
    }
  }

  quadTangent(a: number, b: number, c: number, t: number) {
    return 2 * (1-t) * (b-a) + 2 * (c-b) * t;
  }
}