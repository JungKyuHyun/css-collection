import React, { memo, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

export const RangeInput = memo(() => {
  const [value, setValue] = useState<string>('0');
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      if (ref !== null && ref.current !== null) {
        ref.current.style.width = event.target.value + '%';
      }
    },
    [],
  );
  return (
    <Container>
      <FillArea ref={ref} />
      <RangeValue>{value}</RangeValue>
      <Input
        type="range"
        value={value}
        onChange={handleChange}
        min="0"
        max="100"
      />
    </Container>
  );
});

const Container = styled.div`
  position: relative;
`;

const RangeValue = styled.h2`
  color: white;
  position: relative;
  display: block;
  font-size: 6em;
  z-index: 2;
  text-align: center;

  &::after {
    content: '%';
  }
`;

const FillArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: cyan;
  z-index: 1;
`;

const Input = styled.input`
  position: relative;
  width: calc(100vw - 60vw);
  height: 16px;
  -webkit-appearance: none;
  background: whitesmoke;
  outline: none;
  border-radius: 8px;
  box-shadow: 0 0 0 1px dimgray, inset 0 0 5px black;
  z-index: 2;
  overflow: hidden;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: aqua;
    border: 1px solid gray;
    z-index: 2;
    box-shadow: calc(-100vw + 57vw) 0 0 calc(100vw - 58vw) aquamarine;
  }
`;
