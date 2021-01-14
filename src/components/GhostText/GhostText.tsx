import React, { memo } from 'react';
import styled from 'styled-components';

interface GhostTextProps {
  className?: string;
  text?: string;
}

export const GhostText = memo<GhostTextProps>(({ className, text = "jacob's playground" }) => {
  return (
    <Text className={className}>
      {text.split('').map((t, i) => React.createElement(GhostEffects, { key: `ghost-${i}`, index: i }, t))}
    </Text>
  );
});

const GhostEffects = styled.span<{ index: number }>`
  transition: 1s;

  &:nth-child(${(props) => props.index + 1}) {
    transition-delay: ${(props) => props.index * 0.1}s;
  }
`;

const Text = styled.h2`
  text-transform: uppercase;
  font-size: 5em;
  color: white;
  display: flex;
  text-align: center;
  white-space: pre;

  &:hover {
    ${GhostEffects} {
      filter: blur(20px);
      opacity: 0;
      transform: scale(2);
    }
  }
`;
