import React, { memo } from 'react';
import styled from 'styled-components';

export interface GlowingRadioProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: ReadonlyArray<{ label?: string; value: string; name: string }>;
  value?: string;
}

export const GlowingRadio = memo<GlowingRadioProps>(
  ({ className, onChange, options, value }) => {
    return (
      <Fieldset className={className}>
        <Legend>radio</Legend>
        {options.map((option) => (
          <div key={option.value}>
            <Radio
              type="radio"
              name={option.name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <label>{option.label}</label>
          </div>
        ))}
      </Fieldset>
    );
  },
);

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  text-transform: uppercase;
`;

const Legend = styled.legend`
  color: white;
  padding: 16px 8px;
  font-weight: 600;
  font-size: 24px;
  margin: 0 auto;
`;

const Radio = styled.input`
  position: relative;
  width: 120px;
  height: 40px;
  margin: 10px;
  outline: none;
  background: black;
  cursor: pointer;
  border-radius: 20px;
  appearance: none;
  box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.1),
    5px 5px 20px rgba(0, 0, 0, 0.1),
    inset -2px -2px 5px rgba(255, 255, 255, 0.1),
    inset 2px 2px 5px rgba(0, 0, 0, 0.5), 0 0 0 2px #3e3e3e;
  transition: 0.5s;

  &:checked {
    background: cyan;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 40px;
    background: linear-gradient(to top, black, gray);
    border-radius: 20px;
    box-shadow: 0 0 0 1px dimgray;
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
    left: 65px;
    width: 4px;
    height: 4px;
    background: gray;
    border-radius: 50%;
    transition: 0.5s;
  }

  &:checked::after {
    left: calc(65px + 40px);
    background: cyan;
    box-shadow: 0 0 5px cyan, 0 0 15px cyan, 0 0 30px cyan;
  }
`;
