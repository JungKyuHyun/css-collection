import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

export const TwoRingLoader = memo(() => {
  return (
    <LoaderContainer>
      <OuterRing>
        <OuterRingCircle />
      </OuterRing>
      <InnerRing>
        <InnerRingCircle />
      </InnerRing>
    </LoaderContainer>
  );
});

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  box-sizing: border-box;
`;

const ringCommonStyle = css`
  position: absolute;
  border: 2px solid dimgray;
  background: black;
  border-radius: 50%;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const OuterRing = styled.div`
  ${ringCommonStyle};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-left: 2px solid lime;
  border-top: 2px solid lime;
  animation: ${animation} 3s linear infinite;
`;

const InnerRing = styled.div`
  ${ringCommonStyle};
  top: 30px;
  left: 30px;
  right: 30px;
  bottom: 30px;
  border-right: 2px solid deeppink;
  border-bottom: 2px solid deeppink;
  animation: ${animation} 3s reverse linear infinite;
`;

const circleCommonStyle = css`
  position: absolute;
  top: calc(50% - 1px);
  left: 50%;
  width: 50%;
  height: 2px;
  transform: rotate(-45deg);
  transform-origin: left;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    top: -4px;
    right: -6px;
  }
`;

const OuterRingCircle = styled.div`
  ${circleCommonStyle};

  &::before {
    background: lime;
    box-shadow: 0 0 5px lime, 0 0 20px lime, 0 0 40px lime, 0 0 60px lime, 0 0 80px lime, 0 0 100px lime;
  }
`;

const InnerRingCircle = styled.div`
  ${circleCommonStyle};

  &::before {
    background: deeppink;
    box-shadow: 0 0 5px deeppink, 0 0 20px deeppink, 0 0 40px deeppink, 0 0 60px deeppink, 0 0 80px deeppink,
      0 0 100px deeppink;
  }
`;
