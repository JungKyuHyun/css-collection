import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export interface GlowingTextProps {
  label?: string;
}

export const GlowingText = memo<GlowingTextProps>(({ label }) => {
  return (
    <H1>
      {label
        ?.split('')
        .map((s, i) =>
          React.createElement(GlowStyled, { key: `s-${i}`, index: i }, s),
        )}
    </H1>
  );
});

const H1 = styled.h1`
  font-size: 12em;
  text-transform: uppercase;
`;

const animate = keyframes`
    0%, 100% 
    {
        color: white;
        filter: blur(1px);
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

const GlowStyled = styled.span<{ index: number }>`
  text-transform: uppercase;
  display: table-cell;
  margin: 0;
  padding: 0;
  animation: ${animate} 2s linear infinite;
  animation-delay: ${(props) => `${props.index * 0.25}s`};
`;
