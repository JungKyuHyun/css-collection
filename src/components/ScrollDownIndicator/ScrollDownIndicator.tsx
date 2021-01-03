import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const ScrollDownIndicator = memo(() => {
  return (
    <Section>
      <Contents>
        <Title>Scroll Down Indicator</Title>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          dignissimos deleniti modi animi tempore fugiat, ullam iure! Temporibus
          dolorem, asperiores ipsum voluptate odio nam. Accusamus earum iste
          aperiam reprehenderit corrupti alias minus facilis quaerat
          consequuntur! Sed quas voluptates cupiditate fuga sit voluptatum nulla
          maiores magnam incidunt laboriosam consequuntur aperiam illo illum,
          eius quos corporis fugiat commodi facilis assumenda earum odio
          quisquam, beatae, itaque numquam! Esse quia aut deserunt aperiam ullam
          neque et magnam ad sunt, dolores molestias perspiciatis doloribus
          vitae porro, numquam provident perferendis consequuntur beatae
          exercitationem ex itaque fugit voluptatem architecto similique?
          Voluptate id sapiente vitae quidem animi necessitatibus, mollitia
          error, quos dignissimos minima aperiam quae ipsam adipisci ab corrupti
          autem consequatur iusto, provident doloremque asperiores reprehenderit
          consectetur totam ipsa. Adipisci incidunt atque reiciendis minima
          quasi neque numquam alias nesciunt natus aut praesentium rerum ullam
          exercitationem facere repellat iure quaerat dolore cumque, sed maxime
          sit aliquam assumenda voluptate.
        </P>
      </Contents>
      <ScrollDown>
        <Indicator />
        <Indicator />
        <Indicator />
      </ScrollDown>
    </Section>
  );
});

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Contents = styled.div`
  max-width: 800px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 3.5em;
`;

const P = styled.p`
  color: white;
  font-size: 1.2em;
  opacity: 0.5;
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-80px) translateX(-50%) rotate(45deg);
`;

const animate = keyframes`
  0% {
    top: -5px;
    left: -5px;
    opacity: 0;
  } 
  25% {
    top: 0;
    left: 0;
    opacity: 1;
  }
  50%, 100% {
    top: 5px;
    left: 5px;
    opacity: 0;
  }
`;

const Indicator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  animation: ${animate} 1.5s linear infinite;
  opacity: 0;

  &:nth-child(1) {
    transform: translate(-15px, -15px);
    animation-delay: -0.4s;
  }
  &:nth-child(2) {
    transform: translate(0, 0);
    animation-delay: -0.2s;
  }
  &:nth-child(3) {
    transform: translate(15px, 15px);
    animation-delay: 0s;
  }
`;
