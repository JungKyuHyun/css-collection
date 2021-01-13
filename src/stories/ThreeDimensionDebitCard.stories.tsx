import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { ThreeDimensionDebitCard } from '../components';

export default {
  title: 'jacob-css/ThreeDimensionDebitCard',
  component: ThreeDimensionDebitCard,
  parameters: {
    docs: {
      description: {
        component: 'ThreeDimensionDebitCard은 사용자가 웹에서 3D로 구현된 카드를 볼 수 있게 합니다.',
      },
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

const Template: Story = (args) => <ThreeDimensionDebitCard {...args} />;

export const BasicCss = Template.bind({});
