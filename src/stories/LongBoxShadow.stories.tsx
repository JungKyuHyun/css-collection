import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LongTextShadow, LongTextShadowProps } from '../components';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'jacob-css/LongTextShadow',
  component: LongTextShadow,
} as Meta;

const Template: Story<LongTextShadowProps> = (args) => {
  const label = text('label', 'jacob');
  return <LongTextShadow label={label} />;
};

export const BasicCss = Template.bind({});
