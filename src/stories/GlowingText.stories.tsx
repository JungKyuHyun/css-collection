import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GlowingText, GlowingTextProps } from '../components';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'jacob-css/GlowingText',
  component: GlowingText,
} as Meta;

const Template: Story<GlowingTextProps> = () => {
  const label = text('label', 'jacob');
  return <GlowingText label={label} />;
};

export const BasicCss = Template.bind({});
