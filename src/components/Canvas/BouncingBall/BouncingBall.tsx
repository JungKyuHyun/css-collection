import React, { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import useScreenSize from '../../../hooks/useScreenSize';
import { DomUtils } from '../../../utils';
import { Ball } from './Ball';

export const BouncingBall = memo(() => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { stageWidth, stageHeight } = useScreenSize();

  const ball = useMemo(() => {
    return new Ball(stageWidth, stageHeight, 60, 15);
  }, [stageWidth, stageHeight]);

  const resize = useCallback(() => {
    if (ref.current === null) return;

    const ctx = ref.current.getContext('2d');
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    ref.current.width = stageWidth * pixelRatio;
    ref.current.height = stageHeight * pixelRatio;

    ctx?.scale(pixelRatio, pixelRatio);
  }, [stageWidth, stageHeight]);

  const animate = useCallback(
    (t: number) => {
      if (ref.current === null) return;

      const ctx = ref.current.getContext('2d');
      ctx?.clearRect(0, 0, stageWidth, stageHeight);

      window.requestAnimationFrame(animate);

      ball.draw(ctx, stageWidth, stageHeight);
    },
    [stageWidth, stageHeight, ball]
  );

  useEffect(() => {
    if (!DomUtils.usableWindow()) return;

    window.addEventListener('resize', resize, false);
    resize();

    return () => window.removeEventListener('resize', resize, false);
  }, [resize]);

  useEffect(() => {
    if (!DomUtils.usableWindow()) return;

    const num = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(num);
  }, [animate]);

  return <canvas ref={ref} />;
});
