import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { ShadowEffects } from '../components';

export default {
  title: 'jacob-css/ShadowEffects',
  component: ShadowEffects,
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
        component: '그림자 효과를 확인하기 위한 단순 도넛입니다.',
      },
    },
  },
} as Meta;

const Template: Story = () => {
  return <ShadowEffects />;
};

export const BasicCss = Template.bind({});
