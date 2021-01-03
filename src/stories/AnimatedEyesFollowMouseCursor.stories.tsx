import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AnimatedEyesFollowMouseCursor } from '../components';
import { CSSProperties } from 'styled-components';

export default {
  title: 'jacob-css/AnimatedEyesFollowMouseCursor',
  component: AnimatedEyesFollowMouseCursor,
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
      description: { component: '마우스 포인터를 따라 눈동자가 움직입니다.' },
    },
  },
} as Meta;

const Template: Story = (args) => <AnimatedEyesFollowMouseCursor {...args} />;

export const BasicCss = Template.bind({});
BasicCss.args = {};
