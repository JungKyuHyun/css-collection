import React, { CSSProperties, useCallback, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { GlowingCheckbox, GlowingRadio } from '../components';
import styled, { keyframes } from 'styled-components';

export default {
  title: 'jacob-css/GlowingCheckbox',
  component: GlowingCheckbox,
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'auto',
        boxSizing: 'border-box',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component:
          '(checkbox/radio)타입의 input과 스타일을 조작하는 기초를 제공합니다.',
      },
    },
  },
} as Meta;

const options = [
  { value: 'Jacob ...', name: 'test' },
  { value: 'Jacob is good!', name: 'test' },
];

const Template: Story = () => {
  const [radioValue, setRadioValue] = useState<string>('Jacob ...');

  const handleRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRadioValue(event.target.value);
    },
    [],
  );
  return (
    <>
      <Title>checkbox</Title>
      <GlowingCheckbox />
      <Divider />
      <GlowingRadio
        value={radioValue}
        options={options}
        onChange={handleRadioChange}
      />
      <RadioValue>{radioValue}</RadioValue>
    </>
  );
};

const Title = styled.h2`
  color: white;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
`;

const Divider = styled.hr`
  margin: 28px 0 16px;
  width: 32%;
  background: white;
`;

const animation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;
const RadioValue = styled.span`
  color: whitesmoke;
  position: relative;
  margin-top: 8px;

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    background: cyan;
    width: 100%;
    transform: scaleX(0);
    transform-origin: bottom left;
    animation: ${animation} 0.5s ease-out infinite;
  }
`;

export const BasicCss = Template.bind({});
