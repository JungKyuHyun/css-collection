import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { DotMouseCursor } from '../components';

export default {
  title: 'jacob-css/DotMouseCursor',
  component: DotMouseCursor,
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
        cursor: 'none',
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
  return <DotMouseCursor />;
};

export const BasicCss = Template.bind({});
