import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { TextTyping } from '../components';

export default {
  title: 'jacob-css/TextTyping',
  component: TextTyping,
  parameters: {
    docs: {
      description: { component: '글자 입력 애니메이션' },
    },
  },
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        alignItems: 'center',
        height: '100vh',
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

const Template: Story = (args) => <TextTyping {...args} />;

export const BasicCss = Template.bind({});
