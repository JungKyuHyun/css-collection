import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const NumberCounter = memo(() => {
  return (
    <Container>
      <NumberBox></NumberBox>
      <NumberBox></NumberBox>
      <NumberBox></NumberBox>
    </Container>
  );
});

const Container = styled.div`
  color: white;
  border: 5px solid gray;
  padding: 0 28px;
  border-radius: 8px;
  margin: 0 10px;
`;

const animation = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: -10em;
  }
`;

const NumberBox = styled.span`
  display: inline-block;
  overflow: hidden;
  height: 1em;
  line-height: 1em;
  font-weight: bold;
  font-size: 16em;

  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);

  &::after {
    position: relative;
    white-space: pre;
    content: '0\\A 1\\A 2\\A 3\\A 4\\A 5\\A 6\\A 7\\A 8\\A 9\\A';
  }

  &:nth-child(3)::after {
    animation: ${animation} 1s steps(10) infinite;
  }

  &:nth-child(2)::after {
    animation: ${animation} 10s steps(10) infinite;
  }

  &:nth-child(1)::after {
    animation: ${animation} 100s steps(10) infinite;
  }
`;
