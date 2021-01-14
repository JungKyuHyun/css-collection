import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { GhostText } from '../components';

export default {
  title: 'jacob-css/GhostText',
  component: GhostText,
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
      description: { component: '고스트 효과' },
    },
  },
} as Meta;

const Template: Story = (args) => <GhostText {...args} />;

export const BasicCss = Template.bind({});
