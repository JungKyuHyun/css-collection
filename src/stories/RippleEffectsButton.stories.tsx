import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { RippleEffectsButton } from '../components';

export default {
  title: 'jacob-css/RippleEffectsButton',
  component: RippleEffectsButton,
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
      description: { component: '버튼의 hover에 ripple효과를 줍니다.' },
    },
  },
} as Meta;

const Template: Story = (args) => <RippleEffectsButton {...args} />;

export const BasicCss = Template.bind({});
