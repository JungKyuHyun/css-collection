import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FakeScrollSpy } from '../components';

export default {
  title: 'jacob-css/FakeScrollSpy',
  component: FakeScrollSpy,
} as Meta;

const Template: Story = (args) => <FakeScrollSpy {...args} />;

export const BasicCss = Template.bind({});
