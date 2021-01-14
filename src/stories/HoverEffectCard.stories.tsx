import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { HoverEffectCard } from '../components';

export default {
  title: 'jacob-css/HoverEffectCard',
  component: HoverEffectCard,
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
        boxSizing: 'border-box',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: { component: 'hover 효과가 들어간 카드입니다..' },
    },
    backgrounds: {
      default: 'whitesmoke',
    },
  },
} as Meta;

const Template: Story = (args) => <HoverEffectCard {...args} />;

export const BasicCss = Template.bind({});
