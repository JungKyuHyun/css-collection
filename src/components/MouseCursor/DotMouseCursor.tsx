import React, { memo, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

export const DotMouseCursor = memo(() => {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMousemove = useCallback((event: MouseEvent) => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.left = event.clientX + 'px';
    ref.current.style.top = event.clientY + 'px';
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.addEventListener('mousemove', handleMousemove);
    return () => window.removeEventListener('mousemove', handleMousemove);
  }, [handleMousemove]);

  const handleMouseOver = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.cssText = `width: 100px; height: 100px; border: 2px dashed white`;
  }, []);

  const handleMouseOut = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.cssText = `width: 20px; height: 20px`;
  }, []);

  return (
    <>
      <Title onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Jacob's Playground!
      </Title>
      <Cursor ref={ref} />
    </>
  );
});

const Cursor = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  box-sizing: border-box;
  transition: 0.1s;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
`;

const Title = styled.h2`
  color: white;

  &:hover {
    color: red;
  }
`;
