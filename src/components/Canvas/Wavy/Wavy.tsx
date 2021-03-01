import React, { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import useScreenSize from '../../../hooks/useScreenSize';
import { DomUtils } from '../../../utils';
import { WaveGroup } from './WaveGroup';

export const Wavy = memo(() => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { stageWidth, stageHeight } = useScreenSize();

  const waveGroup = useMemo(() => {
    return new WaveGroup();
  }, []);

  const resize = useCallback(() => {
    if (ref.current === null) return;

    const ctx = ref.current.getContext('2d');
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    ref.current.width = stageWidth * pixelRatio;
    ref.current.height = stageHeight * pixelRatio;
    ctx?.scale(pixelRatio, pixelRatio);

    waveGroup.resize(stageWidth, stageHeight);
  }, [stageWidth, stageHeight, waveGroup]);

  const animate = useCallback(
    (t: number) => {
      if (ref.current === null) return;

      const ctx = ref.current.getContext('2d');
      ctx?.clearRect(0, 0, stageWidth, stageHeight);

      waveGroup.draw(ctx);

      requestAnimationFrame(animate);
    },
    [stageWidth, stageHeight, waveGroup]
  );

  useEffect(() => {
    if (!DomUtils.usableWindow()) return;
    window.addEventListener('resize', resize, false);
    resize();

    return () => window.removeEventListener('resize', resize, false);
  }, [resize]);

  useEffect(() => {
    if (!DomUtils.usableWindow()) return;

    const num = requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(num);
  }, [animate]);

  return <canvas ref={ref} />;
});
