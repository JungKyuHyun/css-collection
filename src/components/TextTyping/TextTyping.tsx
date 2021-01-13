import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const TextTyping = memo(() => {
  const text = 'jacob css text typing...';

  return (
    <TypingAnimation data-text={text} textLength={text.length}>
      {text}
    </TypingAnimation>
  );
});

const animation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

const TypingAnimation = styled.h1<{ textLength: number }>`
  margin: 0;
  position: absolute;
  top: 40%;
  text-transform: uppercase;
  font-family: consolas;
  letter-spacing: 5px;
  color: transparent;
  white-space: nowrap;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    overflow: hidden;
    border-right: 1px solid white;
    animation: ${animation} 8s steps(${(props) => props.textLength}) infinite;
  }
`;
