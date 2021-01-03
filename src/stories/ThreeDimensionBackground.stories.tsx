import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThreeDimensionBackground } from '../components';

export default {
  title: 'jacob-css/ThreeDimensionBackground',
  component: ThreeDimensionBackground,
} as Meta;

const Template: Story = (args) => <ThreeDimensionBackground {...args} />;

export const BasicCss = Template.bind({});
