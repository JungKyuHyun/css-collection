import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { HeartAnimation } from '../components';

export default {
  title: 'jacob-css/HeartAnimation',
  component: HeartAnimation,
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
  parameters: {
    docs: {
      description: { component: '하트 하트~' },
    },
  },
} as Meta;

const Template: Story = (args) => <HeartAnimation {...args} />;

export const BasicCss = Template.bind({});
