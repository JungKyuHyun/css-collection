import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BasicScene, BasicScene2 } from '../../components';

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

const Template2: Story = (args) => <BasicScene2 {...args} />;

export const BasicCss = Template.bind({});
export const ImproveBasicCss = Template2.bind({});
