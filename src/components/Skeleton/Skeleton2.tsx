import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const Skeleton2 = memo(() => {
  return <Skeleton />;
});

const animate = keyframes`
  0% {
    transform: translateX(-80px);
  }
  100% {
    transform: translateX(160px);
  }
`;

const Skeleton = styled.span`
  position: relative;
  height: 48px;
  width: 160px;
  background-color: rgb(211, 211, 211);
  overflow: hidden;
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    transform: translateX(-80px);
    height: 48px;
    width: 100px;
    animation: ${animate} 1s infinite;
    z-index: 4;
    background-image: linear-gradient(
      to left,
      rgba(251, 251, 251, 0.05),
      rgba(251, 251, 251, 0.3),
      rgba(251, 251, 251, 0.6),
      rgba(251, 251, 251, 0.3),
      rgba(251, 251, 251, 0.05)
    );
  }
`;
