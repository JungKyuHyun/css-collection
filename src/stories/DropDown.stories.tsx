import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from '../components';

export default {
  title: 'jacob-css/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story = (args) => <Dropdown {...args} />;

export const UserInfoDropdown = Template.bind({});
