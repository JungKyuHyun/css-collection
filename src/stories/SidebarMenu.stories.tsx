import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SidebarMenu } from '../components';

export default {
  title: 'jacob-css/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    docs: {
      description: { component: '좌측 사이드바 컴포넌트입니다.' },
    },
  },
} as Meta;

const Template: Story = (args) => <SidebarMenu {...args} />;

export const BasicCss = Template.bind({});
