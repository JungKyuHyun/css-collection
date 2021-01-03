import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal } from '../components';

export default {
  title: 'jacob-css/Modal',
  component: Modal,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => {
      const style = {
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

const Template: Story = (args) => <Modal {...args} />;

export const BasicCss = Template.bind({});
