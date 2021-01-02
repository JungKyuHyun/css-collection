import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CustomScrollbar } from '../components';

export default {
  title: 'jacob-css/CustomScrollbar',
  component: CustomScrollbar,
} as Meta;

const Template: Story = (args) => <CustomScrollbar {...args} />;

export const BasicCss = Template.bind({});
