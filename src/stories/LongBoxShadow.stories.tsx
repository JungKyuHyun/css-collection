import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { LongTextShadow, LongTextShadowProps } from '../components';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'jacob-css/LongTextShadow',
  component: LongTextShadow,
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

const Template: Story<LongTextShadowProps> = (args) => {
  const label = text('label', 'jacob');
  return <LongTextShadow label={label} />;
};

export const BasicCss = Template.bind({});
