import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SlidingMenuIndicator } from '../components';

export default {
  title: 'jacob-css/SlidingMenuIndicator',
  component: SlidingMenuIndicator,
} as Meta;

const Template: Story = (args) => <SlidingMenuIndicator {...args} />;

export const BasicCss = Template.bind({});
