import { Wave } from './Wave';

export class WaveGroup {
  totalWaves = 3;
  totalPoints = 6;

  color = ['rgba(255, 0, 0, 0.4)', 'rgba(255, 255, 0, 0.4)', 'rgba(0, 255, 255, 0.4)'];

  waves: Array<Wave> = [];

  constructor() {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth: number, stageHeight: number) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx === null) return;

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
