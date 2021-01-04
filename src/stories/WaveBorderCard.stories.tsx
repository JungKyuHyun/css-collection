import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { WaveBorderCard } from '../components';

export default {
  title: 'jacob-css/WaveBorderCard',
  component: WaveBorderCard,
  parameters: {
    docs: {
      description: { component: '물결 표시 애니메이션을 구현합니다.' },
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

const Template: Story = (args) => <WaveBorderCard {...args} />;

export const BasicCss = Template.bind({});
