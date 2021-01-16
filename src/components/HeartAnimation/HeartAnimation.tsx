import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const HeartAnimation = memo(() => {
  return <Heart />;
});

const animtaion = keyframes`
  0% {
    transform: rotate(45deg) scale(1);
  }
  20% {
    transform: rotate(45deg) scale(0.8);
  }
  40% {
    transform: rotate(45deg) scale(1.2);
  }
  60% {
    transform: rotate(45deg) scale(1);
  }
  80% {
    transform: rotate(45deg) scale(1.3);
  }
  100% {
    transform: rotate(45deg) scale(1);
  }
`;

const Heart = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: red;
  transform: rotate(45deg);
  border-bottom-right-radius: 20px;
  box-shadow: 10px 10px 80px red;
  animation: ${animtaion} 1.5s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: -99px;
    width: 200px;
    height: 100px;
    background: red;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
  }

  &::after {
    content: '';
    position: absolute;
    left: -99px;
    width: 100px;
    height: 200px;
    background: red;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }
`;
