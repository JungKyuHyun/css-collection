import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ClipPathCircle } from '../components';

export default {
  title: 'jacob-css/ClipPathCircle',
  component: ClipPathCircle,
  parameters: {
    docs: {
      description: { component: 'clip-path을 이용한 scroll text 애니메이션' },
    },
  },
} as Meta;

const Template: Story = (args) => <ClipPathCircle {...args} />;

export const BasicCss = Template.bind({});
