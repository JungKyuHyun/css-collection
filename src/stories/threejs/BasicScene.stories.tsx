import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BasicScene } from '../../components';

export default {
  title: 'threejs-by-jacob/BasicScene',
  component: BasicScene,
  parameters: {
    docs: {
      description: { component: 'threejs에서 제공하는 기본 예제' },
    },
  },
} as Meta;

const Template: Story = (args) => <BasicScene {...args} />;

export const BasicCss = Template.bind({});
