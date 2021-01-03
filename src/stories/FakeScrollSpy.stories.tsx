import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FakeScrollSpy } from '../components';

export default {
  title: 'jacob-css/FakeScrollSpy',
  component: FakeScrollSpy,
  parameters: {
    docs: {
      description: { component: '페이지 후버에 따라 네비게이션이 변합니다.' },
    },
  },
} as Meta;

const Template: Story = (args) => <FakeScrollSpy {...args} />;

export const BasicCss = Template.bind({});
