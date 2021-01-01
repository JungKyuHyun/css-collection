import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Banners, BannerTypes } from '../components';

export default {
  title: 'jacob-css/Banners',
  component: Banners,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta;

const Template: Story = (args) => <Banners {...args} />;

export const AnimatedBanner1 = Template.bind({});
AnimatedBanner1.args = { type: BannerTypes.Animated1 };
