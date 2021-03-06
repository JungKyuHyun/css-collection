import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { NeonButton, NeonButtonProps } from '../components';

export default {
  title: 'jacob-css/NeonButton',
  component: NeonButton,
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

const Template: Story<NeonButtonProps> = () => {
  const label = text('label', 'jacob button');
  return <NeonButton label={label} />;
};

export const BasicCss = Template.bind({});
