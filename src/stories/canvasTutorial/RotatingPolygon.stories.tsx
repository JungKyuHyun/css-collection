import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { RotatingPolygon } from '../../components';

export default {
  title: 'canvas-study/RotatingPolygon',
  component: RotatingPolygon,
  decorators: [
    (Story) => {
      const style = {
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#fff',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story = (args) => <RotatingPolygon {...args} />;

export const BasicCss = Template.bind({});
