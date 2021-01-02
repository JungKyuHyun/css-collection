import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export interface MovingTextProps {
  label?: string;
}

export const MovingText = memo<MovingTextProps>(({ label }) => {
  return (
    <Container>
      {label
        ?.split('')
        .map((s, i) =>
          React.createElement(MoveText, { key: `s-${i}`, delay: i }, s),
        )}
    </Container>
  );
});

const Container = styled.h1`
  position: relative;
`;

const animate = keyframes`
    0%, 40%, 100% 
    {
        transform: translateY(0);
    }
    20% {
      transform: translateY(-50px);
    }
`;

const MoveText = styled.span<{ delay: number }>`
  position: relative;
  font-size: 2em;
  color: white;
  text-transform: uppercase;
  display: inline-block;

  animation: ${animate} 2s ease-in-out infinite;
  animation-delay: ${(props) => `${props.delay * 0.1}s`};
`;
