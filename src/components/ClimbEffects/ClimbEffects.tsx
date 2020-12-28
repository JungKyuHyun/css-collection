import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const ClimbEffects = memo(() => {
  return (
    <Container>
      <Box>
        <Cube></Cube>
      </Box>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  width: 100%;
  transform: rotate(-35deg);
`;

const animateSurface = keyframes`
  0%
  {
    transform: translateX(0px);
  }
  100%
  {
    transform: translateX(-200px);
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  left: -20px;
  justify-content: center;
  align-self: center;
  width: calc(100% + 200px);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  animation: ${animateSurface} 1.5s ease-in-out infinite;
`;

const animate = keyframes`
  0%
  {
    transform: rotate(0deg)
  }
  60%
  {
    transform: rotate(90deg)
  }
  65%
  {
    transform: rotate(85deg)
  }
  70%
  {
    transform: rotate(90deg)
  }
  75%
  {
    transform: rotate(87.5deg)
  }
  80%, 100%
  {
    transform: rotate(90deg)
  }
`;

const Cube = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: cyan;
  box-shadow: 0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan, 0 0 100px cyan,
    0 0 200px cyan, 0 0 300px cyan;
  transform-origin: bottom right;
  animation: ${animate} 1.5s ease-in-out infinite;
`;
