import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { MovingText, MovingTextProps } from '../components';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'jacob-css/MovingText',
  component: MovingText,
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

const Template: Story<MovingTextProps> = () => {
  const label = text('label', 'jacob-css');
  return <MovingText label={label} />;
};

export const BasicCss = Template.bind({});
