import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { MoveSheep } from '../../components';

export default {
  title: 'canvas-study/MoveSheep',
  component: MoveSheep,
  decorators: [
    (Story) => {
      const style = {
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#ffcaec',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story = (args) => <MoveSheep {...args} />;

export const BasicCss = Template.bind({});
