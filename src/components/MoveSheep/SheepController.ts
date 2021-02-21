import { DotsType } from './Hill';
import { Sheep } from './Sheep'
import SheepImage from '../../assets/sheep.png'

export class SheepController {
  stageWidth = 0;
  stageHeight = 0;
  img = new Image();
  items: Array<Sheep> = [];
  cur = 0;
  isLoaded = false;

  constructor() {
    this.img.onload = () => {
      this.loaded();
    }  
    this.img.src = SheepImage;
  }

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  loaded() {
    this.isLoaded = true;
    this.addSheep();
  }

  addSheep() {
    this.items.push(new Sheep(this.img, this.stageWidth));
  }

  draw(ctx: CanvasRenderingContext2D | null, t: number, dots: DotsType) {
    if(!this.isLoaded) return;

    this.cur += 1;
    if(this.cur > 200) {
      this.cur = 0;
      this.addSheep();
    }
    
    for(let i = this.items.length -1; i >= 0; i--) {
      const item = this.items[i];
      if(item.x < -item.width) {
        this.items.splice(i, 1);
      } else {
        item.draw(ctx, t, dots)
      }
    }
  }

}