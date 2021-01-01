import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const WavySection = memo(() => {
  return (
    <Section>
      <Wave>
        <Curve />
        <Curve />
        <Curve />
      </Wave>
      <Contents>
        <Title>Jacob's Wavy</Title>
      </Contents>
    </Section>
  );
});

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wave = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: blue;
`;

const animate = keyframes`
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
`;

const Curve = styled.span`
  position: absolute;
  width: 325vh;
  height: 325vh;
  left: 50%;
  background: black;
  transform: translate(-50%, -75%);

  &:nth-child(1) {
    animation: ${animate} 5s linear infinite;
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
  }

  &:nth-child(2) {
    animation: ${animate} 10s linear infinite;
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
  }

  &:nth-child(3) {
    animation: ${animate} 16s linear infinite;
    border-radius: 42.5%;
    background: rgba(20, 20, 20, 0.5);
  }
`;

const Contents = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  font-size: 4em;
`;

const Title = styled.h2``;
