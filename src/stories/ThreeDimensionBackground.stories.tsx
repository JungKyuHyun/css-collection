import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThreeDimensionBackground } from '../components';

export default {
  title: 'jacob-css/ThreeDimensionBackground',
  component: ThreeDimensionBackground,
  parameters: {
    docs: {
      description: { component: '3차원 배경을 제공합니다.' },
    },
  },
} as Meta;

const Template: Story = (args) => <ThreeDimensionBackground {...args} />;

export const BasicCss = Template.bind({});
