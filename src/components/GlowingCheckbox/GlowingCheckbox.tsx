import React, { memo } from 'react';
import styled from 'styled-components';

export const GlowingCheckbox = memo(() => {
  return <Checkbox type="checkbox" />;
});

const Checkbox = styled.input`
  position: relative;
  width: 120px;
  height: 40px;
  background: linear-gradient(0deg, black, white);
  -webkit-appearance: none;
  outline: none;
  border-radius: 20px;
  box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e,
    inset 0 0 10px rgba(0, 0, 0, 1), 0 5px 20px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(0, 0, 0, 0.2);

  &:checked {
    background: linear-gradient(0deg, cyan, white);
    box-shadow: 0 0 0 1px rgba(0, 255, 255, 0.3), 0 0 0 5px #3e3e3e,
      inset 0 0 10px rgba(0, 0, 0, 1), 0 5px 20px rgba(0, 0, 0, 0.5),
      inset 0 0 15px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 40px;
    background: linear-gradient(0deg, #000, gray);
    border-radius: 20px;
    box-shadow: 0 0 0 1px #232323;
    transform: scale(0.98, 0.96);
    transition: 0.5s;
  }

  &:checked::before {
    left: 40px;
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 2px);
    left: 64px;
    width: 4px;
    height: 4px;
    background: linear-gradient(0deg, gray, #000);
    border-radius: 50%;
    transition: 0.5s;
  }

  &:checked::after {
    background: cyan;
    left: 104px;
    box-shadow: 0 0 5px aqua, 0 0 15px aqua;
  }
`;
