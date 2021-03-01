import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useScreenSize from '../../../hooks/useScreenSize';
import { DomUtils } from '../../../utils';
import { Polygon } from './Polygon';

export const RotatingPolygon = memo(() => {
  const { stageWidth, stageHeight } = useScreenSize();
  const ref = useRef<HTMLCanvasElement>(null);
  const [pointer, setPointer] = useState({ isDown: false, moveX: 0, offsetX: 0 });

  const polygon = useMemo(() => {
    return new Polygon(stageWidth / 2, stageHeight + stageHeight / 4, stageHeight / 1.5, 15);
  }, [stageWidth, stageHeight]);

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    setPointer((prev) => ({ ...prev, isDown: true, moveX: 0, offsetX: event.clientX }));
  }, []);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLCanvasElement>) => {
      if (pointer.isDown) {
        setPointer((prev) => ({ ...prev, moveX: event.clientX - prev.offsetX, offsetX: event.clientX }));
      }
    },
    [pointer]
  );

  const handlePointerUp = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {}, []);

  const resize = useCallback(() => {
    if (ref.current === null) return;

    const ctx = ref.current.getContext('2d');
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    ref.current.width = stageWidth * pixelRatio;
    ref.current.height = stageHeight * pixelRatio;

    ctx?.scale(pixelRatio, pixelRatio);
  }, [stageWidth, stageHeight]);

  const animate = useCallback(() => {
    if (ref.current === null) return;

    const ctx = ref.current.getContext('2d');
    ctx?.clearRect(0, 0, stageWidth, stageHeight);

    setPointer((prev) => ({ ...prev, moveX: (prev.moveX *= 0.92) }));

    polygon.animate(ctx, pointer.moveX);
  }, [stageWidth, stageHeight, polygon, pointer.moveX]);

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

  return (
    <canvas
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    />
  );
});
