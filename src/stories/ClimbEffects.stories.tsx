import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ClimbEffects } from '../components';

export default {
  title: 'jacob-css/ClimbEffects',
  component: ClimbEffects,
} as Meta;

const Template: Story = (args) => <ClimbEffects {...args} />;

export const BasicCss = Template.bind({});
BasicCss.args = {};
