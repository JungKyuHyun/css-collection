import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { GlowingCheckbox } from '../components';

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
        component: '체크박스의 스타일의 조작하는 기초를 제공합니다.',
      },
    },
  },
} as Meta;

const Template: Story = () => {
  return <GlowingCheckbox />;
};

export const BasicCss = Template.bind({});
