import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { GlowingBackground } from '../components';
import styled from 'styled-components';

export default {
  title: 'jacob-css/GlowingBackground',
  component: GlowingBackground,
  parameters: {
    docs: {
      description: { component: '빛나는 포인터가 있는 배경입니다.' },
    },
  },
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

const Template: Story = (args) => (
  <>
    <Title>Jacob Css</Title>
    <GlowingBackground {...args} />
  </>
);

const Title = styled.h1`
  position: absolute;
  color: white;
  font-size: 8vw;
  z-index: 1;
`;

export const BasicCss = Template.bind({});
