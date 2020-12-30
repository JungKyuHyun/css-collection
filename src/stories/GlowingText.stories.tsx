import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GlowingText } from '../components';

export default {
  title: 'jacob-css/GlowingText',
  component: GlowingText,
} as Meta;

const Template: Story = (args) => <GlowingText {...args} />;

export const BasicCss = Template.bind({});
BasicCss.args = {};
