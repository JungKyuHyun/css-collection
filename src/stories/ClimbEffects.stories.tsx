import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { ClimbEffects } from '../components';

export default {
  title: 'jacob-css/ClimbEffects',
  component: ClimbEffects,
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

const Template: Story = (args) => <ClimbEffects {...args} />;

export const BasicCss = Template.bind({});
BasicCss.args = {};
