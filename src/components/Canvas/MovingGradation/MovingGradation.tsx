import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import useScreenSize from '../../../hooks/useScreenSize';
import { DomUtils } from '../../../utils';
import { COLORS, MAX_RADIUS, MIN_RADIUS, TOTAL_PARTICLES } from './constants';
import { GlowParticle } from './GlowParticle';

export const MovingGradation = memo(() => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { stageWidth, stageHeight } = useScreenSize();
  const [particles, setParticles] = useState<ReadonlyArray<GlowParticle>>([]);

  const createParticles = useCallback(() => {
    let curColor = 0;
    setParticles([]);

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const item = new GlowParticle(
        Math.random() * stageWidth,
        Math.random() * stageHeight,
        Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,
        COLORS[curColor]
      );

      if (++curColor >= COLORS.length) {
        curColor = 0;
      }

      setParticles((prev) => [...prev, item]);
    }
  }, [stageWidth, stageHeight]);

  const resize = useCallback(() => {
    if (ref.current === null) return;

    const ctx = ref.current.getContext('2d');

    if (ctx === null) return;

    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    ref.current.width = stageWidth * pixelRatio;
    ref.current.height = stageHeight * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing
    ctx.globalCompositeOperation = 'saturation';

    createParticles();
  }, [stageWidth, stageHeight, createParticles]);

  const animate = useCallback(
    (t: number) => {
      window.requestAnimationFrame(animate);
      if (ref.current === null) return;
      const ctx = ref.current.getContext('2d');

      ctx?.clearRect(0, 0, stageWidth, stageHeight);

      particles.forEach((p) => p.animate(ctx, stageWidth, stageHeight));
    },
    [stageWidth, stageHeight, particles]
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
