import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion } from '../components';

export default {
  title: 'jacob-css/Accordion',
  component: Accordion,
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
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

const Template: Story = (args) => <Accordion {...args} />;

export const BasicCss = Template.bind({});
