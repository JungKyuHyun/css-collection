import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { RangeInput } from '../components';

export default {
  title: 'jacob-css/RangeInput',
  component: RangeInput,
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
      description: {
        component: 'range타입 input의 스타일을 조작하는 기초를 제공합니다. ',
      },
    },
  },
} as Meta;

const Template: Story = () => {
  return <RangeInput />;
};

export const BasicCss = Template.bind({});
