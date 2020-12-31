import React from 'react';
import { Meta, Story } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { NeonButton, NeonButtonProps } from '../components';

export default {
  title: 'jacob-css/NeonButton',
  component: NeonButton,
} as Meta;

const Template: Story<NeonButtonProps> = () => {
  const label = text('label', 'jacob button');
  return <NeonButton label={label} />;
};

export const BasicCss = Template.bind({});
