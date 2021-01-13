import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const GradientLoader = memo(() => {
  return (
    <Loader>
      <Gradient />
      <Gradient />
      <Gradient />
      <Gradient />
      <Gradient />
    </Loader>
  );
});

const Loader = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1), inset -10px -10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 10px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 25px;
    left: 25px;
    bottom: 25px;
    right: 25px;
    background: white;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: inset -10px -10px 15px rgba(255, 255, 255, 0.5), inset 10px 10px 10px rgba(0, 0, 0, 0.1);
  }
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Gradient = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 50%;
  background: linear-gradient(cyan, lime, yellow);
  z-index: -1;
  filter: blur(20px);
  animation: ${animation} 0.6s linear infinite;
`;
