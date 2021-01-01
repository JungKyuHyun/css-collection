import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StickyElementsScrollingEffects } from '../components';

export default {
  title: 'jacob-css/StickyElementsScrollingEffects',
  component: StickyElementsScrollingEffects,
} as Meta;

const Template: Story = (args) => <StickyElementsScrollingEffects {...args} />;

export const BasicCss = Template.bind({});
