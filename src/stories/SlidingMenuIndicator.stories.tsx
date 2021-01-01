import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { SlidingMenuIndicator } from '../components';

export default {
  title: 'jacob-css/SlidingMenuIndicator',
  component: SlidingMenuIndicator,
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
} as Meta;

const Template: Story = (args) => <SlidingMenuIndicator {...args} />;

export const BasicCss = Template.bind({});
