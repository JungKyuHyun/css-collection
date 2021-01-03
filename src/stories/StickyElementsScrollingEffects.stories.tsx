import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StickyElementsScrollingEffects } from '../components';

export default {
  title: 'jacob-css/StickyElementsScrollingEffects',
  component: StickyElementsScrollingEffects,
  parameters: {
    docs: {
      description: {
        component: '현재 페이지에 따라 sticky되는 헤더가 달라집니다.',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <StickyElementsScrollingEffects {...args} />;

export const BasicCss = Template.bind({});
