import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { BouncingBall } from '../../components';

export default {
  title: 'canvas-study/BouncingBall',
  component: BouncingBall,
  decorators: [
    (Story) => {
      const style = {
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story = (args) => <BouncingBall {...args} />;

export const BasicCss = Template.bind({});
