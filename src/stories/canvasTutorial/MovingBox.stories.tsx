import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { MovingBox } from '../../components';

export default {
  title: 'canvas-study/MovingBox',
  component: MovingBox,
  decorators: [
    (Story) => {
      const style = {
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#3de1f5',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story = (args) => <MovingBox {...args} />;

export const BasicCss = Template.bind({});
