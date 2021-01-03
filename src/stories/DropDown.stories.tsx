import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from '../components';

export default {
  title: 'jacob-css/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: '오른쪽 위에 프로필 이미지를 누르면 드롭다운이 나옵니다.',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Dropdown {...args} />;

export const UserInfoDropdown = Template.bind({});
