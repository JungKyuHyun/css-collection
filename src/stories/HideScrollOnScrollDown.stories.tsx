import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HideScrollOnScrollDown } from '../components';

export default {
  title: 'jacob-css/HideScrollOnScrollDown',
  component: HideScrollOnScrollDown,
} as Meta;

const Template: Story = (args) => <HideScrollOnScrollDown {...args} />;

export const BasicCss = Template.bind({});
