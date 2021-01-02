import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import throttle from 'lodash/throttle';

export const RippleEffectsButton = memo(() => {
  const ref = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<React.ReactElement[]>([]);

  const handleMouseEnter = useMemo(
    () =>
      throttle((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        if (ref === null || ref.current === null) {
          return;
        }
        if (event.currentTarget === null) {
          return;
        }
        const x = event.clientX - event.currentTarget.offsetLeft;
        const y = event.clientY - event.currentTarget.offsetTop;
        const Ripples = React.createElement(Ripple, {
          style: { top: `${y}px`, left: `${x}px` },
        });
        setRipples((s) => [...s, Ripples]);
        setTimeout(() => {
          setRipples((s) => s.filter((r) => r !== Ripples));
        }, 1000);
      }, 500),
    [],
  );

  const handleClick = useCallback(() => {
    alert('Hello, Jacob!');
  }, []);

  return (
    <Button ref={ref} onMouseEnter={handleMouseEnter} onClick={handleClick}>
      button
      {ripples}
    </Button>
  );
});

const animate = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 0.2;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0.2;
  }
`;

const Ripple = styled.span`
  position: absolute;
  background: white;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: ${animate} 0.8s linear infinite;
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 12px 36px;
  margin: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-transform: uppercase;
  outline-style: none;
  border: 1px solid white;
  overflow: hidden;
  cursor: pointer;
`;
