import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GlowingCheckbox } from '../components';

export default {
  title: 'jacob-css/GlowingCheckbox',
  component: GlowingCheckbox,
} as Meta;

const Template: Story = () => {
  return <GlowingCheckbox />;
};

export const BasicCss = Template.bind({});
