import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { MiniWavy } from '../components';

export default {
  title: 'jacob-css/MiniWavy',
  component: MiniWavy,
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
  return <MiniWavy />;
};

export const BasicCss = Template.bind({});
