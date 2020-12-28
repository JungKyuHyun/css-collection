import React, { memo } from 'react';
import styled from 'styled-components';
import { GlowingText, ClimbEffects } from './components';

function App() {
  return (
    <LayoutContainer>
      {/* <GlowingText /> */}
      <ClimbEffects />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  overflow: hidden;
`;

export default memo(App);
