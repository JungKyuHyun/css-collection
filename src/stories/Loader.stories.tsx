import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { Loader } from '../components';

export default {
  title: 'jacob-css/Loader',
  component: Loader,
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
  parameters: {
    docs: {
      description: { component: '그라데이션 로더(스피너)입니다.' },
    },
  },
} as Meta;

const Template: Story = () => {
  return <Loader />;
};

export const BasicCss = Template.bind({});
