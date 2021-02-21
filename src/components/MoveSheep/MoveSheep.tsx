import React, { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DotsType, Hill } from './Hill';
import { SheepController } from './SheepController';
import { Sun } from './Sun';

export const MoveSheep = memo(() => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current === null) return;
    const ctx = ref.current.getContext('2d');
    let stageWidth: number;
    let stageHeight: number;

    const hills = [new Hill('#fd6bea', 0.2, 12), new Hill('#ff59c2', 0.5, 8), new Hill('#ff4674', 1.4, 6)];
    const sheepController = new SheepController();
    const sun = new Sun();

    const resize = () => {
      if (ref.current === null) return;
      stageWidth = document.body.clientWidth;
      stageHeight = document.body.clientHeight;

      ref.current.width = stageWidth * 2;
      ref.current.height = stageHeight * 2;
      ctx?.scale(2, 2);

      sun.resize(stageWidth, stageHeight);

      hills.forEach((hill) => hill.resize(stageWidth, stageHeight));
      sheepController.resize(stageWidth, stageHeight);
    };

    const animate = (t: number) => {
      requestAnimationFrame(animate);

      ctx?.clearRect(0, 0, stageWidth, stageHeight);

      sun.draw(ctx, t);

      let dots: DotsType | undefined;
      hills.forEach((hill) => {
        dots = hill.draw(ctx);
      });

      if (dots !== undefined) {
        sheepController.draw(ctx, t, dots);
      }
    };

    window.addEventListener('resize', resize, false);
    resize();
    requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', resize, false);
    };
  }, []);

  return <Canvas ref={ref} />;
});

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
