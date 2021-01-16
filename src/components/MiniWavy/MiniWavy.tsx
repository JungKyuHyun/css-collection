import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const MiniWavy = memo(() => {
  return <MiniCircle />;
});

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animation2 = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
const MiniCircle = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: aqua;
  border-radius: 50%;
  box-shadow: inset 0 0 50px black, inset 0 0 1px black, inset 0 0 2px black, inset 0 0 3px black, inset 0 0 4px black;

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -150%;
    left: -50%;
    width: 200%;
    height: 200%;
    border-radius: 40%;
    background: #111;
    opacity: 0.8;
    animation: ${animation} 12s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -150%;
    left: -50%;
    width: 200%;
    height: 200%;
    border-radius: 40%;
    background: #111;
    opacity: 0.9;
    animation: ${animation2} 5s linear infinite;
  }
`;
