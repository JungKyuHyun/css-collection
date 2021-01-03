import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const ThreeDimensionBackground = memo(() => {
  return (
    <Background>
      <Rotate>
        <Sphere>
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
        </Sphere>
        <Sphere>
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
        </Sphere>
        <Sphere>
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
        </Sphere>
        <Sphere>
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
          <SphereItem />
        </Sphere>
      </Rotate>
    </Background>
  );
});

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const animation = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const Rotate = styled.div`
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  width: 400px;
  height: 400px;
  transform-style: preserve-3d;
  animation: ${animation} 20s linear infinite;
  zoom: 4;
`;

const Sphere = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  &:nth-child(2) {
    transform: rotate(90deg);
  }
  &:nth-child(3) {
    transform: rotate(45deg);
  }
  &:nth-child(4) {
    transform: rotate(-45deg);
  }
`;

const SphereItem = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  background: radial-gradient(lightgray, white);
  border-radius: 50%;

  &:nth-child(1) {
    transform: rotateY(0deg);
  }
  &:nth-child(2) {
    transform: rotateY(30deg);
  }
  &:nth-child(3) {
    transform: rotateY(60deg);
  }
  &:nth-child(4) {
    transform: rotateY(90deg);
  }
  &:nth-child(5) {
    transform: rotateY(120deg);
  }
  &:nth-child(6) {
    transform: rotateY(150deg);
  }
`;
