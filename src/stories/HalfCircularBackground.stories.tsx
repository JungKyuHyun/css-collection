import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { HalfCircularBackground } from '../components';

export default {
  title: 'jacob-css/HalfCircularBackground',
  component: HalfCircularBackground,
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
      description: { component: '컨텐츠 아래쪽에 라운드된 배경을 제공합니다.' },
    },
  },
} as Meta;

const Template: Story = (args) => <HalfCircularBackground {...args} />;

export const BasicCss = Template.bind({});
