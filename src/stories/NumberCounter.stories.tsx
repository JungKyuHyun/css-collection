import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { NumberCounter } from '../components';
import styled from 'styled-components';

export default {
  title: 'jacob-css/NumberCounter',
  component: NumberCounter,
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
        boxSizing: 'border-box',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story = () => {
  return (
    <>
      <H2>Only css!</H2>
      <NumberCounter />
    </>
  );
};

const H2 = styled.h2`
  margin: 0;
  color: gray;
  margin: 16px 0;
`;

export const BasicCss = Template.bind({});
