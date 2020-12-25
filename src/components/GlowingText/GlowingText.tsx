import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const GlowingText = memo(() => {
  return (
    <H1>
      <GlowStyled>j</GlowStyled>
      <GlowStyled>a</GlowStyled>
      <GlowStyled>c</GlowStyled>
      <GlowStyled>o</GlowStyled>
      <GlowStyled>b</GlowStyled>
    </H1>
  );
});

const H1 = styled.h1`
  font-size: 12em;
`;

const animate = keyframes`
    0%, 100% 
    {
        color: white;
        filter: blur(2px);
        text-shadow: 0 0 10px Aqua;
        text-shadow: 0 0 20px Aqua;
        text-shadow: 0 0 40px Aqua;
        text-shadow: 0 0 80px Aqua;
        text-shadow: 0 0 120px Aqua;
        text-shadow: 0 0 200px Aqua;
        text-shadow: 0 0 300px Aqua;
        text-shadow: 0 0 400px Aqua;
    }
    5%, 95% {
        color: #111;
        filter: blur(0px);
        text-shadow: none;
    }
`;

const GlowStyled = styled.span`
  text-transform: uppercase;
  display: table-cell;
  margin: 0;
  padding: 0;
  animation: ${animate} 2s linear infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.25s;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
  }
  &:nth-child(4) {
    animation-delay: 0.75s;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }
`;
