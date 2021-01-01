import React from 'react';
import { Meta, Story } from '@storybook/react';
import { WavySection } from '../components';

export default {
  title: 'jacob-css/WavySection',
  component: WavySection,
} as Meta;

const Template: Story = (args) => <WavySection {...args} />;

export const BasicCss = Template.bind({});
