import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

export const ClipPathCircle = memo(() => {
  return (
    <Section>
      <Container>
        <Text>Jacob's Playground!</Text>
      </Container>
      <Container>
        <Text2>Jacob's Playground!</Text2>
      </Container>
    </Section>
  );
});

const animation = keyframes`
  0% {
    transform: translateX(48%);
  }
  50% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(48%);
  }
`;

const commonTextStyle = css`
  position: absolute;
  left: 0;
  font-size: 10em;
  white-space: nowrap;
  line-height: 100vh;
  cursor: default;
  animation: ${animation} 10s linear infinite;
  margin: 0;
`;

const Text = styled.h2`
  ${commonTextStyle};
  color: white;
`;

const Text2 = styled.h2`
  ${commonTextStyle};

  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: white;
  color: black;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:nth-child(2) {
    background: yellow;
    clip-path: circle(200px at center);
  }
`;
