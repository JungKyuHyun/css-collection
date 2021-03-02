import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useScreenSize from '../../../hooks/useScreenSize';
import { DomUtils } from '../../../utils';
import { Dialog } from './Dialog';
import { Point } from './Point';

const TOTAL_ITEM = 5;

export const MovingBox = memo(() => {
  const ref = useRef<HTMLCanvasElement>(null);
  const { stageWidth, stageHeight } = useScreenSize();
  const [curItem, setCurItem] = useState<Dialog | null>(null);

  const mousePos = useMemo(() => {
    return new Point();
  }, []);

  const items = useMemo(() => {
    const result = [];
    for (let i = 0; i < TOTAL_ITEM; i++) {
      result.push(new Dialog());
    }
    return result;
  }, []);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLCanvasElement>) => {
      mousePos.x = event.clientX;
      mousePos.y = event.clientY;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i].down(mousePos.clone());
        if (item) {
          setCurItem(item);
          const index = items.indexOf(item);
          items.push(items.splice(index, 1)[0]);

          break;
        }
      }
    },
    [mousePos, items]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLCanvasElement>) => {
      mousePos.x = event.clientX;
      mousePos.y = event.clientY;
      items.forEach((item) => item.move(mousePos.clone()));
    },
    [mousePos, items]
  );

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLCanvasElement>) => {
      setCurItem(null);

      items.forEach((item) => item.up());
    },
    [items]
  );

  const resize = useCallback(() => {
    if (ref.current === null) return;

    const ctx = ref.current.getContext('2d');
    if (ctx !== null) {
      const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      ref.current.width = stageWidth * pixelRatio;
      ref.current.height = stageHeight * pixelRatio;

      ctx.scale(pixelRatio, pixelRatio);

      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 3;
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(0,0,0,0.5)';

      ctx.lineWidth = 2;

      items.forEach((i) => i.resize(stageWidth, stageHeight));
    }
  }, [stageWidth, stageHeight, items]);

  const animate = useCallback(
    (t: number) => {
      if (ref.current === null) return;

      const ctx = ref.current.getContext('2d');
      if (ctx !== null) {
        ctx.clearRect(0, 0, stageWidth, stageHeight);

        items.forEach((i) => i.animate(ctx));

        if (curItem) {
          ctx.fillStyle = '#ff4338';
          ctx.strokeStyle = '#ff4338';

          ctx.beginPath();
          ctx.arc(mousePos.x, mousePos.y, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(curItem.centerPos.x, curItem.centerPos.y, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(mousePos.x, mousePos.y);
          ctx.lineTo(curItem.centerPos.x, curItem.centerPos.y);
          ctx.stroke();
        }
      }
      window.requestAnimationFrame(animate);
    },
    [stageWidth, stageHeight, items, curItem, mousePos]
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

  return (
    <canvas
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    />
  );
});
