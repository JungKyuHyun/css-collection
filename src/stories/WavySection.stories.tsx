import React from 'react';
import { Meta, Story } from '@storybook/react';
import { WavySection } from '../components';

export default {
  title: 'jacob-css/WavySection',
  component: WavySection,
  parameters: {
    docs: {
      description: { component: '물결 표시 애니메이션을 구현합니다.' },
    },
  },
} as Meta;

const Template: Story = (args) => <WavySection {...args} />;

export const BasicCss = Template.bind({});
