import React, { memo, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

export const AnimatedEyesFollowMouseCursor = memo(() => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const eyeball = useCallback((event: MouseEvent) => {
    if (
      leftEyeRef === null ||
      leftEyeRef.current === null ||
      rightEyeRef === null ||
      rightEyeRef.current === null
    ) {
      return;
    }
    const leftX =
      leftEyeRef.current.getBoundingClientRect().left +
      leftEyeRef.current.clientWidth / 2;
    const leftY =
      leftEyeRef.current.getBoundingClientRect().top +
      leftEyeRef.current.clientHeight / 2;
    const rightX =
      rightEyeRef.current.getBoundingClientRect().left +
      rightEyeRef.current.clientWidth / 2;
    const rightY =
      rightEyeRef.current.getBoundingClientRect().top +
      rightEyeRef.current.clientHeight / 2;

    const radianLeft = Math.atan2(event.pageX - leftX, event.pageY - leftY);
    const radianRight = Math.atan2(event.pageX - rightX, event.pageY - rightY);

    const rotationLeft = radianLeft * (180 / Math.PI) * -1 + 270;
    const rotationRight = radianRight * (180 / Math.PI) * -1 + 270;

    leftEyeRef.current.style.transform = `rotate(${rotationLeft}deg)`;
    rightEyeRef.current.style.transform = `rotate(${rotationRight}deg)`;
  }, []);

  useEffect(() => {
    document.body.addEventListener('mousemove', throttle(eyeball, 50));
    return () =>
      document.body.removeEventListener('mousemove', throttle(eyeball, 50));
  }, [eyeball]);

  return (
    <Box>
      <Eye ref={leftEyeRef} />
      <Eye ref={rightEyeRef} />
    </Box>
  );
});

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Eye = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: block;
  background: white;
  margin: 0 20px;
  border-radius: 50%;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2), inset 0 0 15px black,
    inset 0 0 25px black;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 35px;
    transform: translate(-50%, -50%);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: white;
    border: 14px solid black;
    box-sizing: border-box;
  }
`;
