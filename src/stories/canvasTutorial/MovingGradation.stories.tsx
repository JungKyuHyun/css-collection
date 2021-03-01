import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { MovingGradation } from '../../components';

export default {
  title: 'canvas-study/MovingGradation',
  component: MovingGradation,
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

const Template: Story = (args) => <MovingGradation {...args} />;

export const BasicCss = Template.bind({});
