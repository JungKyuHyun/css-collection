import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const GlowingBackground = memo(() => {
  return (
    <Container>
      {Array(6)
        .fill('')
        .map((_, i) => (
          <GlowingPointer key={i} delay={i} />
        ))}
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animationReverse = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const GlowingPointer = styled.span<{ delay: number }>`
  position: absolute;
  top: calc(80px * ${(props) => props.delay});
  left: calc(80px * ${(props) => props.delay});
  right: calc(80px * ${(props) => props.delay});
  bottom: calc(80px * ${(props) => props.delay});

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -8px;
    width: 15px;
    height: 15px;
    background: cyan;
    border-radius: 50%;
  }

  &:nth-child(3n + 1)::before {
    background: lime;
    box-shadow: 0 0 5px lime, 0 0 20px lime, 0 0 40px lime, 0 0 60px lime, 0 0 80px lime;
  }
  &:nth-child(3n + 2)::before {
    background: cyan;
    box-shadow: 0 0 5px cyan, 0 0 20px cyan, 0 0 40px cyan, 0 0 60px cyan, 0 0 80px cyan;
  }
  &:nth-child(3n + 3)::before {
    background: deeppink;
    box-shadow: 0 0 5px deeppink, 0 0 20px deeppink, 0 0 40px deeppink, 0 0 60px deeppink, 0 0 80px deeppink;
  }

  &:nth-child(1) {
    animation: ${animation} 10s alternate infinite;
  }
  &:nth-child(2) {
    animation: ${animationReverse} 3s alternate infinite;
  }
  &:nth-child(3) {
    animation: ${animation} 8s alternate infinite;
  }
  &:nth-child(4) {
    animation: ${animationReverse} 7s alternate infinite;
  }
  &:nth-child(5) {
    animation: ${animation} 5s alternate infinite;
  }
  &:nth-child(6) {
    animation: ${animationReverse} 3s alternate infinite;
  }
`;
