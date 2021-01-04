import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const WaveBorderCard = memo(() => {
  return (
    <Card>
      <Border />
      <Border />
      <Border />
      <ContentContainer>
        <Title>Jacob's Card</Title>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          odit porro ex voluptatum dolorum deserunt eligendi nostrum quisquam
          tempora earum nam alias error, aliquam nisi, odio autem? Neque,
          deleniti libero!
        </P>
      </ContentContainer>
    </Card>
  );
});

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animate2 = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Border = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid white;
  border-radius: 36% 52% 56% 40% / 40% 56% 60% 54%;
  transition: 0.5s;

  &:nth-child(1) {
    animation: ${animate} 6s linear infinite;
  }

  &:nth-child(2) {
    animation: ${animate2} 4s linear infinite;
  }

  &:nth-child(3) {
    animation: ${animate} 10s linear infinite;
  }
`;

const Title = styled.h2``;

const P = styled.p``;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    ${Border} {
      border: none;
      background: cyan;
    }
    ${Title}, ${P} {
      text-shadow: 1px 1px black, -1px -1px 0 black, 1px -1px 0 black,
        -1px 1px 0 black;
    }
  }
`;

const ContentContainer = styled.div`
  position: relative;
  padding: 40px 60px;
  color: white;
  text-align: center;
  z-index: 1000;
`;
