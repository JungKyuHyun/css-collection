import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { GlowingText, GlowingTextProps } from '../components';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'jacob-css/GlowingText',
  component: GlowingText,
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

const Template: Story<GlowingTextProps> = () => {
  const label = text('label', 'jacob');
  return <GlowingText label={label} />;
};

export const BasicCss = Template.bind({});
