import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

export const Skeleton = memo(() => {
  return (
    <Card>
      <Header>
        <Img />
        <Details>
          <Line />
          <Line />
        </Details>
      </Header>
    </Card>
  );
});

const animation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

export const SKELETON_ANIMATION = css`
  animation: ${animation} 1.5s ease-in-out 0.5s infinite;
`;

const Card = styled.div`
  max-width: 320px;
  background: whitesmoke;
  padding: 28px;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.div`
  height: 64px;
  width: 64px;
  background: lightgray;
  border-radius: 50%;

  ${SKELETON_ANIMATION};
`;

const Details = styled.div`
  margin-left: 12px;
`;

const Line = styled.div`
  width: 100%;
  margin: 8px 0;
  background: lightgray;
  border-radius: 8px;

  &:nth-child(1) {
    width: 80px;
    height: 16px;
  }

  &:nth-child(2) {
    width: 160px;
    height: 12px;
  }

  ${SKELETON_ANIMATION};
`;
