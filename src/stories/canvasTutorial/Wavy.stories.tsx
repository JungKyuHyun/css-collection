import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { Wavy } from '../../components';

export default {
  title: 'canvas-study/Wavy',
  component: Wavy,
  decorators: [
    (Story) => {
      const style = {
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#000',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story = (args) => <Wavy {...args} />;

export const BasicCss = Template.bind({});
