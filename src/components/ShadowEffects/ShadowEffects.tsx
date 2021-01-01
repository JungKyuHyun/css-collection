import React, { memo } from 'react';
import styled from 'styled-components';

export const ShadowEffects = memo(() => {
  return <Circle />;
});

const Circle = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 40px rgba(0, 255, 255, 0.3),
    0 0 0 80px rgba(0, 255, 255, 0.3), 0 0 0 120px rgba(0, 255, 255, 0.3),
    0 0 0 160px rgba(0, 255, 255, 0.3), 0 0 0 200px rgba(0, 255, 255, 0.3),
    0 0 0 200px rgba(0, 255, 255, 0.1);
`;
