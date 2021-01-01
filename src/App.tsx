import React, { memo } from 'react';
import styled from 'styled-components';

function App() {
  return <LayoutContainer></LayoutContainer>;
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
