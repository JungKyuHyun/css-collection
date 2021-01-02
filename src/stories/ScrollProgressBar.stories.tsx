import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ScrollProgressBar } from '../components';

export default {
  title: 'jacob-css/ScrollProgressBar',
  component: ScrollProgressBar,
} as Meta;

const Template: Story = (args) => <ScrollProgressBar {...args} />;

export const BasicCss = Template.bind({});
