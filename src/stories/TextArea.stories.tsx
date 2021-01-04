import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { TextArea } from '../components';

export default {
  title: 'jacob-css/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: { component: '애니메이션이 살짝 추가된 Textarea' },
    },
  },
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        top: '180px',
        position: 'absolute',
        left: 0,
        right: 0,
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

const Template: Story = (args) => <TextArea {...args} />;

export const BasicCss = Template.bind({});
