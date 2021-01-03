import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ScrollDownIndicator } from '../components';

export default {
  title: 'jacob-css/ScrollDownIndicator',
  component: ScrollDownIndicator,
  parameters: {
    docs: {
      description: {
        component: '화면 아래로 스크롤을 유도하는 표시자입니다.',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <ScrollDownIndicator {...args} />;

export const BasicCss = Template.bind({});
