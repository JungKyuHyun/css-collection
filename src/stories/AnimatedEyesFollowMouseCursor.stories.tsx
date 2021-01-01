import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AnimatedEyesFollowMouseCursor } from '../components';

export default {
  title: 'jacob-css/AnimatedEyesFollowMouseCursor',
  component: AnimatedEyesFollowMouseCursor,
} as Meta;

const Template: Story = (args) => <AnimatedEyesFollowMouseCursor {...args} />;

export const BasicCss = Template.bind({});
BasicCss.args = {};
