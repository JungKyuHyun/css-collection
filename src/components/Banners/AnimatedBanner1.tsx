import React, { memo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

export const AnimatedBanner1 = memo(() => {
  const bubbles = useCallback(() => {
    const count = 200;
    let i = 0;
    let arr = [];

    while (i < count) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);

      const size = Math.random() * 10;
      const bubble = React.createElement(Snow, {
        key: i,
        style: {
          left: x + 'px',
          top: y + 'px',
          width: 1 + size + 'px',
          height: 1 + size + 'px',
          position: 'absolute',
          borderRadius: '50%',
          animationDuration: 5 + size + 's',
          animationDelay: -size + 's',
        },
      });

      arr.push(bubble);
      i++;
    }
    return arr;
  }, []);

  return (
    <>
      <SnowContainer>
        {bubbles()}
        <Box>
          <Circle>
            <H2>
              Jacob
              <br />
              playground
            </H2>
          </Circle>
        </Box>
      </SnowContainer>
    </>
  );
});

const Box = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, black, transparent);
    opacity: 0.1;
    transform: rotate(45deg);
    transform-origin: left;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, white, whitesmoke);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: linear-gradient(315deg, white, whitesmoke);
    border-radius: 50%;
  }
`;

const H2 = styled.h2`
  text-transform: uppercase;
  position: absolute;
  z-index: 2;
  font-size: 3em;
  text-align: center;
  color: red;
`;

const animate = keyframes`
  0%
  {
    transform: translateY(0);
    opacity: 0;
  }

  10%
  {
    opacity: 1;
  }

  90%
  {
    opacity: 1;
  }

  100%
  {
    transform: translateY(-2000%);
    opacity: 0;
  }
`;

const Snow = styled.i`
  background: red;
  animation: ${animate} linear infinite;
`;

const SnowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;

  ${Snow}:nth-child(even) {
    background: transparent;
    border: 1px solid red;
  }
`;
