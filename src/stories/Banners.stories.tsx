import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { Banners, BannerTypes } from '../components';

export default {
  title: 'jacob-css/Banners',
  component: Banners,
  parameters: {
    backgrounds: {
      default: 'white',
    },
    docs: {
      description: { component: '코카콜라 느낌의 배너와 배경입니다.' },
    },
  },
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'auto',
        boxSizing: 'border-box',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story = (args) => <Banners {...args} />;

export const AnimatedBanner1 = Template.bind({});
AnimatedBanner1.args = { type: BannerTypes.Animated1 };
