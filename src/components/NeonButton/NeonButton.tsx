import React, { memo, ReactText } from 'react';
import styled, { keyframes } from 'styled-components';

export interface NeonButtonProps {
  label?: ReactText;
}

export const NeonButton = memo<NeonButtonProps>(({ label }) => {
  return (
    <NeonButtonContainer>
      {label}
      <Border />
      <Border />
      <Border />
      <Border />
    </NeonButtonContainer>
  );
});

const NeonButtonContainer = styled.a`
  position: relative;
  display: inline-block;
  color: cyan;
  padding: 20px 24px;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 0.5px;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);

  &:hover {
    background-color: cyan;
    color: black;
    box-shadow: 0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan, 0 0 100px cyan;
  }
`;

const topAnimate = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const rightAnimate = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

const bottomAnimate = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

const leftAnimate = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;

const Border = styled.span`
  position: absolute;
  display: block;

  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, cyan);
    animation: ${topAnimate} 1s linear infinite;
  }

  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, cyan);
    animation: ${rightAnimate} 1s linear infinite;
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    right: -100%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, cyan);
    animation: ${bottomAnimate} 1s linear infinite;
    animation-delay: 0.5s;
  }

  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, cyan);
    animation: ${leftAnimate} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;
