import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HideScrollOnScrollDown } from '../components';

export default {
  title: 'jacob-css/HideScrollOnScrollDown',
  component: HideScrollOnScrollDown,
  parameters: {
    docs: {
      description: {
        component: '스크롤의 방향에 따라 헤더의 존재 유무가 결정됩니다.',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <HideScrollOnScrollDown {...args} />;

export const BasicCss = Template.bind({});
