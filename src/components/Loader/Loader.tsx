import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const Loader = memo(() => {
  return <GradientLoader />;
});

const animate = keyframes`
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
`;

const GradientLoader = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 40%, cyan);
  animation: ${animate} 2s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    bottom: 6px;
    right: 6px;
    background: black;
    border-radius: 50%;
    z-index: 1000;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(45deg, transparent, transparent 40%, cyan);
    border-radius: 50%;
    z-index: 1;
    filter: blur(30px);
  }
`;
