import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ScrollProgressBar } from '../components';

export default {
  title: 'jacob-css/ScrollProgressBar',
  component: ScrollProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          '스크롤의 높이에 따라 커스텀된 진행바를 스크롤바 형식으로 제공합니다.',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <ScrollProgressBar {...args} />;

export const BasicCss = Template.bind({});
